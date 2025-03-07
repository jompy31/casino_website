import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo_youwager.png'
import {links} from '../data'
import { MdMenu } from 'react-icons/md';
import {MdOutlineClose} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import './navbar.css'



const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);


  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                <img src= {Logo} alt="Nav Logo" />
            </Link>
            <div className="navbar__socials">
                    <a href="https://www.instagram.com/two_wager/" target="_blank" rel='noreferrer noopener'>
                        <AiFillInstagram/>
                    </a>
            </div>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__Nav'}`}>
                {
                    links.map(({name, path}, index)=>{
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : 
                                ''} onClick={() => setIsNavShowing(prev => !prev)}> {name} </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/> : <MdMenu/>
                }
                
            </button>
        </div>
    </nav>
  )
}

export default Navbar

