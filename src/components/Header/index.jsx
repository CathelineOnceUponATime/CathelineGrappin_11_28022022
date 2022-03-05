import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

function Header () {
  return (
    <header>
      <nav>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
        <div>
          <NavLink to='/'> Accueil </NavLink>
          <NavLink to='/apropos'> A Propos </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
