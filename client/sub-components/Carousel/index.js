import React, { Component } from 'react';
import CarouselKeys from './CarouselKeys';

class Carousel extends Component {
  state = {
    focuseditem: this.props.items[0],
    focusedIndex: 0,
    inTransition: 'no-transition',
    touchEvent: [false, 0],
    messageTimer: null
  };

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  handleLoad = () => {
    this.setState({
      inTransition: 'no-transition'
    });
  };

  nextitem = () => {
    const { items } = this.props;
    if (items.length === 1) return;
    this.setState({ inTransition: 'transition' });
    const { focusedIndex, focuseditem } = this.state;
    setTimeout(() => {
      if (focusedIndex === items.length - 1) {
        this.setState({
          focuseditem: items[0],
          focusedIndex: 0,
          touchEvent: [false, 0]
        });
      } else {
        const newIndex = focusedIndex + 1;
        this.setState({
          focusedIndex: newIndex,
          focuseditem: items[newIndex],
          touchEvent: [false, 0]
        });
      }
    }, 800);
  };

  previtem = () => {
    const { items } = this.props;
    if (items.length === 1) return;
    this.setState({ inTransition: 'transition' });
    const { focusedIndex, focuseditem } = this.state;
    setTimeout(() => {
      if (focusedIndex === 0) {
        this.setState({
          focuseditem: items[items.length - 1],
          focusedIndex: items.length - 1,
          touchEvent: [false, 0]
        });
      } else {
        const newIndex = focusedIndex - 1;
        this.setState({
          focusedIndex: newIndex,
          focuseditem: items[newIndex],
          touchEvent: [false, 0]
        });
      }
    }, 800);
  };

  selectItem = (event, index) => {
    event.preventDefault();
    const { items } = this.props;
    this.setState({ inTransition: 'transition' });
    setTimeout(() => {
      this.setState({ focuseditem: items[index], focusedIndex: index });
    }, 800);
  };

  handleSlide = event => {
    event.preventDefault();
    const { touchEvent } = this.state;
    if (event.changedTouches && !touchEvent[0]) {
      this.setState({ touchEvent: [true, event.changedTouches[0].screenX] });
    } else if (event.changedTouches && touchEvent[0]) {
      if (event.changedTouches[0].screenX > touchEvent[1] + 60) {
        this.previtem();
      } else if (event.changedTouches[0].screenX < touchEvent[1] - 60) {
        this.nextitem();
      } else {
        this.handleTouchMessage();
      }
    }
  };

  handleTouchMessage() {
    const timer = setTimeout(() => {
      this.setState({ messageTimer: false });
    }, 1000);
    this.setState({ timer, messageTimer: true });
  }

  render() {
    const {
      focuseditem,
      inTransition,
      focusedIndex,
      messageTimer
    } = this.state;
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
        className={`carousel   my-75px

        ${backgroundColor}
        ${width ? width : 'w-100'}
        ${maxWidth ? maxWidth : 'maxw-100vw'}
        ${minWidth ? minWidth : 'minw-325px'} ${height ? height : 'h-100'}
         flex column align-center`}
      >
        <div
          onTouchStart={this.handleSlide}
          onTouchEnd={this.handleSlide}
          style={{ position: 'relative' }}
          className={`${contain &&
            'background-primary'} carousel__inner w-100 h-100 background-primary`}
        >
          {messageTimer && (
            <div className="carousel__message flex column align-center justify-center">
              <span className="headline-5 color-white">
                Swipe to navigate Carousel
              </span>
            </div>
          )}
          <img
            style={{
              top: 0,
              left: 0,
              position: 'absolute',
              objectFit: contain ? 'contain' : 'cover',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px'
            }}
            className={`w-100 h-100 ${inTransition} ${maxHeight && maxHeight}`}
            onLoad={this.handleLoad}
            src={focuseditem.image ? focuseditem.image : focuseditem}
          />
          <div className="carousel__inner__box flex justify-center h-10">
            <div
              onClick={this.previtem}
              className="carousel-right-button align-self-center"
            >
              <span />
              <span />
            </div>
            <div className="carousel__inner__box__text flex column align-center">
              <span
                className={`carousel__primary-text text-center color-white  ${inTransition}`}
              >
                {focuseditem.primary ? focuseditem.primary : primary}
              </span>
              <span
                className={`headline-5 color-white text-center ${inTransition}`}
              >
                {focuseditem.secondary ? focuseditem.secondary : secondary}
              </span>
            </div>

            <div
              onClick={this.nextitem}
              className="carousel-left-button align-center align-self-center"
            >
              <span />
              <span />
            </div>
          </div>
        </div>

        <CarouselKeys
          items={items}
          focusedIndex={focusedIndex}
          selectItem={this.selectItem}
        />
      </div>
    );
  }
}

export default Carousel;
