import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Home/Navbar'
import BackToTop from '../Components/BackToTop'
import ScrollToHash from '../Components/ScrollToHash'
import { Link } from 'react-router-dom';
import { apivalue } from '../Data/Alldata';
import { useCart } from 'react-use-cart';
function Productpage() {
   const [search,setSearch]=useState(0);
   const text=useContext(apivalue);
   const {addItem}=useCart();

    
    const getSearch= (event)=>{
       setSearch(event.target.value)
    }
  return (
    <div>
      <Navbar/>
      <div className='container'>
         <div className='row'> 
                <div className='col-md-10'>
                    <input onChange={getSearch} type='text' placeholder='search' className='form-control border border-dark'></input>
                </div>             
                 {
                    text.map((item)=>{
                        return search==0?(
                            <div className='col-md-4 text-center'>
                               <img src={item.images[0]} className='w-100'></img>
                               <h4>{item.id}</h4>
                               <h4>{item.title}</h4>
                               <h4>{item.brand}</h4>
                               <h4>{item.price} $</h4>
                               <Link to={`/singleProduct/${item.id}`} className='btn btn-dark'>Details</Link>
                               <br></br>
                               <button onClick={()=>addItem(item)} className='btn btn-dark' >add to cart</button>
                            </div>
                        ): item.id==search?(
                            <div className='col-md-4 text-center'>
                               <img src={item.images[0]} className='w-100'></img>
                               <h4>{item.id}</h4>
                               <h4>{item.title}</h4>
                               <h4>{item.brand}</h4>
                               <h4>{item.price} $</h4>
                               <Link to={`/singleProduct/${item.id}`} className='btn btn-dark'>Details</Link>
                               <br></br>
                               <button onClick={()=>addItem(item)} className='btn btn-dark' >add to cart</button>
                            </div>
                        ): item.title.toLowerCase().includes(search.toLowerCase())?(
                             <div className='col-md-4 text-center'>
                               <img src={item.images[0]} className='w-100'></img>
                               <h4>{item.id}</h4>
                               <h4>{item.title}</h4>
                               <h4>{item.brand}</h4>
                               <h4>{item.price} $</h4>
                               <Link to={`/singleProduct/${item.id}`} className='btn btn-dark'>Details</Link>
                               <br></br>
                               <button onClick={()=>addItem(item)} className='btn btn-dark' >add to cart</button>
                            </div>
                        ):null
                    })
                 }
         </div>
      </div>
      <BackToTop/>
      <ScrollToHash/>
    </div>
  )
}

export default Productpage
