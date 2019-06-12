import React from 'react';
import './App.css';
import Card from './Card'

function App() {
  
  const cars = [
    {
      name: "458 Italia",
      price: 239340,
      make: "Ferrari",
      hp: 562,
      sixty: 3.4,
      ts: 210,
      tq: 398,
      img: require('./images/458.jpg')
    },
    {
      name: "Aventador",
      price: 397500,
      make: "Lamborghini",
      sixty: 2.9,
      tq: 509,
      ts: 217, 
      hp: 690,
      img: require('./images/aventador.jpg')
    },
    {
      name: "720s",
      price: 284745,
      make: "McLaren",
      img: require('./images/720s.jpg'),
      hp: 710,
      tq: 568,
      ts: 212,
      sixty: 2.9
      
    },
    {
      name: "911 GT3",
      price: 143600,
      make: "Porsche",
      img: require('./images/gt3.jpg'),
      ts: 199,
      sixty: 3.1,
      tq: 339,
      hp: 500
    },
    {
      name: "Grand Turismo",
      price: 150380,
      make: "Maserati",
      img: require('./images/gt.jpg'),
      ts: 185,
      tq: 384,
      hp: 454,
      sixty: 4.6

    }
  ]
  
  return (
    <div>
      <h1>CarPare</h1>
      <div className="row">
        <div className="col-6 right">
          <Card cars={ cars } number={1}/>
        </div>
        <div className="right col-6">
          <Card cars={ cars } number={2}/>
        </div>
      </div>
    </div>
  );
}

export default App;

