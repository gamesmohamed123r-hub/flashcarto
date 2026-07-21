import React from "react";
import Navbar from './Home/Navbar';
import First_section from "./Home/First_section";
import Contact from "./Home/Contact";
import ScrollToHash from "./Components/ScrollToHash";
import BackToTop from "./Components/BackToTop";
function App(){
  return(
    <div>
       <Navbar/>
       <First_section/>
       <Contact/>
       <ScrollToHash />
       <BackToTop/>
    </div>
  )
}
export default App;