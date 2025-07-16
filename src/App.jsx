import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import Education from './Components/Education/Education'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Education/>
    </div>
  )
}

export default App