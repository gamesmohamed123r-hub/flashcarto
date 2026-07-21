import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Home/Navbar'
import BackToTop from '../Components/BackToTop'
import ScrollToHash from '../Components/ScrollToHash'

function Loginform() {
  return (
    <div>
     <Navbar/>
     <div className="form-box">

       <h1>log-in</h1>
       <p id="error-message"></p>
       <form id="form">
   
         <div>
           <label for="useremail-input">
             <span>@</span>    
           </label>
           <input type="email" name="useremail" id="useremail-input" placeholder="UserEmail"/>
         </div>
   
         <div>
           <label for="password-input">
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(255, 255, 255)"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm296.5-143.5Q560-327 560-360t-23.5-56.5Q513-440 480-440t-56.5 23.5Q400-393 400-360t23.5 56.5Q447-280 480-280t56.5-23.5ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
           </label>
           <input type="password" name="username" id="password-input" placeholder="YourPassword"/>
         </div>
       
            <button type="submit">login</button>
   
       </form>
   
       <p>Create new user<Link to="/signup"> create account</Link></p>

     </div>
     <ScrollToHash/>
     <BackToTop/>
    </div>
  )
}

export default Loginform
