import './App.css'
import React, {useState} from 'react'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Routs} from './components/Routes'
function App() {

  const [DarkTheme, setDarkTheme] = useState(false)


  return (
    <div className={DarkTheme ? 'dark' :''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar DarkTheme={DarkTheme} setDarkTheme={setDarkTheme} />
        <Routs/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
