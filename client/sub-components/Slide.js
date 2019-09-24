import React, { Component } from 'react';

class Slide extends Component {
  state = {};
  render() {
    const { items } = this.props;
    return (
      <div className="home__logos flex row align-center w-auto">
        {items.map(item => {
          return <img key={item} className="home__logos__img" src={item} />;
        })}
      </div>
    );
  }
}

export default Slide;
