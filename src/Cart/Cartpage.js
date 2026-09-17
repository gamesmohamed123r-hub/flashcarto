import React from 'react'
import Navbar from './../Home/Navbar';
import { CartProvider, useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

function Cartpage() {
    const {isEmpty,emptyCart,items,totalUniqueItems,updateItemQuantity,removeItem,totalItems,cartTotal}=useCart();
    if(isEmpty){
        return(
            <div className='text-center'>
                <Navbar/>
                <img src='/img/empty-cart.svg' style={{width:"25%"}}></img>
                <h3>
                    Your Cart is still Empty
                    <br></br>
                    <Link to="/product" className='btn btn-dark'>start shoping</Link>
                </h3>
            </div>
        )
    }
  return (
    <CartProvider>
        <Navbar/>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 m-auto text-center'>
                <h4>Details of products ({totalUniqueItems})</h4>
                <button className='btn btn-danger' onClick={()=>emptyCart()}>Empty</button>
              <table className='table table-secondary'>
           <thead>
               <tr>
                   <th>Image</th>
                   <th>Id</th>
                   <th>Name</th>
                   <th>Quantity</th>
                   <th>Price</th>
                   <th>operations</th>
               </tr>
           </thead>
           <tbody>
            {items.map((item)=>{
                return(
                
                <tr>
                    <td>
                        <img src={item.images[0]} style={{width:"70px"}}></img>
                    </td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{Math.ceil(item.price*item.quantity)}</td>
                    <td>
                        <button onClick={()=>updateItemQuantity(item.id,item.quantity-1)} className='btn btn-warning m-auto'>-</button>
                        <button onClick={()=>updateItemQuantity(item.id,item.quantity+1)} className='btn btn-success m-auto'>+</button>
                        <button onClick={()=>removeItem(item.id)} className='btn btn-danger m-auto'>&times;</button>
                    </td>
                </tr>
                
                )
            })}
           </tbody>
           <tfoot>
            <tr>
                <td>Total</td>
                <td>------</td>
                <td>------</td>
                <td>{totalItems}</td>
                <td>{Math.ceil(cartTotal)}</td>
                 <td>
                    <Link to="/product" className='btn btn-primary'>continue shoping</Link>
                 </td>
            </tr>
           </tfoot>
              </table>
            </div>
          </div>
         </div>
    </CartProvider>
  )
}

export default Cartpage
