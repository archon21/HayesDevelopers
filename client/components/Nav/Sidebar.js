import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => {
  const { open, selectLink } = props;
  const { selectedLink, openContact } = props;
  return (
    <aside
      className={` ${
        !open ? 'open' : ''
      } aside flex column align-center justify-center  `}
    >
      <Link
        className={`link__major headline-6 color-white p-5px ${selectedLink ===
          'about' && 'selected'}`}
        to={{ pathname: '/about' }}
        onClick={() => selectLink('about')}
      >
        ABOUT
      </Link>
      <Link
        className={`link__major  headline-6 color-white p-5px ${selectedLink ===
          'hayes-team' && 'selected'}`}
        to={{ pathname: '/hayes-team' }}
        onClick={() => selectLink('hayes-team')}
      >
        THE HAYES TEAM
      </Link>
      <div className="flex column">
        <Link
          className={`link__major  headline-6 color-white p-5px ${selectedLink ===
            'property-services' && 'selected'}`}
          to={{ pathname: '/property-services' }}
          onClick={() => selectLink('property-services')}
        >
          PROPERTY MANAGEMENT
        </Link>
      </div>
      <Link
        className={` link__major  headline-6 color-white p-5px ${selectedLink ===
          'development' && 'selected'}`}
        onClick={() => selectLink('development')}
        to={{ pathname: '/holdings/development' }}
      >
        DEVELOPMENT OPPORTUNITIES
      </Link>
      <Link
        className={`link__major  headline-6 color-white p-5px ${selectedLink ===
          'opportunities' && 'selected'}`}
        to={{ pathname: '/holdings/opportunities' }}
        onClick={() => selectLink('opportunities')}
      >
        LEASING OPPORTUNITIES
      </Link>
      <Link
        className={`link__major  headline-6 color-white p-5px ${selectedLink ===
          'all-properties' && 'selected'}`}
        to={{ pathname: '/holdings/all-properties' }}
        onClick={() => selectLink('all-properties')}
      >
        ALL PROPERTIES
      </Link>
      <h1 className="link__major  headline-6 color-white" onClick={openContact}>
        CONTACT
      </h1>
      <div className="flex column wrap my-20px text-center">
        <p className="body-1 color-tirciary my-5px padding-0">
          <b> Ph: (860) 646-0131</b>
        </p>
        <p className="body-1 color-tirciary margin-0 padding-0">
          <b>Fax: (860) 644-9073</b>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
