import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { productContext } from '../utils/Context'
import Loading from './Loading';
import axios from '../utils/Axios';

function Home() {

   const [products] =  useContext(productContext);
   const {search} = useLocation();
   const category = decodeURIComponent( search.split("=")[1]);
  //  console.log(search);
  //  console.log(category) ; 

   const [filterProducts, setFilter] = useState(null);

   const getProductCategory = async ()=>{
    try {
        const {data} = await axios.get(`/products/category/${category}`);
        setFilter(data);
    } catch (error) {
        console.log(error);  
    }
   }

   useEffect(()=>{
    if(!filterProducts) setFilter(products);
    // console.log(products);
    if(category != "undefined") getProductCategory();
   },[category,products]);

   

  return products?(
    <>

    <Nav/>

    <div className='w-[82%] h-full  py-20 px-5 flex flex-wrap gap-2  overflow-x-hidden overflow-y-auto' >
    { filterProducts && filterProducts.map((item,index)=>{
        return (
            <Link key={index} to={`/details/${item.id}`} className='card w-[40vh] h-[60vh] mb-10 py-1 border rounded-md border-zinc-400  relative ' >
      <div className='  hover:scale-110 w-[75%] h-[75%] mt-5  bg-red-500 translate-x-[14%] rounded '>
        <img className=' w-full h-full object-cover' src={item.image} alt="" />
      </div>
      <h1 className='hover:text-blue-500 text-center my-5'>{item.title}</h1>
    </Link>
        )
    })}

  </div>
  </>
  ): <Loading/>;
}

export default Home