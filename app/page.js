'use client'
import styles from './weather.css'
import { useState } from 'react';
import WeatherSearch from '@/components/weatherSearch/WeatherSearch.js'
import WeatherData from '@/components/weatherData/WeatherData.js';

export default function Weather() {
    const [showSearchBar, setShowSearchBar] = useState(true);
    const [weatherData, setWeatherData] = useState(null);
    

    const handleWeatherData = async (data) => {
        const resolvedData = await data;
        setWeatherData(resolvedData);

        if(resolvedData == null) {
            alert("Could not retrieve weather data");
            return;
        }
        
        setShowSearchBar(false);
    }

    return (
        <main className="weather-main">
            
            <div id="background-wrap">
                <div className="x1">
                    <div className="cloud"></div>
                </div>
                <div className="x2">
                    <div className="cloud"></div>
                </div>
                <div className="x3">
                    <div className="cloud"></div>
                </div>
                <div className="x4">
                    <div className="cloud"></div>
                </div>
                <div className="x5">
                    <div className="cloud"></div>
                </div>
            </div>

            {showSearchBar ? (
                <WeatherSearch onSearch={handleWeatherData} className='wetha'/>
                ) : (
                    <div className='data'>
                        <div className='secondarySearch'>
                            <WeatherSearch onSearch={handleWeatherData} className='wetha'/>
                        </div>
                            <WeatherData weatherData={weatherData}/>
                    </div>
            )}
        </main>
    )
}