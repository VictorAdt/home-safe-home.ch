import PropTypes from "prop-types"
import React, { useEffect, useState } from 'react';
import Nav from './nav'
import Logo from './logo'
import Headroom from "headroom.js";

const Header = ({ siteTitle }) => {

  useEffect(() => {

    /** start headroom **/
    const header = document.querySelector("header");
    const headroom  = new Headroom(header);
    headroom.init();

  }, [])
  return (
    <header id="header" className="headroom">
      <div className="header-inner row">
        <div className="col col-branding s8 m4 l3">
          <Logo/>
        </div>
        <div className="col col-nav s4 m8 l9">
          <Nav/>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
