import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const { open, selectLink } = props;
  const { selectedLink, openContact } = props;
  return (
    <div className="flex row align-center justify-center w-100">
      <div className="navbar__container left flex row justify-start w-40">
        <Link
          className={`navbar__link flex align-center justify-center mx-auto body-2 w-40 text-center padding-0 ${selectedLink ===
            'about' ? 'navbar__link selected color-primary' : 'color-white'}`}
          to={{ pathname: '/about' }}
          onClick={() => selectLink('about')}
        >
          ABOUT
        </Link>

        <Link
          className={` navbar__link flex align-center justify-center mx-auto body-2  w-40 text-center

        padding-0 ${selectedLink === 'development' ? 'navbar__link selected color-primary' : 'color-white'}`}
          onClick={() => selectLink('development')}
          to={{ pathname: '/holdings/development' }}
        >
          DEVELOPMENT OPPORTUNITIES
        </Link>
      </div>
      <Link className="navbar__llink w-20" to={{ pathname: '/' }}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/Logos%2FLogo%20Large%20White.png?alt=media&token=7109b6eb-0243-41fe-88e4-9bd80693679b"
          className="nav__logo"
        />
      </Link>
      <div className="navbar__container right flex row justify-end w-40">
        <Link
          className={`navbar__link flex align-center justify-center mx-auto body-2  w-40 text-center padding-0 ${selectedLink ===
            'opportunities' ? 'navbar__link selected color-primary' : 'color-white'}`}
          to={{ pathname: '/holdings/opportunities' }}
          onClick={() => selectLink('opportunities')}
        >
          LEASING OPPORTUNITIES
        </Link>
        <Link
          className={`navbar__link flex align-center justify-center mx-auto body-2  w-40 text-center padding-0 ${selectedLink ===
            'all-properties' ? 'navbar__link selected color-primary' : 'color-white'}`}
          to={{ pathname: '/holdings/all-properties' }}
          onClick={() => selectLink('all-properties')}
        >
          ALL PROPERTIES
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
