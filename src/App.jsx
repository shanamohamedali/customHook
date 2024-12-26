import { useState } from 'react'
import { Route,Router,Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Toggle } from './components/Toggle/Toggle'
import {LocalStorage} from './components/LocalStorage/LocalStorage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Toggle/>}/>
        <Route path='/local-storage' element={<LocalStorage/>} />
      </Routes>
    </div>
  )
}

export default App
