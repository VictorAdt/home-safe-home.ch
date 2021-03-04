import { Link } from 'gatsby';
import React from 'react';
import Branding from "./../logo/branding-mobile.svg";

const Logo = () => {
    return (
      <div className="branding">
        <Link to="/">
          <Branding className="brand" />
          <div className="typo">Home<span className="white">Safe</span>Home</div>
        </Link>
      </div>
    );
};

export default Logo;
