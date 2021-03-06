import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import {
  Home,

  SinglePage,
  Holdings,
  LandingCarousel,

} from './components';
import { NotFound, Loader } from './sub-components';
import Privacy from './components/Footer/Privacy';
class Routes extends Component {
  state = { mounted: false };
  componentDidMount() {
    this.setState({ mounted: true });
  }

  componentDidUpdate(prevProps) {
    if (prevProps) {
      if (
        this.props.location.pathname !== prevProps.location.pathname &&
        !this.props.location.state
      ) {
        window.scrollTo(0, 0);
      }
    }
  }
  render() {
    const { mounted } = this.state;
    return mounted ? (
      <Switch>
        <Route exact path="/" component={LandingCarousel} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/holdings/:type" component={Holdings} />
        <Route exact path="/holdings/:type/:page" component={SinglePage} />
        <Route exact path="/privacy" component={Privacy} />
        <Route component={NotFound} />
      </Switch>
    ) : (
      <Loader />
    );
  }
}

export default withRouter(Routes);
