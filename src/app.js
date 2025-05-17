function App() {
  return (
    <div>
      <header>
        <h1>Your Name</h1>
      </header>
      <Section title="Education" />
      <Section title="Employment" />
      <Section title="Other Interests" />
      <footer className="footer">Copyright &copy; Your Name</footer>
    </div>
  );
}

function Section({ title }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>Content coming soon...</p>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
