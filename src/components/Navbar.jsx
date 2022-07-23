import React, { useState } from 'react'
import { getLanguage, getText } from '../locales/index'
import { LANGUAGE } from '../tools/constants';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const [burger, setBurger] = useState(false)
  
    const changeNavbar = () => {
  
      if (window.scrollY >= 30) {
        setNavbar(true);
      } else {
        setNavbar(false)
      }
    }
  
    window.addEventListener('scroll', changeNavbar);
  
    const changeLanguage = (e) => {
      localStorage.setItem(LANGUAGE, e.target.value)
      document.location.reload(true)
    }

    return (
       <>
        <div className={`navBar ${navbar ? 'active' : ''}`}>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-2 col-4">
                        <div className="logo">
                            <a href="/">Coldmaker</a>
                        </div>
                    </div>
                    <div className={`col-9 mobileWrap ${burger ? '' : 'burgered'}`}>
                        <ul className="nav-menu">
                            <li>
                                <a onClick={() => setBurger(!burger)} href="/">{getText("home")}</a>
                            </li>
                            <li>
                                <a onClick={() => setBurger(!burger)} href="#services">{getText("services")}</a>
                            </li>
                            <li>
                                <a onClick={() => setBurger(!burger)} href="#about">{getText("about")}</a>
                            </li>
                            <li>
                                <a onClick={() => setBurger(!burger)} href="#team">{getText("team")}</a>
                            </li>
                            <li>
                                <a onClick={() => setBurger(!burger)} href="#contacts">{getText("contacts")}</a>
                            </li>
                            <li>
                                <a href="tel:+998999992727">+998 99 999 27 27</a>
                            </li>
                            <li>
                                <select className='siteLang' onChange={changeLanguage}>
                                    <option value="ru" selected={getLanguage() === "ru"} >Ру</option>
                                    <option value="uz" selected={getLanguage() === "uz"} >Uz</option>
                                </select>
                            </li>
                        </ul>
                    </div>

                    <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                        <div className="burger1"></div>
                        <div className="burger2"></div>
                        <div className="burger3"></div>
                    </div>

                </div>
            </div>
        </div >
        <div className="navbarLine"></div>
       </>
    )
}

export default Navbar