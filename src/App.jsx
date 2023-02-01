import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" style={{"pointer-events": "none"}}>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CSCI 5709 - Tutorial 2</h1>
      <h2>Purvesh Rathod - B00903204</h2>
    </div>
  )
}

export default App
