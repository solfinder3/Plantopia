import React, { useState, useEffect } from 'react';

import { Form, FormInput, InputDiv, Button, CheckInput } from '../../styles/SmallFormElements';


const SpecForm = (props) => {
  const [water, setWater] = useState("");
  const [ferilizer, setFerilizer] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [soil, setSoil] = useState("");
  const [fullsize, setFullSize] = useState("");
  const [planting, setPlanting] = useState("");
  const [annual, setAnnual] = useState("");
  const [perannual, setPerannual] = useState("");
  const [plantgrowth, setPlantGrowth] = useState("");
  const [prune, setPrune] = useState("");
  const [repot, setRepot] = useState("");
  const [indoor, setIndoor] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const [pests, setPests] = useState("");

  useEffect(() => {
    if (props.id) {
      setWater(props.water)
      setFerilizer(props.ferilizer)
      setSunlight(props.sunlight)
      setTemperature(props.temperature)
      setHumidity(props.humidity)
      setSoil(props.soil)
      setFullSize(props.fullsize)
      setPlantGrowth(props.plantgrowth)
      setAnnual(props.annual)
      setPerannual(props.perannual)
      setPlanting(props.planting)
      setPrune(props.prune)
      setRepot(props.repot)
      setIndoor(props.indoor)
      setOutdoor(props.outdoor)
      setPests(props.pests)
    } 
  }, [])

  const handleWaterChange = (e) => {
    setWater(e.target.value);
  }

  const handleFerilizerChange = (e) => {
    setFerilizer(e.target.value);
  }

  const handleSunlightChange = (e) => {
    setSunlight(e.target.value);
  }
  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  }

  const handleHumidityChange = (e) => {
    setHumidity(e.target.value);
  }

  const handleSoilChange = (e) => {
    setSoil(e.target.value);
  }
  const handleFullSizeChange = (e) => {
    setFullSize(e.target.value);
  }

  const handlePlantingChange = (e) => {
    setPlanting(e.target.value);
  }

  const handleAnnualChange = (e) => {
    setAnnual(e.target.value);
  }
  const handlePerannualChange = (e) => {
    setPerannual(e.target.value);
  }

  const handlePlantGrowthChange = (e) => {
    setPlantGrowth(e.target.value);
  }

  const handlePruneChange = (e) => {
    setPrune(e.target.value);
  }
  const handleRepotChange = (e) => {
    setRepot(e.target.value);
  }

  const handleIndoorChange = (e) => {
    setIndoor(e.target.value);
  }
  const handleOutdoorChange = (e) => {
    setOutdoor(e.target.value);
  }
  const handlePestsChange = (e) => {
    setPests(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.specs) {
      props.updateSpec(props.plant_id, props.id, { 
        water: water, ferilizer: ferilizer, sunlight: sunlight, temperature: temperature, humidity: humidity, soil: soil, fullsize: fullsize, 
        planting: planting, annual: annual, perannual: perannual, plantgrowth: plantgrowth, prune: prune, repot: repot, indoor: indoor, outdoor: outdoor, pests: pests
      })
      props.toggleEdit()
    } else {
      props.addSpec(props.plant_id, {
        water: water, ferilizer: ferilizer, sunlight: sunlight, temperature: temperature, humidity: humidity, soil: soil, fullsize: fullsize,
        planting: planting, annual: annual, perannual: perannual, plantgrowth: plantgrowth, prune: prune, repot: repot, indoor: indoor, outdoor: outdoor, pests: pests
      })
      props.toggleForm()
    }
  }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputDiv>
          Indoor-
          <CheckInput
            label="indoor"
            checked={indoor}
            name="indoor"
            onChange={() => setIndoor(!indoor)}
            value="indoor"
            type="checkbox"
          />
        </InputDiv>
        <InputDiv>
          Outdoor-
          <CheckInput
            label="outdoor"
            checked={outdoor}
            name="outdoor"
            onChange={() => setOutdoor(!outdoor)}
            value="outdoor"
            type="checkbox"
            
          />
        </InputDiv>
        <InputDiv>
          Water - 
          <FormInput
            label="water"
            placeholder="Water twice a day"
            name="water"
            onChange={handleWaterChange}
            value={water}
          />
        </InputDiv>
        <InputDiv>
          Fertilizer-
          <FormInput
            label="ferilizer"
            placeholder="once a month Ferilize"
            name="Ferilizer"
            onChange={handleFerilizerChange}
            value={ferilizer}
          />
        </InputDiv>
        <InputDiv>
          Sunlight-
          <FormInput
            label="sunlight"
            placeholder="more sunlight or shad?"
            name="sunlight"
            type="number"
            onChange={handleSunlightChange}
            value={sunlight}
            />
        </InputDiv>
        <InputDiv>
          Temperature-
          <FormInput
            label="temperature"
            placeholder="80℉-100℉, 20°C-37°C"
            name="temperature"
            type="number"
            onChange={handleTemperatureChange}
            value={temperature}
          />
        </InputDiv>
        <InputDiv>
        Humidity-
          <FormInput
            label="humidity"
            placeholder="0%-100%"
            name="humidity"
            onChange={handleHumidityChange}
            value={humidity}
          />
        </InputDiv>
        <InputDiv>
          Soil PH-
          <FormInput
            label="soil"
            placeholder="PH (nutrual, alkaline, acid)"
            name="soil"
            onChange={handleSoilChange}
            value={soil}
          />
        </InputDiv>
        <InputDiv>
          Size-
          <FormInput
            label="full size"
            placeholder="Hight-10Ft, Width-90Ft, Length-2Ft"
            name="full size"
            onChange={handleFullSizeChange}
            value={fullsize}
          />
        </InputDiv>
        <InputDiv>
          Date-
          <FormInput
            label="planting"
            placeholder="Date Planted"
            name="planting"
            onChange={handlePlantingChange}
            value={planting}
          />
        </InputDiv>
        <InputDiv>
          Perennial-
          <FormInput
            label="annual"
            placeholder="plant every two years"
            name="annual"
            onChange={handleAnnualChange}
            value={annual}
          />
        </InputDiv>
        <InputDiv>
          Perannual-
          <FormInput
            label="perannual"
            placeholder="plant in spring"
            name="perannual"
            onChange={handlePerannualChange}
            value={perannual}
            />
        </InputDiv>
        <InputDiv>
          Growth-
          <FormInput
            label="plant growth"
            placeholder="0-100Ft tall"
            name="plant growth"
            onChange={handlePlantGrowthChange}
            value={plantgrowth}
          />
        </InputDiv>
        <InputDiv>
          Prune-
          <FormInput
            label="prune"
            placeholder="prune once a month"
            name="prune"
            onChange={handlePruneChange}
            value={prune}
          />
        </InputDiv>
        <InputDiv>
          Re-pot-
          <FormInput
            label="re-pot"
            placeholder="Re-pot when 50Ft tall"
            name="Re-pot"
            onChange={handleRepotChange}
            value={repot}
          />
        </InputDiv>
        <InputDiv>
          Pests-
          <FormInput
            label="pests"
            placeholder="afids"
            name="pests"
            onChange={handlePestsChange}
            value={pests}
          />
        </InputDiv>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}
export default SpecForm;