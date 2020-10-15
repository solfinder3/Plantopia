import React, { useState } from 'react';

const PlantForm = (props) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [colors, setColors] = useState("");

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
    props.addPlant(props.room_id, {name, species, colors})
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