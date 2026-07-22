import React, { createContext, useEffect, useState } from 'react'
const apivalue=createContext();

function Alldata({children}) {
    const [api,setApi] = useState([]);

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((item)=>{
            return item.json();
        })
        .then((element)=>{
            setApi(element.products)
        })
    },[])

  return (
    <apivalue.Provider value={api}>
      {children}
    </apivalue.Provider>
  )
}

export  {Alldata,apivalue};
