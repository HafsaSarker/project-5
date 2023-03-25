import { useState, useEffect } from 'react'
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export default function List({setCurrDate, setPastDate}){
    const [pastWeather, setPastWeather] = useState([{}]);
    useEffect(() => {
        const getWeatherHist = async () => {
        const response = await fetch(`https://api.weatherbit.io/v2.0/history/daily?city=NY&start_date=2023-03-15&end_date=2023-03-25&key=${API_KEY}`)
        const json = await response.json()
        setPastWeather(json.data);
        }
        getWeatherHist().catch(console.error);
    },[])

    return (
        <div className="data-list">
            { pastWeather && pastWeather.map((date) => 
                <ul className="data-list-ul">
                    <li>{date.datetime}</li>
                    <li>{date.min_temp + "°C"}</li>
                    <li>{date.max_temp + "°C"}</li>
                    <li>{date.clouds + "%"}</li>
                    <li>{date.precip + "mm"}</li>
                </ul>
            ) 
            }
            
        </div>
        
    )
}