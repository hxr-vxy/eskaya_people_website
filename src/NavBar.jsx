import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const LINKS = [
  ["/", "Home"], ["/community", "Community"], ["/history", "History"], ["/language", "Language"],
 ["/digital", "Digital"], ["/creators", "Creators"],
];

function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);

  return (
    <header className={`navbar ${open ? "open" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="brand"></Link>
        <button className="nav-toggle" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          <span className="bars" aria-hidden="true" />
          <span className="sr">{open ? "Close menu" : "Open menu"}</span>
        </button>
        <nav id="site-nav" aria-label="Main">
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
