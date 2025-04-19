import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">OmniReach</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/config">Campaigns</Link></li>
        <li><Link to="/creators">Creators</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/persona">Persona</Link></li>
      </ul>
    </nav>
  );
}
