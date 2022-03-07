import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onStockToggle, searchState}) {
  return (
    <ul className="cards">{plants.map(plant => <PlantCard key={plant.id} plant={plant} />).filter( (plant) => {
      const name = plant.props.plant.name.toLowerCase()
      return name.includes(searchState.toLowerCase())
    })}</ul>
  );
}

export default PlantList;
