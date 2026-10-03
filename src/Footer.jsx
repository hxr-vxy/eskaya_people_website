import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <h2>The Eskaya People</h2>
          <p>An educational website about the Eskaya indigenous cultural community of Bohol, Philippines.</p>
        </div>

        <div>
          <h3>Navigate</h3>
          <nav className="footer-links" aria-label="Footer">
            <Link to="/">Home</Link>
            <Link to="/community">Community</Link>
            <Link to="/history">History</Link>
            <Link to="/language">Language</Link>
            <Link to="/today">Today</Link>
            <Link to="/digital">Digital</Link>
            <Link to="/creators">Creators</Link>
          </nav>
        </div>

        <div className="footer-about">
          <h3>About This Site</h3>
          <p>
            This website presents the Eskaya as a living, dynamic community. Information is based on academic
            publications, government records, and cultural institution sources only.
          </p>
          <p>
            No fabricated interviews, statistics, or sources are included. Restricted, sacred, or private
            cultural information is intentionally omitted.
          </p>
        </div>
      </div>
      <button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 15l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </footer>
  );
}

export default Footer;
