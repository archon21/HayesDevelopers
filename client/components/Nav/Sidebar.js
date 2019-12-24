import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Gril } from '../../sub-components/containers';
const Sidebar = props => {
  const { open, selectedLink, holdings, sideSelectedLink } = props;
  const { selectLink, openContact } = props;
  return (
    <aside
      className={` ${
        !open ? 'open' : ''
      } aside flex column align-center justify-center  `}
    >
      <Gril />
      <div className="flex column align-start w-90">
        <Link
          className={` aside__link__major w-100 text-left  margin-0  headline-6 color-white p-5px ${selectedLink ===
            'development' && 'selected'}`}
          onClick={() => selectLink('development')}
          to={{ pathname: '/holdings/development' }}
        >
          DEVELOPMENT OPPORTUNITIES
        </Link>
        <div className="flex column align-start align-self-end w-90">
          {Object.entries(holdings.developments).map(development => {
            const [key, data] = development;
            const { name } = data;
            return (
              <Link
                className={`aside__link__minor text-left ${sideSelectedLink ===
                  key && 'selected'}  body-2 color-white p-5px `}
                key={key}
                to={{ pathname: `/holdings/development/${key}` }}
                onClick={() => selectLink(`development`, key)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
      <Gril />
      <div className="flex column align-start w-90">
        <Link
          className={`aside__link__major w-100 text-left  margin-0  headline-6 color-white p-5px ${selectedLink ===
            'opportunities' && 'selected'}`}
          to={{ pathname: '/holdings/opportunities' }}
          onClick={() => selectLink('opportunities')}
        >
          LEASING OPPORTUNITIES
        </Link>
        <div className="flex column align-start align-self-end w-90">
          {Object.entries(holdings.properties).map(leasing => {
            const [key, data] = leasing;
            const { name } = data;
            return (
              <Link
                className={`aside__link__minor text-left ${sideSelectedLink ===
                  key && 'selected'}  body-2 color-white p-5px `}
                key={key}
                to={{ pathname: `/holdings/opportunities/${key}` }}
                onClick={() => selectLink(`opportunities`, key)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
      <Gril />
      <div className="flex column align-start w-90">
        <Link
          className={`aside__link__major w-100 text-left  margin-0  headline-6 color-white p-5px ${selectedLink ===
            'all-properties' && 'selected'}`}
          to={{ pathname: '/holdings/all-properties' }}
          onClick={() => selectLink('all-properties')}
        >
          ALL PROPERTIES
        </Link>
        <div className="flex column align-start align-self-end w-90">
          {Object.entries(holdings.properties).map(property => {
            const [key, data] = property;
            const { name } = data;
            return (
              <Link
                className="aside__link__minor text-left  body-2 color-white p-5px "
                key={key}
                to={{ pathname: `/holdings/all-properties/${key}` }}
                onClick={() => selectLink(`all-properties`, key)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>

      <Gril />
      <div className="flex column align-start w-90">
        <Link
          className={`aside__link__major w-100 text-left  margin-0 headline-6 color-white p-5px ${selectedLink ===
            'about' && 'selected'}`}
          to={{ pathname: '/about' }}
          onClick={() => selectLink('about')}
        >
          ABOUT
        </Link>

        <div className="flex column align-start align-self-end w-90">
          <Link
            className="aside__link__minor text-left  body-2 color-white p-5px "
            to={{ pathname: '/about', state: { ref: 'hayesTeamRef' } }}
            onClick={() => selectLink('about')}
          >
            THE HAYES TEAM
          </Link>
          <Link
            className="aside__link__minor text-left  body-2 color-white p-5px "
            to={{ pathname: '/about', state: { ref: 'charityRef' } }}
            onClick={() => selectLink('about')}
          >
            CHARITIES
          </Link>
          <Link
            className="aside__link__minor text-left  body-2 color-white p-5px "
            to={{ pathname: '/about', state: { ref: 'sportingRef' } }}
            onClick={() => selectLink('about')}
          >
            SPONSORSHIPS
          </Link>
          <Link
            className="aside__link__minor text-left  body-2 color-white p-5px "
            to={{ pathname: '/about', state: { ref: 'propManRef' } }}
            onClick={() => selectLink('about')}
          >
            PROPERTY MANAGEMENT
          </Link>
        </div>
      </div>

      <Gril />
      <h1
        className="aside__link__major w-100 text-center  margin-0  headline-6 color-white"
        onClick={openContact}
      >
        CONTACT
      </h1>
      <div className="flex column wrap my-20px text-center">
        <p className="body-2 color-tirciary my-5px padding-0">
          <b> Ph: (860) 646-0131</b>
        </p>
        <p className="body-2 color-tirciary margin-0 padding-0">
          <b>Fax: (860) 644-9073</b>
        </p>
      </div>
    </aside>
  );
};

const mapStateToProps = state => ({
  holdings: state.firebase.holdings
});

export default connect(mapStateToProps)(Sidebar);
