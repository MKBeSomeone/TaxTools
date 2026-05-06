import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">TaxTools</div>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/k1">K-1</NavLink></li>
        <li><NavLink to="/w2">W-2</NavLink></li>
      </ul>
    </nav>
  )
}
