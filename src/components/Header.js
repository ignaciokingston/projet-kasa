import { Link } from 'react-router-dom'
import LOGO from '../assets/LOGO.png'
import '../style/header-footer.css'

function Header (){
    return (
        <header>
            <img src={LOGO} alt="Logo Kasa" />
            <nav>
                <li>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </li>
            </nav>
        </header>
    )
}

export default Header