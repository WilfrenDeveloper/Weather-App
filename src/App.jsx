import { useEffect, useState } from 'react'
import axios from 'axios'
import CardWeather from './components/CardWeather'

function App() {

  
  const [coords, setCoords ] = useState()
  const [weather, setWeather] = useState()

  

  const success = position => {
    const obj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
    setCoords(obj)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  console.log(coords);

  useEffect(() => {
    if(coords){
      const APIKey = 'd253c4ce42914136aea7b48043b6d308'
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKey}`
      axios.get(url)
    }
  }, [])
  

  return (
    <div>
        <h2>Weather App</h2>
        <CardWeather 
          weather={weather}
        />
    </div>
  )
}

export default App
