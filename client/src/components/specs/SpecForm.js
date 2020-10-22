import React, { useState, useEffect } from 'react';


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
  const [indoor, setIndoor] = useState("");
  const [outdoor, setOutdoor] = useState("");
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
      <form onSubmit={handleSubmit}>
        <p>Add specs to your plant</p>
        <input
          label="water"
          placeholder="Water twice a day"
          name="water"
          onChange={handleWaterChange}
          value={water}
        />
        <p>Water</p>
        <input
          label="ferilizer"
          placeholder="once a month Ferilize"
          name="Ferilizer"
          onChange={handleFerilizerChange}
          value={ferilizer}
        />
        <p>Ferilizer</p>
        <input
          label="sunlight"
          placeholder="more sunlight or shad?"
          name="sunlight"
          type="number"
          onChange={handleSunlightChange}
          value={sunlight}
        />
        <p>Sunlight</p>
        <input
          label="temperature"
          placeholder="80℉-100℉, 20°C-37°C"
          name="temperature"
          type="number"
          onChange={handleTemperatureChange}
          value={temperature}
        />
        <p>Temerature</p>
        <input
          label="humidity"
          placeholder="0%-100%"
          name="humidity"
          onChange={handleHumidityChange}
          value={humidity}
        />
        <p>Humidity</p>
        <input
          label="soil"
          placeholder="PH (nutrual, alkaline, acid)"
          name="soil"
          onChange={handleSoilChange}
          value={soil}
        />
        <p>Soil/PH</p>
        <input
          label="full size"
          placeholder="Hight-10Ft, Width-90Ft, Length-2Ft"
          name="full size"
          onChange={handleFullSizeChange}
          value={fullsize}
        />
        <p>Size of Plant</p>
        <input
          label="planting"
          placeholder="Date Planted"
          name="planting"
          onChange={handlePlantingChange}
          value={planting}
        />
        <p>Date Planted</p>
        <input
          label="annual"
          placeholder="plant every two years"
          name="annual"
          onChange={handleAnnualChange}
          value={annual}
        />
        <p>Annual</p>
        <input
          label="perannual"
          placeholder="plant in spring"
          name="perannual"
          onChange={handlePerannualChange}
          value={perannual}
        />
        <p>Perannual</p>
        <input
          label="plant growth"
          placeholder="0-100Ft tall"
          name="plant growth"
          onChange={handlePlantGrowthChange}
          value={plantgrowth}
        />
        <p>Plant Growth</p>
        <input
          label="prune"
          placeholder="prune once a month"
          name="prune"
          onChange={handlePruneChange}
          value={prune}
        />
        <p>Prune</p>
        <input
          label="re-pot"
          placeholder="Re-pot when 50Ft tall"
          name="Re-pot"
          onChange={handleRepotChange}
          value={repot}
        />
        <p>Re-pot</p>
        <input
          label="indoor"
          placeholder="keep indoor all year"
          name="indoor"
          onChange={handleIndoorChange}
          value={indoor}
        />
        <p>Indoor Plant</p>
        <input
          label="outdoor"
          placeholder="leave outdoor, kill the bugs!"
          name="outdoor"
          onChange={handleOutdoorChange}
          value={outdoor}
          select="yes"
        />
        <p>Outdoor Plant</p>
        <input
          label="pests"
          placeholder="Squash Bugs, caterpillars"
          name="pests"
          onChange={handlePestsChange}
          value={pests}
          select="yes"
        />
        <p>Buggers</p>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
export default SpecForm;