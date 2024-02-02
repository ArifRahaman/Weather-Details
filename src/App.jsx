import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Time from "./Components/time"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Time/>
    </>
  )
}

export default App
