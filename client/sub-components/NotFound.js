import React, { Component } from 'react';
import { WindoW, Block } from './containers';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <WindoW background="background-primary" column>
        <div className="flex column align-center my-30px">
          <h3 className="headline-3 color-tirciary">Hmm...</h3>
          <h5 className="headline-5 color-tirciary">
            Seems We could not find the page you were looking for.
          </h5>
          <h5 className="headline-5 color-tirciary">
            Here are some links to get you where you need to go.
          </h5>
        </div>

        <Block className="block flex row align-center justify-center wrap">
          <Link
            className="link__major headline-6 color-tirciary p-5px"
            to={{ pathname: '/about' }}
          >
            ABOUT
          </Link>
          <Link
            className="link__major headline-6 color-tirciary p-5px"
            to={{ pathname: '/hayes-team' }}
          >
            THE HAYES TEAM
          </Link>
          <Link
            className="link__major headline-6 color-tirciary p-5px"
            to={{ pathname: '/hayes-team' }}
          >
            PROPERTY MANAGEMENT
          </Link>
          <Link
            className=" link__major  headline-6 color-tirciary p-5px
              "
            to={{ pathname: '/holdings/development' }}
          >
            DEVELOPMENT OPPORTUNITIES
          </Link>
          <Link
            className="link__major  headline-6 color-tirciary p-5px
           "
            to={{ pathname: '/holdings/opportunities' }}
          >
            LEASING OPPORTUNITIES
          </Link>
          <Link
            className="link__major  headline-6 color-tirciary p-5px
              "
            to={{ pathname: '/holdings/all-properties' }}
          >
            ALL PROPERTIES
          </Link>
        </Block>
      </WindoW>
    );
  }
}

export default NotFound;
