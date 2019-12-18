import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavHButton from './NavHButton';
import { alertInteraction } from '../../store';
import { connect } from 'react-redux';

class Navbar extends Component {
  state = {
    open: true,
    selectedLink: ''
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    const arr = pathname.split('/');
    const selectedLink = arr[arr.length - 1];
    this.setState({ selectedLink });
  }

  toggleNavH = () => {
    const open = !this.state.open;
    this.setState({ open });
  };

  openContact = () => {
    window.scrollTo(0, this.props.footerCoords - 100);
    this.setState({ open: true });
  };

  selectLink = link => {
    this.setState({ selectedLink: link, open: true });
  };

  render() {
    const { open, selectedLink } = this.state;
    return (
      <nav id="nav-h" className="flex column black align-center">
        <NavHButton open={open} toggleNavH={this.toggleNavH} />
        <Link to={{ pathname: '/' }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/Logos%2FLogo%20Large%20White.png?alt=media&token=7109b6eb-0243-41fe-88e4-9bd80693679b"
            className="nav__logo"
          />
        </Link>
        <div
          onClick={this.toggleNavH}
          className={` ${!open && 'aside__click-catcher'} `}
        />
        <aside
          className={` ${
            !open ? 'aside--open ' : 'aside'
          } flex column align-center justify-center  `}
        >
          <Link
            className={`link__major headline-6 color-white p-5px ${selectedLink ===
              'about' && 'selected'}`}
            to={{ pathname: '/about' }}
            onClick={() => this.selectLink('about')}
          >
            ABOUT
          </Link>
          <Link
            className={`link__major  headline-6 color-white p-5px ${selectedLink ===
              'hayes-team' && 'selected'}`}
            to={{ pathname: '/hayes-team' }}
            onClick={() => this.selectLink('hayes-team')}
          >
            THE HAYES TEAM
          </Link>
          <Link
            className={`link__major  headline-6 color-white p-5px ${selectedLink ===
              'property-services' && 'selected'}`}
            to={{ pathname: '/property-services' }}
            onClick={() => this.selectLink('property-services')}
          >
            PROPERTY MANAGEMENT
          </Link>
          <Link
            className={` link__major  headline-6 color-white p-5px ${selectedLink ===
              'development' && 'selected'}`}
            onClick={() => this.selectLink('development')}
            to={{ pathname: '/holdings/development' }}
          >
            DEVELOPMENT OPPORTUNITIES
          </Link>
          <Link
            className={`link__major  headline-6 color-white p-5px ${selectedLink ===
              'opportunities' && 'selected'}`}
            to={{ pathname: '/holdings/opportunities' }}
            onClick={() => this.selectLink('opportunities')}
          >
            LEASING OPPORTUNITIES
          </Link>
          <Link
            className={`link__major  headline-6 color-white p-5px ${selectedLink ===
              'all-properties' && 'selected'}`}
            to={{ pathname: '/holdings/all-properties' }}
            onClick={() => this.selectLink('all-properties')}
          >
            ALL PROPERTIES
          </Link>
          <h1
            className="link__major  headline-6 color-white"
            onClick={this.openContact}
          >
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
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template))
});

const mapStateToProps = state => ({
  footerCoords: state.util.footerCoords
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
