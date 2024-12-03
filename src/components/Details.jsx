import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';

function Details() {

    const [product , setProduct] = useState(null);
    const {id} = useParams();


    const getSingleProduct = async () => {
        try {
            const {data} = await axios.get(`/products/${id}`)
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getSingleProduct();
    },[])

  return product?(
    <div className='h-[80vh] w-[75%] m-auto   flex items-center px-40 gap-20 ' >
        <div className='w-[50vh] h-[60vh] bg-blue-200 rounded overflow-hidden' >
            <img className='w-full h-full object-cover' src={product.image} alt="" />
        </div>
        <div className='content w-[70vh] h-[50vh] ' >
            <h1 className='text-4xl font-bold' >{product.title}</h1>
            <h3 className='my-3 opacity-60' >{product.category}</h3>
            <h2 className='mt-4 mb-2 text-red-200' >{product.price}</h2>
            <p className='leading-tight mb-7' >{product.description}</p>
            
            <Link className=' text-blue-400 px-4 py-1 bg-zinc-100 mr-5 rounded border border-zinc-500 '>Edit</Link>
            <Link className= ' text-red-400 px-4 py-1 bg-zinc-100 rounded  border border-zinc-500'>Delete</Link>


        </div>
    </div>
  ): <Loading/>
}

export default Details