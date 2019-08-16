import React, { Component } from 'react';

class Block extends Component {
  refHook = () => {
    console.log(this.props.ref);
    return this[this.props.ref];
  };
  render() {
    const {
      children,
      style,
      type,
      onClick,
      column,
      image,
      color,
      backgroundColor,
      maxHeight,
      maxWidth,
      blockImage,
      margin,
      height,
      width,
      full
    } = this.props;
    const direction = column ? 'column' : 'row';
    console.log(full)
    return (
    <div className={`
    block
    ${type && type}
    ${maxWidth && maxWidth}
    ${maxHeight && maxHeight}
    ${backgroundColor && backgroundColor}
    ${blockImage && blockImage}
    ${height && height}
    ${margin ? margin : 'm-10px'}
    ${width ? width : 'w-100'}
    flex column align-center justify-center minw-325px minh-325px
    `}>
      <div
        onClick={onClick ? onClick : null}
        style={style}
        className={`
        ${full && 'h-90'}
        ${image ? 'justify-space-evenly' : 'justify-center'}
         flex ${direction}
         ${color && color}
         ${blockImage && 'relative h-100 w-100'}
         align-center block--inner w-90`}
      >
        {children}
      </div>
    </div>
    );
  }
}

export default Block;
