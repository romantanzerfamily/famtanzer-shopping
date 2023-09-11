import React from 'react';

function Header(props) {
  return (
    <div className="header">
      {props.categories.map((c) => {
        return <button>{c}</button>;
      })}
    </div>
  );
}

export default Header;
