import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillInstagram } from 'react-icons/ai';
import { MdOutlineKeyboardArrowUp, MdOutlineClose } from 'react-icons/md';
import Logo from '../images/logo_youwager.png';
import { links } from '../data';
import './footer.css';


const Footer = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`footer ${isNavShowing ? 'show__nav' : ''}`}>
      <div className="container footer__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <div className="navbar__socials">
          <a
            href="https://www.instagram.com/two_wager/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillInstagram />
          </a>
        </div>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__Nav'}`} style={{ transform: isNavShowing ? 'translateY(-150%)' : 'translateY(0)' }}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  onClick={() => setIsNavShowing(false)} // Cambiar a setIsNavShowing(false) en lugar de toggle (!prev)
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <button className="nav__toggle-btn" onClick={() => setIsNavShowing((prev) => !prev)}>
          {isNavShowing ? <MdOutlineClose /> : <MdOutlineKeyboardArrowUp  />}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
