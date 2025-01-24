import React from 'react'
import './App.css'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import SectionOne from './Components/section1/SectionOne'
import SectionTwo from './Components/section2/SectionTwo'
import SectionThree from './Components/section3/SectionThree'
import SectionFour from './Components/section4/SectionFour'
import Footer from './Components/footer/Footer'

function App() {

  return (
    <div>
      <div className='header_bg'>
        <Header />
        <Nav />
      </div>
      
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  )
}

export default App
