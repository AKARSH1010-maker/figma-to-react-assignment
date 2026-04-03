import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Elementum</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#studio">Studio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#faqs">FAQs</a></li>
      </ul>
      <div className="navbar-hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
