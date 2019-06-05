import React from 'react';
import './App.css';
import Card from './Card'

function App() {
  
  const cars = [
    {
      name: "458 - Italia",
      price: "200K",
      type: "Ferrari"

    },
    {
      name: "Aventador",
      price: "500K",
      type: "Lamborghini"
    }
  ]

  return (
    <div>
      <h1>CarPare</h1>
      <div className="row">
        <div cars={ cars } className="col-6 right">
          <Card number={1}/>
        </div>
        <div cars={ cars } className="right col-6">
          <Card number={2}/>
        </div>
      </div>
    </div>
  );
}

export default App;

