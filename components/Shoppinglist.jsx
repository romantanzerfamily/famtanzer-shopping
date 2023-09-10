import React from 'react';
import Item from './Item';

function Shoppinglist(props) {
  return (
    <div className="shoppinglist">
      <h1>{props.title}</h1>
      {props.items.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </div>
  );
}

export default Shoppinglist;
