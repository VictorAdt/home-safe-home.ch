import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby'
import { set } from 'date-fns';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
      const html = document.querySelector('html')
      if (menuOpen) {
          html.style.overflow = 'hidden'
          html.style.height = '100vh'
      } else {
          html.style.overflow = 'visible'
      }
  }, [menuOpen])
  return (
      <>
        {/** toggler **/}
        <div id="nav-icon" className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        {/** mobile menu **/}
        <nav className="menu__mobile" style={{ height: menuOpen ? '100vh' : '0', opacity: menuOpen ? 1 : 0 }}>
          <ul className="menu">

          </ul>
        </nav>

        {/** desktop menu **/}
        <nav className="menu__desktop">
          <ul className="menu">
            <li><Link to="/" activeStyle={{ color: "#fff" }}>home</Link></li>
            <li><Link to="/atelier" activeStyle={{ color: "#fff" }}>ateliers</Link></li>
            <li><Link to="/philosophie" activeStyle={{ color: "#fff" }}>philosophie</Link></li>
            <li><Link to="/consulting" activeStyle={{ color: "#fff" }}>consulting</Link></li>
            <li><Link to="/equipe" activeStyle={{ color: "#fff" }}>équipe</Link></li>
            <li><Link to="/contact" activeStyle={{ color: "#fff" }}>contact</Link></li>
          </ul>
        </nav>
      </>
  );
};

export default Nav;
