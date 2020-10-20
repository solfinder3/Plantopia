import React, { useState, useEffect } from 'react';


const SpecForm = (props) => {
  const [water, setWater] = useState("");
  const [ferilizer, setFerilizer] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [soil, setSoil] = useState("");
  const [fullSize, setFullSize] = useState("");
  const [planting, setPlanting] = useState("");
  const [annual, setAnnual] = useState("");
  const [perannual, setPerannual] = useState("");
  const [plantGrowth, setPlantGrowth] = useState("");
  const [prune, setPrune] = useState("");
  const [repot, setRepot] = useState("");
  const [indoor, setIndoor] = useState("");
  const [outdoor, setOutdoor] = useState("");
  const [pests, setPests] = useState("");

  useEffect(() => {
    if (props.plant) {
      setWater(props.spec.water)
      setFerilizer(props.spec.ferilizer)
      setTemperature(props.spec.temperature)
      setHumidity(props.spec.humidity)
      setSoil(props.spec.soil)
      setFullSize(props.spec.fullSize)
      setPlantGrowth(props.spec.plantGrowth)
      setAnnual(props.spec.annual)
      setPerannual(props.spec.perannual)
      setPlanting(props.spec.planting)
      setPrune(props.spec.prune)
      setRepot(props.spec.repot)
      setIndoor(props.spec.indoor)
      setOutdoor(props.spec.outdoor)
      setPests(props.spec.Pests)
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
        water, ferilizer, sunlight, temperature, humidity, soil, fullSize, 
        planting, annual, perannual, plantGrowth, prune, repot, indoor, outdoor, pests
      })
      props.toggleEdit()
    } else {
      props.addSpec(props.plant_id, {
        water, ferilizer, sunlight, temperature, humidity, soil, fullSize,
        planting, annual, perannual, plantGrowth, prune, repot, indoor, outdoor, pests
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
          onChange={handleSunlightChange}
          value={sunlight}
        />
        <p>Sunlight</p>
        <input
          label="temperature"
          placeholder="80℉-100℉, 20°C-37°C"
          name="temperature"
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
          value={fullSize}
        />
        <p>Size of Plant</p>
        <input
          label="planting"
          placeholder="Plant where and how"
          name="planting"
          onChange={handlePlantingChange}
          value={planting}
        />
        <p>Planting</p>
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
          value={plantGrowth}
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
        />
        <p>Outdoor Plant</p>
        <input
          label="pests"
          placeholder="Squash Bugs, caterpillars"
          name="pests"
          onChange={handlePestsChange}
          value={pests}
        />
        <p>Buggers</p>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
export default SpecForm;