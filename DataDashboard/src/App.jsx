import { useState, useEffect } from 'react'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  // const [currWeather, setCurrWeather] = useState({})
  
  // useEffect(() => {
  //   const getCurrWeather = async () => {
  //     const response = await fetch(`https://api.weatherbit.io/v2.0/current?&city=NY&country=US&key=${API_KEY}`)
  //     const json = await response.json()
  //     setCurrWeather(json.data[0]);
  //   }
  //   getCurrWeather().catch(console.error);
  // },[])
  // console.log(currWeather)

  //1st card
  //currWeather.city_name
  //currWeather.temp


  //2nd card
  //currWeather.weather.icon
  //currWeather.weather.description

  //3rd card
  //currWeather.sunrise

  return (
    <div className="App">
      <div className='navigation-bar'>
        <Header />
        <Navbar />
      </div>
      <div className='main'>
        <div className='feature-cards'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
