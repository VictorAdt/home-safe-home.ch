import { Link } from 'gatsby';
import React from 'react';
import Branding from "./../logo/branding.svg";
import BrandingMobile from "./../logo/branding-mobile.svg";

const Logo = () => {
    return (
        <Link to="/">
          <Branding className="brandBig"/>
          <BrandingMobile className="brandSmall" />
        </Link>
    );
};

export default Logo;
