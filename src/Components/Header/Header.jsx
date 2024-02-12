import { Link } from "react-router-dom"
import logo from '../../Images/LogoJuliaCoulon.png'

function Header() {

    return (
        <header className="header">
            <Link to="/" className="header--logo"><img src={logo} alt="logo"/></Link>
            <nav className="header--navbar">
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos de moi</Link>
                <Link to="/contact">Me contacter</Link>
            </nav>
        </header>
        
    )
}

export default Header