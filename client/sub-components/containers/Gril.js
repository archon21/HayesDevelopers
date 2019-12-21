import React from 'react';


const Gril = props => {
  const {  margin } = props;

  return (
    <div className={`gril ${margin ? margin : 'my-5px'}`}>
      <div />
    </div>
  );
};

export default Gril;
