import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertInteraction } from '../store';

class Image extends Component {
  state = {
    index: 0
  };

  componentDidMount() {
    const { index } = this.props;
    this.setState({ index });
  }

  nextitem = () => {
    const { index } = this.state;
    const { items } = this.props;
    let newindex = 0;
    if (index === items.length - 1) {
      newindex = 0;
    } else {
      newindex = index + 1;
    }

    this.setState({ index: newindex });
  };
  previtem = () => {
    const { items } = this.props;
    const { index } = this.state;
    let newindex = 0;
    if (index === 0) {
      newindex = items.length - 1;
    } else {
      newindex = index - 1;
    }

    this.setState({ index: newindex });
  };
  render() {
    const { items } = this.props;
    const { index } = this.state;
    const isArray = typeof items[0] === 'string';

    return (
      <div className="w-100 h-100 flex column align-center justify-center relative">
        <img
          className="w-100 h-100 object-contain background-primary"
          src={isArray ? items[index] : items[index].img}
          onClick={this.nextitem}
        />
        <button
          type="button"
          onClick={() => this.props.alertInteraction(false)}
        >
          <i className="single-popup-icon material-icons color-white">close</i>
        </button>
        <div onClick={this.previtem} className="carosuel-right-button">
          <span />
          <span />
        </div>
        <div onClick={this.nextitem} className="carosuel-left-button">
          <span />
          <span />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template))
});

export default connect(
  null,
  mapDispatchToProps
)(Image);
