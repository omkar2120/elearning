import React from 'react'
import Navbar from '../../global/component/Navbar'
import Corosouel from '../pages/Corosouel'
import HomeHeader from '../pages/HomeHeader'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeHeader />
        <Corosouel/>
        
    </div>
  )
}

export default Home