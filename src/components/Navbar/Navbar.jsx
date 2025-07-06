import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="nav">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Astro Nexus</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
