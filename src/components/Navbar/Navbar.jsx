 
import './Navbar.css';
import awa from '../../assets/awa.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
 
import React, { useState } from 'react'
 

const Navbar = () => {

  
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className="sidebar">
      <img src={awa} alt="Awanthi Malawanage" className="profile-image" />
      <h2 className="logo">Awanthi Malawanage</h2>

      <div className="social-icon">
        <a
          href="https://www.linkedin.com/in/awanthi-malawanage/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://x.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://github.com/Awanthiy?tab=overview&from=2024-07-01&to=2024-07-02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://discord.com/invite/awym"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </div>

      <ul className={click ? "nav-links active" : "nav-links" }>
        <li>
        <a href='#home' onClick={closeMenu}>Home</a>
        </li>
        <li>
        <a href='#aboutus' onClick={closeMenu}>About</a>
        </li>
        <li>
        <a href='#services' onClick={closeMenu}>Services</a>
        </li>
        <li>
        <a href='#porthfolio' onClick={closeMenu}>Portfolio</a>
        </li>
         
      </ul>
    </div>
  );
};

export default Navbar;
