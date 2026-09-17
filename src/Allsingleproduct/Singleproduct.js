import React, { useContext, useEffect, useState } from 'react'
import Navbar from './../Home/Navbar';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { apivalue } from '../Data/Alldata';
import { useCart } from 'react-use-cart';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Singleproduct() {
    const {id}=useParams();
    const text=useContext(apivalue);
    const {addItem}=useCart();
    
    const messageaddcart=(item)=>{
      addItem(item);
            toast.success(`${item.title} added to cart 😃`,{
               position:"bottom-right",
               autoClose:2000,
            });
    }
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <div className='container'>
         {text.map((item)=>{
            return item.id==id?(
                <div className='row'>
                    <div className='col-md-6'>
                       <img src={item.images[0]} className='w-100'></img>
                    </div>
                    <div className='col-md-6 text-center mt-5 pt-5'>
                      <h4 className='mt-4'>id{item.id}</h4>
                      <h4 className='mt-4'>product{item.title}</h4>
                      <h4 className='mt-4'>category{item.category}</h4>
                      <h4 className='mt-4'>Brand{item.brand}</h4>
                      <h4 className='mt-4'>rating{item.rating}</h4>
                      <h4 className='mt-4'>price{item.price}</h4>
                      <br></br>
                      <button onClick={()=>messageaddcart(item)} className='btn btn-dark' >add to cart</button>
                      <Link to="/product" className='btn btn-danger'>Return</Link>
                    </div>
                </div>
            ):null
         })}
      </div>
    </div>
  )
}

export default Singleproduct
