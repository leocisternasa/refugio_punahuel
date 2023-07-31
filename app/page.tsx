import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Introduction from '@/components/Introduction'
import Navbar from '@/components/Navbar'
import React from 'react'
import Map from '../components/Map'
function Home() {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <Map />
    </div>
  )
}

export default Home
