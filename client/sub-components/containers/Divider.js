import React from 'react';

const Divider = (props) => {
  const {forwardedRef, children, background, color, border, backgroundColor } = props;
  return (
    <div
      ref={forwardedRef}
      className={`${background && background} ${backgroundColor && backgroundColor} ${color && color} ${border &&
        'block__border-top block__border-bottom'} divider flex column align-center justify-center w-100  minh-10vh text-center`}
    >
      {children}
    </div>
  );
};


export default Divider;
