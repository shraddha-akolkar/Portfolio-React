import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/about'

const App = () => {
  let myName  = "Shraddha"
  let myCity  = "Pune"
  


  return (
    <div>
      <Navbar/>
      <Hero name={myName} city={myCity}/>
      <About/>
    </div>
  )
}

export default App
