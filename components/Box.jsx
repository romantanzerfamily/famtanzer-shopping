import React, { useState } from 'react';
import Inputbox from './Inputbox';

function Box(props) {
  const [hover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  return (
    <div
      className="box"
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <div className="title">
        {props.title}
        <div className="subtitle">{props.subtitle}</div>
        {hover && <Inputbox />}
      </div>
    </div>
  );
}

export default Box;
