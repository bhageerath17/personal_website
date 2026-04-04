// ─── Data ────────────────────────────────────────────────────────────────────

const PROFILE = {
  name: "Bhageerath Bogi",
  titles: ["Senior Data Scientist", "Senior ML Engineer", "MLOps · GenAI / LLMOps"],
  email: "bogi.bhageerath@gmail.com",
  phone: "352-278-0567",
  location: "Austin, Texas",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  summary: "Senior Data Scientist & ML Engineer with 10+ years of US experience building and owning large-scale production ML systems end-to-end — spanning feature engineering, distributed training, real-time model serving, MLOps, A/B experimentation, and model monitoring — across gig-economy, retail marketplace, and last-mile logistics domains.",
  impact: "$39M+",
  impactLabel: "Annualized Business Impact"
};

const TIMELINE = [
  {
    id: 1,
    type: "education",
    period: "2005 – 2009",
    startYear: 2005,
    endYear: 2009,
    institution: "National Institute of Technology",
    location: "Warangal, India",
    role: "Bachelor of Engineering",
    gpa: "8.70 / 10.00",
    highlights: [
      "Graduated with distinction in Engineering",
      "Foundation in mathematics, physics, and computational methods",
      "Developed analytical problem-solving skills that underpin a decade of ML innovation"
    ],
    tags: ["Engineering", "Mathematics", "Fundamentals"]
  },
  {
    id: 2,
    type: "education",
    period: "2009 – 2011",
    startYear: 2009,
    endYear: 2011,
    institution: "University of Florida",
    location: "Gainesville, FL",
    role: "M.S. — Thermal Sciences & Numerical Methods",
    gpa: "4.00 / 4.00",
    highlights: [
      "Perfect GPA across all graduate coursework",
      "Specialized in computational fluid dynamics and numerical simulation methods",
      "Research in thermal systems modeling laid groundwork for industrial simulation career"
    ],
    tags: ["Numerical Methods", "Simulation", "Research"]
  },
  {
    id: 3,
    type: "work",
    period: "Jul 2011 – Dec 2013",
    startYear: 2011,
    endYear: 2013,
    company: "Amerit Consulting Inc.",
    client: "Client: Caterpillar Inc.",
    location: "Remote",
    role: "Performance Simulation Engineer",
    highlights: [
      "Developed high-fidelity performance simulation models for heavy-duty industrial machinery",
      "Applied numerical methods expertise to real-world engineering challenges at scale",
      "Established cross-functional collaboration practices working embedded within Caterpillar engineering teams"
    ],
    tags: ["Simulation", "Heavy Machinery", "Numerical Modeling"]
  },
  {
    id: 4,
    type: "work",
    period: "Dec 2013 – Jan 2016",
    startYear: 2013,
    endYear: 2016,
    company: "Altair Product Design Inc.",
    client: "Client: Ford Motor Company",
    location: "Dearborn, MI",
    role: "Simulation Engineer",
    highlights: [
      "Invented novel exhaust-system thermal-management simulation methodology — optimizing exhaust enthalpy for cold-start emissions reduction",
      "Published research in SAE Journal (2017-01-0141) — peer-reviewed international publication",
      "Contributed to two patents supporting SULEV 30 regulatory compliance",
      "Bridged advanced simulation science and production automotive engineering constraints"
    ],
    tags: ["SAE Publication", "Patents", "SULEV 30", "Thermal Systems"],
    badge: "Published · Patented"
  },
  {
    id: 5,
    type: "education",
    period: "2018 – 2019",
    startYear: 2018,
    endYear: 2019,
    institution: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    role: "M.S. — Data Science",
    gpa: "3.91 / 4.00",
    highlights: [
      "Sponsored by Ford Motor Company — recognition of exceptional performance and strategic investment",
      "Emphasis: Machine Learning, Statistical Modeling, Analytics, Data Visualization",
      "Pivotal transition from physical simulation to data science and machine learning"
    ],
    tags: ["Machine Learning", "Statistical Modeling", "Analytics"],
    badge: "Ford Sponsored"
  },
  {
    id: 6,
    type: "work",
    period: "Feb 2016 – Jun 2021",
    startYear: 2016,
    endYear: 2021,
    company: "Ford Motor Company",
    location: "Dearborn, MI",
    role: "Senior Data Scientist",
    highlights: [
      "Founding member of the Powertrain Data Analytics team — built 10+ executive dashboards (Tableau, Looker) integrating connected-vehicle telemetry, warranty, and finance data",
      "Fine-tuned BERT transformer model for semantic text similarity; improved unethical retailer detection by 40% via automated NLP pipeline",
      "Implemented ensemble & gradient-boosting models for First-Time-Through prediction; saved $100K+ per avoided physical test",
      "Applied causal inference (DoWhy, EconML) and A/B testing to validate ML model impact",
      "Reduced VP-level recurring meeting time by 20% through executive analytics tooling"
    ],
    tags: ["BERT", "NLP", "A/B Testing", "Causal Inference", "Tableau"],
    metrics: [
      { value: "40%", label: "Detection Improvement" },
      { value: "$100K+", label: "Per Test Saved" },
      { value: "20%", label: "Meeting Time Saved" }
    ]
  },
  {
    id: 7,
    type: "work",
    period: "Jun 2021 – Present",
    startYear: 2021,
    endYear: 2026,
    company: "Shipt (Target Corporation)",
    location: "Austin, TX",
    role: "Senior Data Scientist · Senior ML Engineer",
    highlights: [
      "TLMD Fraud — Real-time fraud risk scoring system (gradient-boosted models + FastAPI) powering automated deactivation across full shopper/driver population — $24M savings FY2023, $15M YTD FY2024",
      "TLMD Actualizer — High-availability route matching service processing ~400,000 packages weekly under SLA-bound latency constraints",
      "Product Entity Resolution — Distributed ML pipeline across 120 retailers × 200,000 SKUs generating universal product IDs for multi-retailer catalog search",
      "Shopper Pay Model Optimization — 8% reduction in pay costs (~$6M annual savings) through improved flight-plan estimates",
      "GenAI Platform — Architected RAG-based chatbot, internal LLM gateway, and MCP-enabled agentic workflows; implemented RAGAS evaluation; $300K annual savings",
      "Established MLflow as org-wide ML standard; orchestrated pipelines via Airflow; model health via Datadog + Grafana"
    ],
    tags: ["MLOps", "GenAI", "RAG", "Fraud ML", "Real-Time Inference", "LangChain"],
    metrics: [
      { value: "$39M+", label: "Total Business Impact" },
      { value: "400K", label: "Packages/Week" },
      { value: "$300K", label: "GenAI Cost Savings" }
    ],
    badge: "Current Role"
  }
];

