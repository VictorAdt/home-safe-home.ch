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
            <div id="nav-icon" className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="menu__mobile" style={{
                height: menuOpen ? '100vh' : '0',
                opacity: menuOpen ? 1 : 0
            }}>
                <Link to="/" activeStyle={{ color: "#fff" }}> home </Link>
                <Link to="/atelier" activeStyle={{ color: "#fff" }}> ateliers </Link>
                <Link to="/philosophie" activeStyle={{ color: "#fff" }}> philosophie </Link>
                <Link to="/consulting" activeStyle={{ color: "#fff" }}> consulting </Link>
                <Link to="/equipe" activeStyle={{ color: "#fff" }}> équipe </Link>
                <Link to="/contact" activeStyle={{ color: "#fff" }}> contact </Link>
            </nav>
            <nav className="menu__desktop">
                <Link to="/" activeStyle={{ color: "#fff" }}> home </Link>
                <Link to="/atelier" activeStyle={{ color: "#fff" }}> ateliers </Link>
                <Link to="/philosophie" activeStyle={{ color: "#fff" }}> philosophie </Link>
                <Link to="/consulting" activeStyle={{ color: "#fff" }}> consulting </Link>
                <Link to="/equipe" activeStyle={{ color: "#fff" }}> équipe </Link>
                <Link to="/contact" activeStyle={{ color: "#fff" }}> contact </Link>
            </nav>
        </>
    );
};

export default Nav;