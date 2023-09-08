import React from 'react';
import Shoppinglist from './components/Shoppinglist';
import './style.css';

import data from './data.json';

function App() {
  return (
    <div className="app">
      {data.map((list, index) => {
        <Shoppinglist title={list.title} key={index} />;
      })}
    </div>
  );
}

export default App;
