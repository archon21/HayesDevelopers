import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavHButton from './NavHButton';
import { alertInteraction } from '../../store';
import { connect } from 'react-redux';
import Navbar from './Navbar.js';

import Sidebar from './Sidebar';

class Nav extends Component {
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
        <Navbar
          selectLink={this.selectLink}
          selectedLink={selectedLink}
        ></Navbar>
        <div
          onClick={this.toggleNavH}
          className={` ${!open && 'aside__click-catcher'} `}
        />
        <Sidebar
          open={open}
          selectLink={this.selectLink}
          selectedLink={selectedLink}
          openContact={this.openContact}
        />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
