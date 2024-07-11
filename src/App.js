import React, { useState } from 'react';
import './App.css'
import { data } from './data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('men');

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <div className="categories">
        <button onClick={() => handleClick('men')}>Men</button>
        <button onClick={() => handleClick('women')}>Women</button>
        <button onClick={() => handleClick('youth')}>Youth</button>
      </div>
      <div className="data-container">
        <h2>{selectedCategory.toUpperCase()}</h2>
        <div className="data-grid">
          {Object.entries(data[selectedCategory]).map(([country, value]) => (
            <div className="data-item" key={country}>
              <span className="value">{value.toFixed(2)}M</span>
              <span className="country">{country}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;