import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Nav, Footer } from './components';
import Routes from './routes';
import { willReadDB, alertInteraction } from './store';
import { Alert, Loader, Fab } from './sub-components';
import init from './utilities/init';

// const firestore = firebase.firestore();

class App extends Component {
  state = {
    mounted: false
  };
  async componentDidMount() {
    init.start();
    await this.props.willReadDB('all');
    this.setState({ mounted: true });
  }

  copyLink = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  handleContact = () => {
    window.scrollTo(0, this.props.footerCoords - 100);
  };

  render() {
    const { mounted } = this.state;
    const { alertStatus, alertTemplate } = this.props;
    return mounted ? (
      <div style={{ overflow: 'hidden' }}>
        <Fab
          options={[
            {
              name: 'link',
              label: 'Copy Link',
              action: () => this.copyLink()
            },
            {
              name: 'message',
              label: 'Contact',
              action: () => this.handleContact()
            }
          ]}
        />
        <Alert
          open={alertStatus}
          template={alertTemplate}
          onClickCatcher={() => this.props.alertInteraction(false)}
        />
        <Nav />
        <div style={{ margin: '60px 0 0 0' }}>
          <Routes />
        </div>
        <Footer />
      </div>
    ) : (
      <Loader />
    );
  }
}

const mapStateToProps = state => ({
  alertTemplate: state.util.alertTemplate,
  alertStatus: state.util.alertStatus,
  footerCoords: state.util.footerCoords
});

const mapDispatchToProps = dispatch => ({
  willReadDB: field => dispatch(willReadDB(field)),
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
