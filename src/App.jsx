import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  let myName  = "Shraddha"
  let myCity  = "Pune"
  


  return (
    <div>
      <Navbar/>
      <Hero name={myName} city={myCity}/>
      <About/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
