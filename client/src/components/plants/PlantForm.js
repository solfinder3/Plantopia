import React, { useState, useEffect } from 'react';

const PlantForm = (props) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [colors, setColors] = useState("");

  useEffect (() => {
    if (props.plant) {
      setName(props.plant.name)
      setSpecies(props.plant.species)
      setColors(props.plant.colors)
    }
  }, [])

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  }

  const handleColorsChange = (e) => {
    setColors(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.plant) {
      props.updatePlant(props.plant.room_id, props.plant.id, {name, species, colors})
      props.toggleEdit()
    } else {
      props.addPlant(props.room_id, {name, species, colors})
      props.toggleForm()
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          label="Name"
          placeholder="Plant Name"
          name="name"
          required
          onChange={handleNameChange}
          value={name}
        />
        <input
          label="Plant species"
          placeholder="Plant Species"
          name="species"
          required
          onChange={handleSpeciesChange}
          value={species}
        />
        <input
          label="Plant's Colors"
          placeholder="Plants Colors"
          name="colors"
          required
          onChange={handleColorsChange}
          value={colors}
        />
        <button type='submit'>Submit Your Plant</button>
      </form>
    </>
  )
}
export default PlantForm;