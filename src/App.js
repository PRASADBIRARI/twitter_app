import React from 'react';
import './App.css';
import Feed from './Component/Feed';
import Sidebar from './Component/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
    </div>
  );
}

export default App;
