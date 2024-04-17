import "./Navbar.scss"

const Navbar = () => {
  return (
    <div>
        <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar