import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './footer'

const blog = () => {
  return (
    <>
    <Navbar/>
        
        <div>
             <div className='bg-gray-200 py-20 ' >
           <h1 className='text-4xl text-red-500 font-bold text-center ' >Latest Blogs</h1>
           <p className='mt-4 text-center ' >Stay updated with insights, trends, and tips from the world of packaging and branding.</p>
             </div>

          <div className='flex justify-center gap-x-20 mt-25' >
                   <div className='max-w-md overflow-hidden bg-white rounded-lg mt-8 h-80 hover:shadow-gray-400 shadow-md  transition-all duration-300 ease-in-out  transform hover:scale-101 ' >
                  <div>
                    <img className='w-full h-50 object-cover' src="https://images-cdn.ubuy.co.in/634f4cb37a699a6a0820cb06-bagkraft-brown-paper-bags-with-handles.jpg" alt="" />
                  </div>
                    <div className='px-4 py-4 ' >
                         <h1 className='text-red-500 mt-5 font-bold' >Paper Bags</h1>
                         <p  className='text-gray-400 text-sm mt-1 '>October 1, 2025</p>
                         <p className='mt-2' >Eco-friendly paper bags with custom printing.</p>
                    </div>
                </div>

              <div className='max-w-md overflow-hidden bg-white rounded-lg mt-8 h-80 hover:shadow-gray-400 shadow-md  transition-all duration-300 ease-in-out  transform hover:scale-101 ' >
                  <div>
                     <img className=' h-50 object-cover' src="https://www.deprintedbox.com/blog/wp-content/uploads/2021/12/slide-rigid-box-cardboard-setup-box.webp" alt="" />
                  </div>
                   <div className='px-4 py-4 ' >
                      <h1 className='text-red-500 mt-5 font-bold ' >Rigid Boxes</h1>
                      <p  className='text-gray-400 text-sm mt-1 '>October 1, 2025</p>
                    <p className='mt-2' > Luxury rigid boxes for premium packaging.  </p>
                   </div>
              </div>

              <div className='max-w-md overflow-hidden bg-white rounded-lg mt-8 h-80 hover:shadow-gray-400 shadow-md  transition-all duration-300 ease-in-out  transform hover:scale-101 ' >
                 <div>
                    <img className='w-full h-50 object-cover'src="https://shakirscollection.com/wp-content/uploads/2024/05/carton4.jpg" alt="" />
                 </div>
                  <div className='px-4 py-4 ' >
                      <h1 className='text-red-500 mt-5 font-bold' >Carton Boxes</h1>
                      <p  className='text-gray-400 text-sm mt-1 '>October 1, 2025</p>
                    <p className='mt-2' >Luxury rigid boxes for premium packaging.</p>
                  </div>
              </div>
          </div>

          <div>
              <div  className='bg-red-500  py-20 mt-15 mb-5 ' >
         <div >
          <h1 className='text-white text-2xl font-bold text-center ' >Want More Insights</h1>
          <p className='text-white text-center mt-3 ' >Subscribe to our newsletter and never miss an update.

</p>
         </div>
         <div>
            <Link to="/sign"   >
             <button className='bg-white px-3 py-2 rounded-xl ml-220 mt-5 cursor-pointer text-red-500 font-bold ' >
              SIGN UP
             </button>
            </Link>
         </div>
      </div>
          </div>


        </div>
        <Footer/>
    </>
  )
}

export default blog