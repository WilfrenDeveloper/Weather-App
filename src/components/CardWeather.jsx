import React, { useState } from 'react'

const CardWeather = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp= () => setIsCelsius(!isCelsius)
    

  return (
    <article className='article'>
        <h1 className='article__h1'>Weather App</h1>
        <h2 className='article__h2 h2'>{weather?.name}, {weather?.sys.country}</h2>
        <section className='article__section'>
            <header className='article__header'>
                <img src="" alt="" className='article__img'/>
            </header>
            <article className='article__article'>
                <h3 className='article
                __h3'>"{weather?.weather[0].description}"</h3>
                <ul>
                    <li><span>Wind Speed</span> <span>{weather?.wind.speed}m/s</span></li>
                    <li><span>Clouds</span> <span>{weather?.clouds.all}%</span></li>
                    <li><span>Pressure</span> <span>{weather?.main.pressure}hPa</span></li>
                </ul>
            </article>
        </section>
        <h2>{isCelsius ? `${temp?.celsius} °C` : `${temp?.fahrenheit} °F`}</h2>
        <button onClick={handleChangeTemp}>Change to {isCelsius ? '°F' : '°C'}</button>
    </article>

  )
}

export default CardWeather