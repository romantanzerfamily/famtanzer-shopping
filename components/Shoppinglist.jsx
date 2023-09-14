import React, { useState } from 'react';
import Item from './Item';

function Shoppinglist(props) {
  const [items, setItems] = useState(props.items);
  const [sum, setSum] = useState(getSum());

  function getSum() {
    return items.reduce((prev, item) => {
      return prev + item.price * 1;
    }, 0);
  }

  function fnChangeValue(index, newValue) {
    // TODO updateItems
    console.log(items);
  }

  return (
    <div className="shoppinglist">
      <h1>{props.title}</h1>
      {props.items.map((item, index) => {
        return (
          <Item
            key={index}
            index={index}
            fnChangeValue={fnChangeValue}
            item={item}
          />
        );
      })}
      <div>
        <strong>Total: {sum}</strong>
      </div>
    </div>
  );
}

export default Shoppinglist;
