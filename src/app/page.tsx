'use client'
import React, { useEffect } from 'react'
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
import ProductCards from './Products/page'
import { useParams } from 'next/navigation'
import { log } from 'console'
import { getProductsById } from '../../sanityquerry'



interface Ip{
  _id: string; // Unique identifier
    productName: string; // Name of the product
    category: string; // Category of the product
    price: number; // Price of the product
    inventory: number; // Number of items in stock
    colors: string[]; // Available colors
    status: string; // Status (e.g., "Just In")
    description: string; // Detailed description
    image: string; // Resolved image URL from Sanity
    discountPercentage?: number; // Discount percentage (optional)
}
function page() {

  const params=useParams()
  const {id}=params
  const [data, setData ] = React.useState<Ip[]>([])


  useEffect (()=>{
    const fetchData =async ()=>{
      if(typeof id ==="string"){
      const data = await getProductsById(id)
      setData(data)
    }}
    fetchData()
  },[])
  console.log(data , "raffay");
  
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
      <ProductCards/>
      <Footer/>
    </div>
  )
}

export default page