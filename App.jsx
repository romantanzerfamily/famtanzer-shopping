import React from 'react';
import Shoppinglist from './components/Shoppinglist';
import Header from './components/Header';
import './style.css';

import data from './data.json';

function App() {
  // TODO selected comes from data, not necessarily 0
  const selected = 0;
  return (
    <div className="app">
      <Header categories={data.map((item) => item.title)} />
      {data[selected].lists.map((list, index) => {
        return (
          <Shoppinglist title={list.title} key={index} items={list.items} />
        );
      })}
    </div>
  );
}

export default App;
