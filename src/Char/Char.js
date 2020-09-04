import React from 'react';

const char = (props) => {
  return (
    <span className="letters" onClick={props.click}>
      {props.letter}
    </span>
  );
};

export default char;
