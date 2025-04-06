// src/components/Header.tsx
import { JSX } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling
import logo from '../assets/react.svg'; // Optional: smaller logo for header
import '../css/Header.css'; // For styling the header and nav

function Header(): JSX.Element {
  return (
    <header className="site-header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          {/* You can put a smaller version of the logo here if desired */}
          <img src={logo} alt="Nooey Reese Amplification" className="header-logo" />
          {/* Or just text */}
          {/* <span>Nooey Reese Amplification</span> */}
        </Link>

        <nav className="main-navigation">
          <ul>
            <li>
              {/* NavLink adds an 'active' class when the route matches */}
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/amplifiers">Our Amplifiers</NavLink>
            </li>
            <li>
              <NavLink to="/custom">Custom Builds</NavLink>
            </li>
            <li>
              <NavLink to="/repair-restoration">Repair & Restoration</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;