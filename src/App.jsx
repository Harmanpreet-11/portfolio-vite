import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import Education from './Components/Education/Education'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Education/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App