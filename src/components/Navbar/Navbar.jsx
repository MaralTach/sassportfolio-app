import "./Navbar.scss"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav">
        <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link home-nav">Home</NavLink></li>
            <li className="nav__item">
              <NavLink to="/about" className="nav__link about-nav">About</NavLink></li>
            <li className="nav__item">
              <NavLink to="/projects" className="nav__link">Projects</NavLink></li>
            <li className="nav__item">
              <NavLink to="/contact" className="nav__link">Contact</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar