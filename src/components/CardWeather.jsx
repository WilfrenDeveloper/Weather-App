import React, { useState } from 'react'
import "../assets/style/CardWeather.css"

const CardWeather = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp= () => setIsCelsius(!isCelsius)
    

  return (
    <article className='card__article'>
        <h1 className='card__h1'>Weather App</h1>
        <h2 className='card__h2 h2'>{weather?.name}, {weather?.sys.country}</h2>
        <section className='card__section'>
            <header className='card__header'>
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" className='card__img'/>
            </header>
            <article className='card__article--description'>
                <h3 className='card__h3'>"{weather?.weather[0].description}"</h3>
                <ul className='card__ul'>
                    <li className='card__li'><span className='card__span--label'>Wind Speed</span> <span className='card__span--value'>{weather?.wind.speed}m/s</span></li>
                    <li className='card__li'><span className='card__span--label'>Clouds</span> <span className='card__span--value'>{weather?.clouds.all}%</span></li>
                    <li className='card__li'><span className='card__span--label'>Pressure</span> <span className='card__span--value'>{weather?.main.pressure}hPa</span></li>
                </ul>
            </article>
        </section>
        <h2 className='card__h2--grade'>{isCelsius ? `${temp?.celsius} °C` : `${temp?.fahrenheit} °F`}</h2>
        <button className='card__btn' onClick={handleChangeTemp}>Change to {isCelsius ? '°F' : '°C'}</button>
    </article>
  )
}

export default CardWeather