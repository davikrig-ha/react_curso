import { Link } from 'react-router-dom'
import './style.css'

function Header(){
    return(
        <header>
            <h2>Menu</h2>
            <div className="menu">
            <Link to='/sobre'>Sobre</Link>
            <Link to='/'>Voltar</Link>
            </div>
        </header>
    )
}

export default Header;