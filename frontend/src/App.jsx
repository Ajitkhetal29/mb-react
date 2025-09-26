import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import i18n from './i18/i18'

import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <div className='bg-white'>
          <Routes>
            <Route path='/' element={<Home/>} /> 
          </Routes>
        </div>

    </>
  )
}

export default App
