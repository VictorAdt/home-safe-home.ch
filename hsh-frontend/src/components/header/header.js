import PropTypes from "prop-types"
import React from "react"
import Nav from './nav'
import Logo from './logo'

const Header = ({ siteTitle }) => (
  <header>
    <Logo/>
    <Nav/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
