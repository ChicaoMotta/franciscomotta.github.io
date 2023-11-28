import {useState} from 'react'
import './NavComponent.css'

const NavComponent = () => {
  const [active, setActive] = useState(0)

    const links = ['ABOUT', 'EXPERIENCE', 'PROJECTS']
  return (
    <nav className="hidden lg:block">
    <ul className="nav-bar mt-20">
    {
        links.map((link, index) => (
            <li key={link}>
            <a href={`#${link.toLocaleLowerCase()}`} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
              <span className="nav-decoration"></span>
              <span className="nav-text">{link}</span>
            </a>
          </li>
        ))
    }
    </ul>
  </nav>
  )
}

export default NavComponent