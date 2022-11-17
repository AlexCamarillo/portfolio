import {NavLink} from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>A</span>
            <h3>Alejandro Camarillo De La Cruz</h3>
        </div>
        
        <nav>
            <ul>
                <li>
                    <NavLink to='/inicio' className={ ({isActive}) => isActive ? "active" : "" }>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/portafolio' className={ ({isActive}) => isActive ? "active" : "" }>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/servicios' className={ ({isActive}) => isActive ? "active" : "" }>Services</NavLink>
                </li>
                <li>
                    <NavLink to='/curriculum' className={ ({isActive}) => isActive ? "active" : "" }>CV</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto' className={ ({isActive}) => isActive ? "active" : "" }>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
