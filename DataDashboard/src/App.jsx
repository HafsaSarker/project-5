import { useState, useEffect } from 'react'
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const fetchWorks = async () => {
      const response = await fetch("")
      const json = response.json()
      console.log(json)
    }
    fetchWorks().catch(console.error);
  },[])

  return (
    <div className="App">
      
    </div>
  )
}

export default App
