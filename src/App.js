import React,{ useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('')
  const [weather,setWeather] = useState([])
  const searchWeather = async (e) => {
    e.preventDefault()
    
    const url = `https://api.weatherapi.com/v1/timezone.json?key=bd0715d13e1d4b1c830173812220401&q=${query}`;

    try {
      const res = await fetch(url)
      const data = await res.json()
      setWeather(data.location)
      console.log(data)

    }catch(err){
      console.error(err)
    }
  }
  const inputa = (e) => setQuery(e.target.value)
  return (
  
    <div>
      <h1 className='title'>Search the Weather</h1>

      <form className='form1' onSubmit={searchWeather}>
        <label className='label' htmlFor='query'>Weather Search City</label>
        <input className='input' type='text' id='namee' name='query' placeholder='enter your city' value={query} onChange={inputa} />
        <button className='button'>Searh</button>
      </form>

      <div className='card'>
        
          <h1>Country : {weather.country}</h1>
          <h2>city : {weather.name}</h2>
          <h3>{weather.tz_id}</h3>
          <h4>{weather.lat}</h4>
          <h4>{weather.lon}</h4>
          <h3>current date : {weather.localtime}</h3>
         
        
      </div>
    </div>
  )
}

export default App;