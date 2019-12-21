import React, { Component } from 'react';

class Animator extends Component {
  render() {
    const {
      forRef,
      children,
      scrolled,
      animation,
      maxWidth,
      maxHeight,
      aliasRef
    } = this.props;
    const target = forRef ? forRef : aliasRef
    return (
      <div
        ref={forRef && forRef}
        className={` ${maxWidth} ${maxHeight} ${
          animation ? animation : 'a-wrapper--right'
        } ${scrolled > (target.current && target.current.offsetTop - 800) &&
          'visible'}

         flex minw-325px minh-325px h-100 w-100`}
      >
        {children}
      </div>
    );
  }
}

export default Animator;
