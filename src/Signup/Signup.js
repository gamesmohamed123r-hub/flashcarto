import React from 'react'
import Navbar from '../Home/Navbar'
import Signform from './Signform'
import ScrollToHash from '../Components/ScrollToHash'
import BackToTop from '../Components/BackToTop'

function Signup() {
  return (
    <div>
      <Navbar/>
      <Signform/>
      <ScrollToHash/>
      <BackToTop/>
    </div>
  )
}

export default Signup
