import React, { useState } from 'react';
import training from './training';
import './style.css';
import Boxbox from './components/Boxbox';

/*
Open features

- add plus button to add entry
- show the current week
- show also 2 more weeks
*/
function App() {
  return (
    <div className="app">
      <Boxbox />
    </div>
  );
}

export default App;
