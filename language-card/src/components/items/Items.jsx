import React, { useState } from 'react'
import './items.css'

const Items = ({ card }) => {
  const [logo, setLogo] = useState(true)

  const { name, img, options } = card;

  const handleClick = () => {
    setLogo(!logo);
  };

  return (
    <div className="card" onClick={handleClick}>
      {logo ? (
        <div>
          <img className="card-logo" src={img} alt="" />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (
        <ul className="list">
          {options.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Items