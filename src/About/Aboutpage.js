import React from 'react'
import Navbar from '../Home/Navbar'
import Details from './Details'
import ScrollToHash from '../Components/ScrollToHash'
import BackToTop from '../Components/BackToTop'

function Aboutpage() {
  return (
    <div>
      <Navbar/>
      <Details/>
      <ScrollToHash/>
      <BackToTop/>
    </div>
  )
}

export default Aboutpage
