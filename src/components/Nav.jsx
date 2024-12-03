import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { productContext } from '../utils/Context'


function Nav() {

    const [product] = useContext(productContext);
    let dist_cat = product && product.reduce((acc, cv) =>[...acc, cv.category], []);
    dist_cat = [...new Set(dist_cat)];


    const color = ()=>{
      return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${0.8} )`;
  };
  



  return (
    <nav className='w-[18%]  bg-zinc-200 flex flex-col items-center' >
    <Link to='/newProduct' className='px-3 py-2 text-2xl font-semibold bg-blue-300 rounded-md mt-3  ' >
    Add new Product
    </Link>
    <hr  className='my-3 w-[80%]' />
    <h1 className='w-[80%] text-xl font-semibold '>Ctagery Filter</h1>
    <div className='w-[80%]  my-2 ' >

   {dist_cat.map((cat, i) =>{
    return (
      <Link key={i} to={`/?category=${cat}`} className='flex  items-center gap-3' > <span style={{backgroundColor: color()}} className='w-[15px] h-[15px] rounded-full' ></span>{cat} </Link>

    )
   })}

     
    </div>
  </nav>

  )
}

export default Nav