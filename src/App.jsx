import { useEffect, useState } from 'react'
import axios from 'axios'
import CardWeather from './components/CardWeather'

function App() {


  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [isLoading, setIsLoading] = useState(true)


  const success = position => {
    const obj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
    setCoords(obj)
  }

  useEffect(() => {
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  console.log(coords);

  useEffect(() => {
    if (coords) {
      const APIKey = 'd253c4ce42914136aea7b48043b6d308'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKey}`
      axios.get(url)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const fahrenheit = ((celsius * 9 / 5) + 32).toFixed(1)
          setTemp({ celsius, fahrenheit })
          setWeather(res.data)
        }
        )
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    }
  }, [coords])


  return (
    <div className='div'>
      {
        isLoading
          ? <h2 className='div__h2'>loading...</h2>
          : (<CardWeather
            weather={weather}
            temp={temp}
          />)
      }
    </div>
  )
}

export default App
