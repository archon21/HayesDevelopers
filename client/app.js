import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Routes from './routes';
import { willReadDB, alertInteraction } from './store';
import { Alert, Loader, Fab } from './sub-components';

// const firestore = firebase.firestore();

class App extends Component {
  state = {
    mounted: false
  };
  async componentDidMount() {
    await this.props.willReadDB('all');
    this.setState({ mounted: true });
  }
  render() {
    const { mounted } = this.state;
    const { alertStatus, alertTemplate } = this.props;
    return mounted ? (
      <div style={{ overflow: 'hidden' }}>
        <Fab
          options={[
            {
              name: 'meeting_room',
              label: 'Leasing Opportunities',
              action: () => this.props.history.push('/holdings/opportunities')
            },
            {
              name: 'view_agenda',
              label: 'Development Opportunites',
              action: () => this.props.history.push('/holdings/development')
            },
            {
              name: 'location_city',
              label: 'All Properties',
              action: () => this.props.history.push('/holdings/all-properties')
            },
            {
              name: 'arrow_upward',
              label: 'Back To Top',
              action: () => window.scrollTo(0, 0)
            }
          ]}
        />
        <Alert
          open={alertStatus}
          template={alertTemplate}
          onClickCatcher={() => this.props.alertInteraction(false)}
        />
        <Navbar />
        <div style={{ margin: '80px 0 0 0' }}>
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
  alertStatus: state.util.alertStatus
});

const mapDispatchToProps = dispatch => ({
  willReadDB: field => dispatch(willReadDB(field)),
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template))
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
