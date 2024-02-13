import { Link } from "react-router-dom"
import logo from '../../Images/LogoJuliaCoulon.png'
import { useState } from "react";

function Header() {

    const [showLinks, setShowLinks] = useState(false)

    function handleShowLinks() {
        setShowLinks(!showLinks)
    }

    return (
        <header className="header">
            <Link to="/" className="header--logo"><img src={logo} alt="logo"/></Link>
            <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
                <ul className="navbar__links">
                    <li className="navbar__item"> 
                        <Link className="navbar__link" to="/">Accueil</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/about">A propos de moi</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/contact">Me contacter</Link>
                    </li>
                </ul>

                <button className="navbar__burger" onClick={handleShowLinks}>
                    <span className="burger-bar"></span>
                </button>
            </nav>
            
        </header>
        
    )
}

export default Header