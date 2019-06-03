import React from 'react';
import './App.css';
import Card from './Card'

function App() {
  return (
    <div>
      <h1>CarPare</h1>
      <div className="row">
        <div className="col-6">
          <Card style={{paddingLeft: "10%"}}/>
        </div>
        <div className="col-6">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
