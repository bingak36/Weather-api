import React from 'react'
import "./WeatherCard.css"
const WeatherCard = ({ weather }) => {
    if (!weather) return null

    const { name, main, weather: weatherInfo } = weather

    const { temp, humidity } = main || {}

    const { description, icon } = (weatherInfo && weatherInfo[0]) || {}

    const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : ''

    return (
        <div className='card'>
            <h2>{name}</h2>
            <div className="img-wrap">
                {iconUrl && <img src={iconUrl} alt={description || '날씨 아이콘'} />}
            </div>
            <p>{description}</p>
            <p>
                🌡️ {typeof temp === 'number' ? Math.round(temp) : '-'}℃
            </p>
            <p>
                💧 {humidity !== undefined ? humidity : '-'}%
            </p>

        </div>
    )
}

export default WeatherCard