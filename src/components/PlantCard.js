import React, {useState} from "react";

function PlantCard({plant}) {

  const {name, image, price} = plant
  const [inStock, setInStock] = useState(true)

  function onStockToggle() {

    setInStock(!inStock)

  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={() => onStockToggle()} className="primary">In Stock</button>
      ) : (
        <button onClick={() => onStockToggle()}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
