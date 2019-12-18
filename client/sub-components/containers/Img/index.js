import React, { Component } from 'react';

class Img extends Component {
  imgRef = React.createRef();
  state = {};

  componentDidMount() {}

  getBounds = () => {};
  render() {
    const { src } = this.props;
    return <img width= ref={this.imgRef} src={src}></img>;
  }
}
