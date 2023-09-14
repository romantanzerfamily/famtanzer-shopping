import React from 'react';

function Item(props) {
  return <div className="item">{props.item.name}</div>;
}

export default Item;
