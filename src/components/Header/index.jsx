import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

function Header () {
  return (
    <header>
      <nav>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
        <div>
          <Link to='/'> Accueil </Link>
          <Link to='/apropos'> A Propos </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
