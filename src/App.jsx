import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Toggle } from './components/Toggle/Toggle'
import LocalStorage from './components/LocalStorage/LocalStorage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Toggle/>
   <LocalStorage/>
    </>
  )
}

export default App
