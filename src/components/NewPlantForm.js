import React from "react";

function NewPlantForm({renderPlant, plants}) {

  function onNewPlant(e) {

    e.preventDefault()

    const newPlant = {
      id: plants.length + 1,
      name: e.target.name.value,
      price: e.target.price.value,
      image: e.target.image.value
    }

    renderPlant(newPlant)
    
    e.target.reset()



  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ (e) => onNewPlant(e)}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image"  placeholder="Image URL" />
        <input type="number" name="price"  step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