const SKILLS = [
  { category: "Machine Learning & AI", items: ["XGBoost / LightGBM", "Neural Networks", "Transformers / BERT", "NLP & Embeddings", "Time-Series Forecasting", "Anomaly Detection", "Causal Inference", "A/B Testing"] },
  { category: "Generative AI & LLMOps", items: ["RAG Pipelines", "LangChain / LlamaIndex", "MCP Agentic Workflows", "RAGAS Evaluation", "Prompt Engineering", "LLM Fine-Tuning", "Vector Databases", "OpenWebUI"] },
  { category: "MLOps & Engineering", items: ["MLflow", "Airflow", "FastAPI", "Docker / Kubernetes", "CI/CD Pipelines", "Model Registry", "Drift Monitoring", "Real-Time Inference"] },
  { category: "Cloud & Data", items: ["AWS SageMaker / EMR", "GCP Vertex AI / BigQuery", "Snowflake / Databricks", "Apache Spark / Kafka", "Postgres / Redis", "dbt", "Python / R / Java", "SQL"] }
];

// ─── Utility Hooks ────────────────────────────────────────────────────────────

function useIntersectionObserver(ref, options) {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return isVisible;
}

// ─── Components ───────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-content">
        <div className="hero-eyebrow">Career Timeline · 2005 – Present</div>
        <h1 className="hero-name">{PROFILE.name}</h1>
        <div className="hero-titles">
          {PROFILE.titles.map((t, i) => (
            <span key={i} className="hero-title-pill">{t}</span>
          ))}
        </div>
        <p className="hero-summary">{PROFILE.summary}</p>
        <div className="hero-impact">
          <div className="hero-impact-card">
            <span className="hero-impact-value">{PROFILE.impact}</span>
            <span className="hero-impact-label">{PROFILE.impactLabel}</span>
          </div>
          <div className="hero-impact-card">
            <span className="hero-impact-value">10+</span>
            <span className="hero-impact-label">Years US Experience</span>
          </div>
          <div className="hero-impact-card">
            <span className="hero-impact-value">3</span>
            <span className="hero-impact-label">Graduate Degrees</span>
          </div>
        </div>
        <div className="hero-contact">
          <a href={"mailto:" + PROFILE.email} className="hero-contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
            {PROFILE.email}
          </a>
          <span className="hero-contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            {PROFILE.phone}
          </span>
          <span className="hero-contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {PROFILE.location}
          </span>
        </div>
      </div>
    </header>
  );
}

