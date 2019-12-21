import React from 'react';

const WindoW = props => {
  const {
    backgroundUrl,
    background,
    maxWidth,
    column,
    padding,
    video,
    align
  } = props;
  return (
    <div
      style={{
        overflowX: 'hidden',

        backgroundImage: `${
          window.innerWidth > 800
            ? `url(${backgroundUrl})`
            : 'background-secondary'
        }`
      }}
      className={`${background && background} ${padding &&
        padding} ${backgroundUrl && 'background-cover'} flex ${
        column ? 'column' : 'row'
      }
      ${video && 'maxw-100vw maxh-100vh'}
      ${maxWidth && maxWidth}
      wrap ${align ? align : 'align-center'} justify-center w-100 minh-90vh`}
    >
      {props.children}
    </div>
  );
};

export default WindoW;
