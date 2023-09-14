import React, { useState } from 'react';

function Input(props) {
  const [value, setValue] = useState(props.value);

  function handleChange(e) {
    const newValue = e.target.value;
    setValue(newValue);
    props.fnChangeValue(newValue);
  }

  return (
    <div className="input">
      <input onChange={handleChange} value={value} />
    </div>
  );
}

export default Input;
