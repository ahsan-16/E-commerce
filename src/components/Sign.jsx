import React from 'react'
import Navbar from './NavBar'
import { Link } from 'react-router-dom'

const Sign = () => {
  return (
    <>
    <Navbar/>
    
      <div className='bg-gray-300 h-211 flex flex-col justify-center items-center' >
                  
          <div className='bg-white w-fit py-15 px-10 rounded-xl  ' >
                          

                 <div  > 
                   <h1 className='text-2xl font-bold text-center  ' >Register</h1>
                </div>          
               
               <div className='mt-8' >
                   <label htmlFor="">Full Name</label><br />
                  <input 
                  className='bg-white text-black border-2 border-gray-200 mt-2 py-1 px-20 rounded-lg'
                
                  type="text" />
               </div>
               <div>
                   <label htmlFor="">Email</label><br />
                  <input 
                  className='bg-white text-black border-2 border-gray-200 mt-2 py-1 px-20 rounded-lg'
                 
                  type="text" />
               </div>
               <div>
                   <label htmlFor="">Password</label><br />
                  <input 
                  className='bg-white text-black border-2 border-gray-200 mt-2 py-1 px-20 rounded-lg'
             
                  type="text" />
               </div>
               <div>
                   <label htmlFor="">Confirm Password</label><br />
                  <input 
                  className='bg-white text-black border-2 border-gray-200 mt-2 py-1 px-20 rounded-lg'
                  type="text" />
               </div>

                 <div className='flex gap-x-5 mt-4 justify-center ' >
                   <div>
                    
                      <Link to = "" >
                         <button className='font-bold bg-red-500 px-7 py-2 cursor-pointer rounded-xl text-white ' >Register</button>
                      </Link>
                 
                   </div>
                     
                     <div>
                        <Link>
                        <button className='font-bold bg-red-500 px-9 py-2 cursor-pointer rounded-xl text-white ' >Login</button>
                        </Link>
                     </div>

                 </div>

          </div>
      </div>
        

    
    </>
  )
}

export default Sign