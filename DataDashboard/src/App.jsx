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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cloudCoverageInput, setCloudCoverageInput] = useState(0);

  useEffect(() => {
    const getCurrWeather = async () => {
      const response = await fetch(`https://api.weatherbit.io/v2.0/current?&city=NY&country=US&key=${API_KEY}`)
      const json = await response.json()
      setCurrWeather(json.data[0]);
      
    }
    getCurrWeather().catch(console.error);
  },[])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(startDate, endDate, cloudCoverageInput);
  }
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
          <div className='filters'>
              <form onSubmit={handleSubmit}> 
                <label>
                  Start Date<input
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </label>
                <label>
                  End Date
                  <input
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </label>  
                <label>
                  Cloud Coverage
                  <input
                    type="range"
                    min="0" 
                    max="100"
                    onChange={(e) => setCloudCoverageInput(e.target.value)}
                  />
                </label>
                <button>Search</button>
              </form>
          </div>
          <table className='data-header'>
            <tbody>
              <tr>
                <td>Date</td>            
                <td>Low</td>
                <td>High</td>
                <td>Cloud Coverage</td>
                <td>Precipitation</td>
              </tr>  
            </tbody>       
          </table>

          <List />
        </div>
      </div>
    </div>
  )
}

export default App
