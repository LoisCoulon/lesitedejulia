import { Link } from "react-router-dom"

function Header() {

    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos de moi</Link>
        </nav>
    )
}

export default Header