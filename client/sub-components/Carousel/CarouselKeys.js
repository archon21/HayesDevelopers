import React from 'react';

const CarouselKeys = props => {
  const { items, focusedIndex } = props;
  return (
    <ul className="carousel__inner__keys">
      {items.map((item, index) => {
        return (
          <li
            key={item.image}
            onClick={event => this.selectItem(event, index)}
            className={`carousel__inner__keys__index ${
              focusedIndex === index ? 'active' : null
            }`}
          />
        );
      })}
    </ul>
  );
};

export default CarouselKeys;
