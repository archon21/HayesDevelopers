import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const { open, selectLink } = props;
  const { selectedLink, openContact } = props;
  return (
    <div className="flex row align-center justify-center w-100">
      <div className="flex row justify-start w-50">
        <Link
          className={`navbar__link flex align-center justify-center margin-0  body-1 color-white w-50 padding-0 ${selectedLink ===
            'about' && 'navbar__link selected'}`}
          to={{ pathname: '/about' }}
          onClick={() => selectLink('about')}
        >
          ABOUT
        </Link>

        <Link
          className={` navbar__link flex align-center justify-center margin-0  body-1 color-white w-50

        padding-0 ${selectedLink === 'development' && 'navbar__link selected'}`}
          onClick={() => selectLink('development')}
          to={{ pathname: '/holdings/development' }}
        >
          DEVELOPMENT OPPORTUNITIES
        </Link>
      </div>
      <Link className="navbar__llink" to={{ pathname: '/' }}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/Logos%2FLogo%20Large%20White.png?alt=media&token=7109b6eb-0243-41fe-88e4-9bd80693679b"
          className="nav__logo"
        />
      </Link>
      <div className="flex row justify-end w-50">
        <Link
          className={`navbar__link flex align-center justify-center margin-0  body-1  color-white w-50 padding-0 ${selectedLink ===
            'opportunities' && 'navbar__link selected'}`}
          to={{ pathname: '/holdings/opportunities' }}
          onClick={() => selectLink('opportunities')}
        >
          LEASING OPPORTUNITIES
        </Link>
        <Link
          className={`navbar__link flex align-center justify-center margin-0  body-1 color-white w-50 padding-0 ${selectedLink ===
            'all-properties' && 'navbar__link selected'}`}
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
