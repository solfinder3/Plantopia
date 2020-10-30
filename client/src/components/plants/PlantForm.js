import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone'


import { Button, Wrapper, Form, FormInput, DropDiv } from '../../styles/RoomFormStyles'

const PlantForm = (props) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [colors, setColors] = useState("");
  const [file, setFile] = useState('');

  useEffect (() => {
    if (props.plant) {
      setName(props.plant.name)
      setSpecies(props.plant.species)
      setColors(props.plant.colors)
      setFile(props.plant.file)
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

  const handleFileChange = (e) => {
    setFile(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.plant) {
      props.updatePlant(props.plant.room_id, props.plant.id, {name, species, colors, file})
      props.toggleEdit(false)
    } else {
      props.addPlant(props.room_id, {name, species, colors, file})
      props.toggleForm(false)
    }
  }

  const onDrop = (files) => {
    setFile(files[0])
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <DropDiv>
          <Dropzone
            onDrop={onDrop}
            multiple={false}
            onChange={handleFileChange}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop files here...</p> :
                      <p>Try dropping some files here, or click to select files to upload.</p>
                  }
                </div>
              )
            }}
          </Dropzone>
        </DropDiv>
        <FormInput
          label="Name"
          placeholder="Plant Name"
          name="name"
          required
          onChange={handleNameChange}
          value={name}
        />
        <FormInput
          label="Plant species"
          placeholder="Plant Species"
          name="species"
          required
          onChange={handleSpeciesChange}
          value={species}
        />
        <FormInput
          label="Plant's Colors"
          placeholder="Plants Colors"
          name="colors"
          required
          onChange={handleColorsChange}
          value={colors}
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </Wrapper>
  )
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}


export default PlantForm;