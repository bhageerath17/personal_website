const STORAGE_KEY = 'indeed_ds_manager_applications';

const STATUS_OPTIONS = [
  'Applied',
  'Phone Screen',
  'Technical Interview',
  'Final Interview',
  'Offer Received',
  'Rejected',
  'Withdrawn',
];

const STATUS_COLORS = {
  'Applied': '#3b82f6',
  'Phone Screen': '#8b5cf6',
  'Technical Interview': '#f59e0b',
  'Final Interview': '#f97316',
  'Offer Received': '#10b981',
  'Rejected': '#ef4444',
  'Withdrawn': '#6b7280',
};

function loadApplications() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveApplications(apps) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ── Modal: Add / Edit Application ────────────────────────────────────────────

function ApplicationModal({ app, onSave, onClose }) {
  const isEdit = !!app;
  const [form, setForm] = React.useState(
    app || {
      company: '',
      role: '',
      location: '',
      salary: '',
      url: '',
      dateApplied: new Date().toISOString().slice(0, 10),
      status: 'Applied',
      notes: '',
    }
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.company.trim() || !form.role.trim()) return;
    onSave({ ...form, id: app ? app.id : generateId() });
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{isEdit ? 'Edit Application' : 'Add Application'}</h2>
          <button className="btn-icon" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <label>
              Company *
              <input name="company" value={form.company} onChange={handleChange} placeholder="e.g. Acme Corp" required />
            </label>
            <label>
              Role *
              <input name="role" value={form.role} onChange={handleChange} placeholder="e.g. Data Science Manager" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Location
              <input name="location" value={form.location} onChange={handleChange} placeholder="e.g. Remote / NYC" />
            </label>
            <label>
              Salary Range
              <input name="salary" value={form.salary} onChange={handleChange} placeholder="e.g. $140k–$170k" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Date Applied
              <input type="date" name="dateApplied" value={form.dateApplied} onChange={handleChange} />
            </label>
            <label>
              Status
              <select name="status" value={form.status} onChange={handleChange}>
                {STATUS_OPTIONS.map(s => <option key={s}>{s}</option>)}
              </select>
            </label>
          </div>
          <label className="full-width">
            Indeed Job URL
            <input name="url" value={form.url} onChange={handleChange} placeholder="https://www.indeed.com/viewjob?jk=..." />
          </label>
          <label className="full-width">
            Notes
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Recruiter name, interview details, follow-up reminders…" />
          </label>
          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">{isEdit ? 'Save Changes' : 'Add Application'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Status Badge ──────────────────────────────────────────────────────────────

function StatusBadge({ status, onChange }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="status-wrapper">
      <span
        className="status-badge"
        style={{ backgroundColor: STATUS_COLORS[status] }}
        onClick={() => setOpen(o => !o)}
        title="Click to change status"
      >
        {status}
      </span>
      {open && (
        <div className="status-dropdown">
          {STATUS_OPTIONS.map(s => (
            <button
              key={s}
              className="status-option"
              style={{ borderLeft: `3px solid ${STATUS_COLORS[s]}` }}
              onClick={() => { onChange(s); setOpen(false); }}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Summary Stats ─────────────────────────────────────────────────────────────

function Stats({ apps }) {
  const counts = STATUS_OPTIONS.reduce((acc, s) => {
    acc[s] = apps.filter(a => a.status === s).length;
    return acc;
  }, {});
  const active = apps.filter(a => !['Rejected', 'Withdrawn'].includes(a.status)).length;

  return (
    <div className="stats-bar">
      <div className="stat-card">
        <span className="stat-number">{apps.length}</span>
        <span className="stat-label">Total Applied</span>
      </div>
      <div className="stat-card">
        <span className="stat-number">{active}</span>
        <span className="stat-label">Active</span>
      </div>
      {['Phone Screen', 'Technical Interview', 'Final Interview', 'Offer Received'].map(s => (
        counts[s] > 0 && (
          <div className="stat-card" key={s}>
            <span className="stat-number" style={{ color: STATUS_COLORS[s] }}>{counts[s]}</span>
            <span className="stat-label">{s}</span>
          </div>
        )
      ))}
    </div>
  );
}

// ── Main Tracker App ──────────────────────────────────────────────────────────

function TrackerApp() {
  const [apps, setApps] = React.useState(loadApplications);
  const [showModal, setShowModal] = React.useState(false);
  const [editApp, setEditApp] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState('All');
  const [sortField, setSortField] = React.useState('dateApplied');
  const [sortDir, setSortDir] = React.useState('desc');
  const [deleteConfirm, setDeleteConfirm] = React.useState(null);

  function persist(updated) {
    setApps(updated);
    saveApplications(updated);
  }

  function handleSave(app) {
    const existing = apps.find(a => a.id === app.id);
    persist(existing ? apps.map(a => a.id === app.id ? app : a) : [app, ...apps]);
    setShowModal(false);
    setEditApp(null);
  }

  function handleStatusChange(id, status) {
    persist(apps.map(a => a.id === id ? { ...a, status } : a));
  }

  function handleDelete(id) {
    persist(apps.filter(a => a.id !== id));
    setDeleteConfirm(null);
  }

  function handleSort(field) {
    if (sortField === field) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  }

  const filtered = apps
    .filter(a => {
      const q = search.toLowerCase();
      const matchSearch = !q ||
        a.company.toLowerCase().includes(q) ||
        a.role.toLowerCase().includes(q) ||
        (a.location || '').toLowerCase().includes(q) ||
        (a.notes || '').toLowerCase().includes(q);
      const matchStatus = filterStatus === 'All' || a.status === filterStatus;
      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      let va = a[sortField] || '';
      let vb = b[sortField] || '';
      const cmp = va < vb ? -1 : va > vb ? 1 : 0;
      return sortDir === 'asc' ? cmp : -cmp;
    });

  function SortIcon({ field }) {
    if (sortField !== field) return <span className="sort-icon">↕</span>;
    return <span className="sort-icon active">{sortDir === 'asc' ? '↑' : '↓'}</span>;
  }

  return (
    <div className="tracker-app">
      <header className="tracker-header">
        <div className="tracker-title">
          <h1>DS Manager Job Tracker</h1>
          <span className="tracker-subtitle">Indeed Applications</span>
        </div>
        <button className="btn btn-primary" onClick={() => { setEditApp(null); setShowModal(true); }}>
          + Add Application
        </button>
      </header>

      <Stats apps={apps} />

      <div className="toolbar">
        <input
          className="search-input"
          type="search"
          placeholder="Search by company, role, location…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="filter-select" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="All">All Statuses</option>
          {STATUS_OPTIONS.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          {apps.length === 0
            ? <><p className="empty-icon">📋</p><p>No applications yet.</p><p>Click <strong>+ Add Application</strong> to get started.</p></>
            : <><p className="empty-icon">🔍</p><p>No results match your search.</p></>
          }
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="tracker-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('company')} className="sortable">Company <SortIcon field="company" /></th>
                <th onClick={() => handleSort('role')} className="sortable">Role <SortIcon field="role" /></th>
                <th onClick={() => handleSort('location')} className="sortable">Location <SortIcon field="location" /></th>
                <th>Salary</th>
                <th onClick={() => handleSort('dateApplied')} className="sortable">Applied <SortIcon field="dateApplied" /></th>
                <th onClick={() => handleSort('status')} className="sortable">Status <SortIcon field="status" /></th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(app => (
                <tr key={app.id}>
                  <td className="td-company">
                    {app.url
                      ? <a href={app.url} target="_blank" rel="noopener noreferrer">{app.company}</a>
                      : app.company}
                  </td>
                  <td>{app.role}</td>
                  <td className="td-muted">{app.location || '—'}</td>
                  <td className="td-muted">{app.salary || '—'}</td>
                  <td className="td-muted">{formatDate(app.dateApplied)}</td>
                  <td>
                    <StatusBadge
                      status={app.status}
                      onChange={status => handleStatusChange(app.id, status)}
                    />
                  </td>
                  <td className="td-notes" title={app.notes}>{app.notes || '—'}</td>
                  <td className="td-actions">
                    <button className="btn-icon" title="Edit" onClick={() => { setEditApp(app); setShowModal(true); }}>✏️</button>
                    <button className="btn-icon btn-danger" title="Delete" onClick={() => setDeleteConfirm(app.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filtered.length > 0 && (
        <p className="result-count">Showing {filtered.length} of {apps.length} application{apps.length !== 1 ? 's' : ''}</p>
      )}

      {showModal && (
        <ApplicationModal
          app={editApp}
          onSave={handleSave}
          onClose={() => { setShowModal(false); setEditApp(null); }}
        />
      )}

      {deleteConfirm && (
        <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
          <div className="modal modal-sm" onClick={e => e.stopPropagation()}>
            <h2>Delete Application?</h2>
            <p>This cannot be undone.</p>
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={() => setDeleteConfirm(null)}>Cancel</button>
              <button className="btn btn-danger" onClick={() => handleDelete(deleteConfirm)}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<TrackerApp />, document.getElementById('tracker-root'));
