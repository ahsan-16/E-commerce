import React from 'react'
import nobg from '../assets/nobg.png'
import { Link } from 'react-router-dom'

const navBar = () => {
  return (
    <>

        <div >
                
            <nav  className='flex justify-between items-center bg-[rgb(159,7,18)] '>

              <div className='flex ' >
                 <img className='w-25 ml-10 ' src="src/assets/nobg.png" alt="" />
             </div>
        
             <div>
                <ul className='flex gap-x-8 ml-190  font-medium text-white ' >
                    <li className=' hover:bg-amber-400 rounded-lg px-2 py-1 hover:text-black' >  <Link to = "/"  >Home</Link>                   </li>
                    <li className=' hover:bg-amber-400 rounded-lg px-2 py-1 hover:text-black' >  <Link to = "/Products"  >Products</Link>       </li>
                    <li className=' hover:bg-amber-400 rounded-lg px-2 py-1 hover:text-black' >  <Link to = "/about"  >About Us</Link>             </li>
                    <li className=' hover:bg-amber-400 rounded-lg px-2 py-1 hover:text-black' >  <Link to = "/Service"  >Service</Link>             </li>
                    <li className=' hover:bg-amber-400 rounded-lg px-2 py-1 hover:text-black' >  <Link to = "/blog"  >Blog</Link>                </li>
                    <li className=' hover:bg-amber-400 rounded-lg px-2 py-1 hover:text-black' >  <Link to = "/contact"  >Contact</Link>             </li>
                </ul>
                  
                   
             </div>
               <div className='flex justify-between mr-15 ' >
                     <ul>
                       <li><Link to = "/Sign" className=' bg-amber-400 rounded-xl px-4 py-2 hover:text-black font-medium text-white ' >
                       Sign In
                       </Link></li>
                       
                     </ul>
               </div> 

            </nav>
        </div>
        
    </>
  )
}

export default navBar