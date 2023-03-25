//filter ideas:
  //filter by cloud% 
  //filter by date start - date end

import { useState, useEffect } from 'react'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import './App.css'
import List from './Components/List';
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [currWeather, setCurrWeather] = useState({})
  const [currDate, setCurrDate] = useState("");
  const [pastDate, setPastDate] = useState("");

  useEffect(() => {
    const getCurrWeather = async () => {
      const response = await fetch(`https://api.weatherbit.io/v2.0/current?&city=NY&country=US&key=${API_KEY}`)
      const json = await response.json()
      setCurrWeather(json.data[0]);
      
    }
    getCurrWeather().catch(console.error);
  },[])
  

  return (
    <div className="App">
      <div className='navigation-bar'>
        <Header />
        <Navbar />
      </div>
      <div className='main'>
        <div className='feature-cards'>
          <Card 
            descr={currWeather.city_name}
            title={currWeather.ob_time}
          />
          <Card 
            descr={currWeather.temp + "°C"}
            title={"☁️" +currWeather.clouds + "%"}
          />
          <Card 
            descr={currWeather.sunrise}
            title="sunrise"
          />
        </div>

        <div className='list-container'>
          <ul className='data-header'>
            <li>Date</li>            
            <li>Low</li>
            <li>High</li>
            <li>Cloud Coverage</li>
            <li>Precipitation</li>
          </ul>

          <List />
        </div>
      </div>
    </div>
  )
}

export default App
