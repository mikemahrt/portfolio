import './index.scss'
import LogoM from '../../assets/images/logo-m.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faDiscord
} from '@fortawesome/free-brands-svg-icons'
import { 
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faFolderOpen,
    faBars,
    faClose,
    faCertificate,
 } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);
    
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoM} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="michaelmahrt" />
            </Link>
            <nav className={showNav ? 'mobile-show' : '' }>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} activeclassname="active" className="certifications-link" to="/certifications">
                    <FontAwesomeIcon icon={faCertificate} color="#4d4d4d" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon'
                />
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/michaelmahrt/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/vidramage'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/michaelmahrt/'>
                        <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon'
            />
        </div>
    )
}

export default Sidebar