import React from 'react';

const validation = (props) => {
  const maxCount = 5;
  let textMessage = null;
  if (props.length === 0) {
    textMessage = (
      <span>Make sure text is not less than {maxCount} characters.</span>
    );
  } else if (props.length < maxCount) {
    textMessage = <span>Text is too short.</span>;
  } else {
    textMessage = <span>Nice! Text is long enough.</span>;
  }

  return <p>{textMessage}</p>;
};

export default validation;