function TimelineEntryIcon({ type }) {
  if (type === "education") {
    return (
      <svg className="entry-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    );
  }
  return (
    <svg className="entry-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
    </svg>
  );
}

function MetricPill({ value, label }) {
  return (
    <div className="metric-pill">
      <span className="metric-value">{value}</span>
      <span className="metric-label">{label}</span>
    </div>
  );
}

function TimelineEntry({ entry, index }) {
  const ref = React.useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.15 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={"timeline-entry " + (isEven ? "entry-left" : "entry-right") + (isVisible ? " entry-visible" : "")}
      style={{ transitionDelay: "0.1s" }}
    >
      {/* Central dot */}
      <div className={"entry-node " + entry.type}>
        <TimelineEntryIcon type={entry.type} />
      </div>

      {/* Card */}
      <div className={"entry-card " + entry.type}>
        {entry.badge && <div className="entry-badge">{entry.badge}</div>}

        <div className="entry-period">{entry.period}</div>

        <div className="entry-header">
          <h3 className="entry-org">
            {entry.company || entry.institution}
          </h3>
          {(entry.client || entry.location) && (
            <span className="entry-subloc">{entry.client || entry.location}</span>
          )}
          <div className="entry-role">{entry.role}</div>
          {entry.gpa && <div className="entry-gpa">GPA: {entry.gpa}</div>}
        </div>

        <ul className="entry-highlights">
          {entry.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        {entry.metrics && (
          <div className="entry-metrics">
            {entry.metrics.map((m, i) => <MetricPill key={i} value={m.value} label={m.label} />)}
          </div>
        )}

        <div className="entry-tags">
          {entry.tags.map((t, i) => <span key={i} className="entry-tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

function TimelineSection() {
  return (
    <section className="timeline-section">
      <div className="section-header">
        <h2 className="section-title">Career Progression</h2>
        <p className="section-subtitle">From engineering fundamentals to large-scale production AI systems</p>
      </div>
      <div className="timeline-track">
        <div className="timeline-spine" />
        {TIMELINE.map((entry, i) => (
          <TimelineEntry key={entry.id} entry={entry} index={i} />
        ))}
        <div className="timeline-cap">
          <div className="cap-dot" />
          <span className="cap-label">Present · 2026</span>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const ref = React.useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  return (
    <section className="skills-section" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">A decade of building production-grade ML systems across the full stack</p>
      </div>
      <div className={"skills-grid" + (isVisible ? " visible" : "")}>
        {SKILLS.map((group, i) => (
          <div key={i} className="skill-group" style={{ transitionDelay: (i * 0.1) + "s" }}>
            <h3 className="skill-group-title">{group.category}</h3>
            <ul className="skill-list">
              {group.items.map((item, j) => (
                <li key={j} className="skill-item">
                  <span className="skill-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-name">{PROFILE.name}</span>
        <span className="footer-sep">·</span>
        <span>{PROFILE.location}</span>
        <span className="footer-sep">·</span>
        <a href={"mailto:" + PROFILE.email}>{PROFILE.email}</a>
      </div>
      <div className="footer-copy">© 2026 Bhageerath Bogi. All rights reserved.</div>
    </footer>
  );
}

function App() {
  return (
    <div className="site-wrapper">
      <HeroSection />
      <main>
        <TimelineSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
