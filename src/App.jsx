import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Skills from './Components/Skill/Skills'
import Projects from './Components/Projects/Projects'
import Experience from './Components/Experience/Experience'

const App = () => {
  let myName  = "Shraddha"
  let myCity  = "Pune"
  


  return (
    <div>
      <Navbar/>
      <Hero name={myName} city={myCity}/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
