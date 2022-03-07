import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchState, setSearchState] = useState('')



  useEffect(() => {

    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(plantData => setPlants(plantData))


  }, [])

  function renderPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function filterSearch(searchValue) {

    setSearchState(searchValue) 

  }



  return (
    <main>
      <NewPlantForm renderPlant={renderPlant} plants={plants} />
      <Search filterSearch={filterSearch}/>
      <PlantList plants={plants} searchState={searchState} />
    </main>
  );
}

export default PlantPage;
