import React, { Component } from 'react';
import { connect } from 'react-redux';
import {alertInteraction} from '../store'
import Image from './Image'

class Slide extends Component {
  state = {
    hovering: false
  };

  handleHover = enter => {
    const newStatus = enter;
    this.setState({ hovering: newStatus });
  };

  handleOpenImage = (items, index) => {
    this.props.alertInteraction(true, <Image index={index} items={items} />)
  };
  render() {
    const { items } = this.props;
    const { hovering } = this.state;
    const isArray = typeof items[0] === 'string';
    return (
      <div
        className="slider"
        onMouseLeave={() => this.handleHover(false)}
        onMouseEnter={() => this.handleHover(true)}
      >
        <div
          className={`slider__inner ${hovering &&
            'slider--stop'}  flex row align-center w-auto my-30px`}
        >
          {items.map((item, index) => {
            return (
              <div
                onClick={() => this.handleOpenImage(items, index)}
                className="slider__inner__container mx-10px"
                key={item}
              >
                <img
                  className="slider__inner__container__img"
                  src={isArray ? item : item.img}
                />
                <span className="body-1 color-tirciary">
                  {!isArray && item.text}
                </span>
              </div>
            );
          })}
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
)(Slide);
