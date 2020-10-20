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
    if (props.spec) {
      props.updateSpecs(props.plant.room_id, props.plant.id, { 
        water, ferilizer, sunlight, temperature, humidity, soil, fullSize, 
        planting, annual, perannual, plantGrowth, prune, repot, indoor, outdoor, pests
      })
      props.toggleEdit()
    } else {
      props.addSpecs(props.room_id, {
        water, ferilizer, sunlight, temperature, humidity, soil, fullSize,
        planting, annual, perannual, plantGrowth, prune, repot, indoor, outdoor, pests
      })
      props.toggleForm()
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          label="water"
          placeholder="water twice a day"
          name="water"
          required
          onChange={handleWaterChange}
          value={water}
        />
        <input
          label="ferilizer"
          placeholder="once a month Ferilize"
          name="Ferilizer"
          required
          onChange={handleFerilizerChange}
          value={ferilizer}
        />
        <input
          label="sunlight"
          placeholder="more sunlight or shad?"
          name="sunlight"
          required
          onChange={handleSunlightChange}
          value={sunlight}
        />
        <input
          label="temperature"
          placeholder="80℉-100℉, 20°C-37°C"
          name="temperature"
          required
          onChange={handleTemperatureChange}
          value={temperature}
        />
        <input
          label="humidity"
          placeholder="0%-100%"
          name="humidity"
          required
          onChange={handleHumidityChange}
          value={humidity}
        />
        <input
          label="soil"
          placeholder="PH (nutual, alkaline, acid)"
          name="soil"
          required
          onChange={handleSoilChange}
          value={soil}
        />
        <input
          label="full size"
          placeholder="Hight-10Ft, Width-90Ft, Length-2Ft"
          name="full size"
          required
          onChange={handleFullSizeChange}
          value={fullSize}
        />
        <input
          label="planting"
          placeholder="Where/When/how"
          name="planting"
          required
          onChange={handlePlantingChange}
          value={planting}
        />
        <input
          label="annual"
          placeholder="plant every two years"
          name="annual"
          required
          onChange={handleAnnualChange}
          value={annual}
        />
        <input
          label="perannual"
          placeholder="plant in spring"
          name="perannual"
          required
          onChange={handlePerannualChange}
          value={perannual}
        />
        <input
          label="plant growth"
          placeholder="Your child's growth 0-100Ft tall"
          name="plant growth"
          required
          onChange={handlePlantGrowthChange}
          value={plantGrowth}
        />
        <input
          label="prune"
          placeholder="prune your plant child once a month"
          name="prune"
          required
          onChange={handlePruneChange}
          value={prune}
        />
        <input
          label="re-pot"
          placeholder="Re-pot when 50Ft tall"
          name="Re-pot"
          required
          onChange={handleRepotChange}
          value={repot}
        />
        <input
          label="indoor"
          placeholder="keep indoor all year"
          name="indoor"
          required
          onChange={handleIndoorChange}
          value={indoor}
        />
        <input
          label="outdoor"
          placeholder="leave outdoor, kill the bugs!"
          name="outdoor"
          required
          onChange={handleOutdoorChange}
          value={outdoor}
        />
        <input
          label="pests"
          placeholder="birds, squash bugs, caterpillars"
          name="pests"
          required
          onChange={handlePestsChange}
          value={pests}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
export default SpecForm;