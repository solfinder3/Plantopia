import React, { useState } from 'react';
const PlantForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [colors, setColors] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleTypeChange = (e) => {
    setType(e.target.value);
  }
  const handleColorsChange = (e) => {
    setColors(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          label="Name"
          placeholder="Harlan's killer plant, look out Harlan!"
          name="name"
          required
          onChange={handleNameChange}
          value={name}
        />
        <input
          label="Plant's type"
          placeholder="type"
          name="type"
          required
          onChange={handleTypeChange}
          value={type}
        />
        <input
          label="Plant's Colors"
          placeholder="Amazing colors"
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