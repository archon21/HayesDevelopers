import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    focuseditem: this.props.items[0],
    focusedIndex: 0,
    inTransition: 'no-transition'
  };

  handleLoad = () => {
    this.setState({
      inTransition: 'no-transition'
    });
  };

  nextitem = () => {
    this.setState({ inTransition: 'transition' });
    const { items } = this.props;
    const { focusedIndex, focuseditem } = this.state;
    setTimeout(() => {
      if (focusedIndex === items.length - 1) {
        this.setState({
          focuseditem: items[0],
          focusedIndex: 0
        });
      } else {
        const newIndex = focusedIndex + 1;
        this.setState({
          focusedIndex: newIndex,
          focuseditem: items[newIndex]
        });
      }
    }, 800);
  };

  previtem = () => {
    this.setState({ inTransition: 'transition' });
    const { items } = this.props;
    const { focusedIndex, focuseditem } = this.state;
    setTimeout(() => {
      if (focusedIndex === 0) {
        this.setState({
          focuseditem: items[items.length - 1],
          focusedIndex: items.length - 1
        });
      } else {
        const newIndex = focusedIndex - 1;
        this.setState({
          focusedIndex: newIndex,
          focuseditem: items[newIndex]
        });
      }
    }, 800);
  };

  render() {
    const { focuseditem, inTransition, focusedIndex } = this.state;
    const {
      items,
      contain,
      primary,
      secondary,
      height,
      width,
      maxHeight,
      maxWidth,
      minWidth,
      backgroundColor
    } = this.props;
    return (
      <div
        className={` ${backgroundColor}
        ${width ? width : 'w-100'}
        ${maxWidth ? maxWidth : 'maxw-100vw'}
        ${minWidth ? minWidth : 'minw-325px'} ${height ? height : 'h-100'}
         flex column align-center`}
        style={{ position: 'relative' }}
      >
        <div
          className={`${contain && 'background-primary'} w-100`}
          style={{
            position: 'relative',
            boxShadow:
              'rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px'
          }}
        >
          <img
            className={`w-100 h-90 ${inTransition} ${maxHeight && maxHeight}`}
            onLoad={this.handleLoad}
            style={{
              objectFit: contain ? 'contain' : 'cover'
            }}
            src={focuseditem.image ? focuseditem.image : focuseditem}
          />
          <div className="special-text flex row wrap align-start justify-space-evenly h-10">
            <span
              className={`headline-4 color-white text-center ${inTransition}`}
            >
              {focuseditem.primary ? focuseditem.primary : primary}
            </span>
            <span className={`headline-5 color-white text-center ${inTransition}`}>
              {focuseditem.secondary ? focuseditem.secondary : secondary}
            </span>
          </div>
        </div>
        <div onClick={this.previtem} className="carosuel-right-button">
          <span />
          <span />
        </div>
        <div onClick={this.nextitem} className="carosuel-left-button">
          <span />
          <span />
        </div>
        <ul className="carosuel-index">
          {items.map((item, index) => {
            return (
              <li
                key={item.image}
                className={focusedIndex === index ? 'active' : null}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Carousel;
