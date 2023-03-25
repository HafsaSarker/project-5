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
        <table className="data-table">
            { pastWeather && pastWeather.map((date) => 
                <tr>
                    <td>{date.datetime}</td>
                    <td>{date.min_temp + "°C"}</td>
                    <td>{date.max_temp + "°C"}</td>
                    <td>{date.clouds + "%"}</td>
                    <td>{date.precip + "mm"}</td>
                </tr>
            ) 
            }
            
        </table>
        
    )
}