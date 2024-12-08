import React from 'react'
import Navbar from './Components/Navbar'
import MasterImage from './Components/MasterImage'
import FirstLook from './Components/FirstLook'
import Cards from './Components/Cards'
import Featured from './Components/Featured'
import FeelsGood from './Components/FeelsGood'
import GearUp from './Components/GearUp'
import DontMiss from './Components/DontMiss'
import Essentials from './Components/Essentials'
import FlightEssentials from './Components/FlightEssentials'
import Details from './Components/Details'
import Footer from './Components/Footer'

function page() {
  return (
    <div>
      <Navbar/>
      <MasterImage/>
      <FirstLook/>
      <Cards/>
      <Featured/>
      <FeelsGood/>
      <GearUp/>
      <DontMiss/>
      <Essentials/>
      <FlightEssentials/>
      <Details/>
      <Footer/>
    </div>
  )
}

export default page