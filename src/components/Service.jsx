import React from 'react'
import Nav from './Nav'
import Footer from './footer'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <>
     <Nav/>
      

      <div>
         <div className='bg-gray-200 py-20 ' >
           <h1 className='text-4xl text-red-500 font-bold text-center ' >Our Services</h1>
           <p className='mt-4 text-center ' >Discover how Elegant Packages transforms packaging into powerful brand experiences.</p>
         </div>

         <div className='grid grid-cols-3 px-40 mt-20 ' >
           <div className='bg-white w-120 px-4 py-10 shadow-gray-200 shadow-md rounded-xl hover:shadow-gray-300 transition-all duration-300  ease-in-out transform hover:scale-101    ' >
               <div>
                <img className='w-10 ml-53 ' src="https://png.pngtree.com/png-clipart/20220123/original/pngtree-freehand-palette-png-image_7165680.png" alt="" />
               </div>
               <h1 className='text-red-500 font-bold  text-center' >
                  Custom Packaging Design
               </h1>
               <p className='w-110  text-sm text-center mt-4 ' >
                Tailored packaging Design that reflect your brand identity and captivate your audience.
               </p>
           </div>
           <div className='bg-white w-120 px-4 py-10 shadow-gray-200 shadow-md rounded-xl hover:shadow-gray-300 transition-all duration-300  ease-in-out transform hover:scale-101    ' >
               <div>
                <img className='w-10 ml-53 ' src="https://www.freeiconspng.com/thumbs/printer-icon/printer-icon--dragon-soft-iconset--artuam-31.png" alt="" />
               </div>
               <h1 className='text-red-500 font-bold  text-center' >
                  Printing solutions
               </h1>
               <p className='w-110  text-sm text-center mt-4 ' >
                Tailored packaging Design that reflect your brand identity and captivate your audience.
               </p>
           </div>
           <div className='bg-white w-120 px-4 py-10 shadow-gray-200 shadow-md rounded-xl hover:shadow-gray-300 transition-all duration-300  ease-in-out transform hover:scale-101    ' >
               <div>
                <img className='w-10 ml-53 ' src="https://png.pngtree.com/png-clipart/20220123/original/pngtree-freehand-palette-png-image_7165680.png" alt="" />
               </div>
               <h1 className='text-red-500 font-bold  text-center' >
                  Branding Consulting
               </h1>
               <p className='w-110  text-sm text-center mt-4 ' >
                Tailored packaging Design that reflect your brand identity and captivate your audience.
               </p>
           </div>
           <div className='bg-white w-120 px-4 py-10 mt-7 shadow-gray-200 shadow-md rounded-xl hover:shadow-gray-300 transition-all duration-300  ease-in-out transform hover:scale-101    ' >
               <div>
                <img className='w-10 ml-53 ' src="https://png.pngtree.com/png-clipart/20220123/original/pngtree-freehand-palette-png-image_7165680.png" alt="" />
               </div>
               <h1 className='text-red-500 font-bold  text-center' >
                  Rapid Prototying
               </h1>
               <p className='w-110  text-sm text-center mt-4 ' >
                Tailored packaging Design that reflect your brand identity and captivate your audience.
               </p>
           </div>
           <div className='bg-white w-120 px-4 py-10 mt-7 shadow-gray-200 shadow-md rounded-xl hover:shadow-gray-300 transition-all duration-300  ease-in-out transform hover:scale-101    ' > 
               <div>
                <img className='w-10 ml-53 ' src="https://png.pngtree.com/png-clipart/20220123/original/pngtree-freehand-palette-png-image_7165680.png" alt="" />
               </div>
               <h1 className='text-red-500 font-bold  text-center' >
                  Eco-Friendly Materials
               </h1>
               <p className='w-110  text-sm text-center mt-4 ' >
                Tailored packaging Design that reflect your brand identity and captivate your audience.
               </p>
           </div>
           <div className='bg-white w-120 px-4 py-10 mt-7 shadow-gray-200 shadow-md rounded-xl hover:shadow-gray-300 transition-all duration-300  ease-in-out transform hover:scale-101    ' >
               <div>
                <img className='w-10 ml-53 ' src="https://png.pngtree.com/png-clipart/20220123/original/pngtree-freehand-palette-png-image_7165680.png" alt="" />
               </div>
               <h1 className='text-red-500 font-bold  text-center' >
                 Global Shipping
               </h1>
               <p className='w-110  text-sm text-center mt-4 ' >
                Tailored packaging Design that reflect your brand identity and captivate your audience.
               </p>
           </div>
         </div>

      </div>

      <div  className='bg-red-500  py-20 mt-15 mb-5 ' >
         <div >
          <h1 className='text-white text-2xl font-bold text-center ' > Ready to Elevate Your Brand?  </h1>
          <p className='text-white text-center mt-3 ' >Let's create packaging that speak volumes.Get in touch today</p>
         </div>
         <div>
            <Link to="/contact"   >
             <button className='bg-white px-3 py-2 rounded-xl ml-220 mt-5 cursor-pointer text-red-500 font-bold ' >
              Contact Us
             </button>
            </Link>
         </div>
      </div>
      
      <Footer/>
    </>   
  )
}

export default Service