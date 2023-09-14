import React from 'react';
import Input from './Input';

function Item(props) {
  function fnChangeValue(value) {
    props.fnChangeValue(props.index, value);
  }

  return (
    <div className="item">
      <div>{props.item.name}</div>
      <div>
        <Input value={props.item.price} fnChangeValue={fnChangeValue} />
      </div>
    </div>
  );
}

export default Item;
