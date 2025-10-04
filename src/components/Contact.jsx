import React from 'react'
import Nav from './Nav'
import Footer from './footer'

const Contact = () => {
  return (
    <>
    <Nav/>
    
       <div>
            <div className='bg-gray-200 py-20 ' >
               <h1 className='text-4xl text-red-500 font-bold text-center ' >Contact Us</h1>
               <p className='mt-4 text-center ' >We'd love to hear from you! Whether you have a question, need a quote, or want to collaborate—reach out today.</p>
             </div>

             <div className='flex justify-center gap-x-40 mt-20 mb-20 ' >
                  <div>
                       <div>
                     <label  htmlFor="">Name</label><br />
                     <input type="text" 
                     placeholder='Your Name'
                     className='bg-white text-black border-2 border-gray-200 mt-2 py-1 px-10 rounded-lg'
                     
                     />
                      </div>
                 <div className='mt-3'>
                     <label  htmlFor="">Email</label><br />
                     <input type="text" 
                     placeholder='Your Email'
                     className='bg-white text-black border-2 border-gray-200 mt-2 py-1 px-10 rounded-lg'
                     />
                 </div>
                 <div  className='mt-3' >
                     <label   htmlFor="">Message</label><br />
                     <textarea  className='border-2 border-gray-200 h-30 w-90 px-3 py-2 rounded-lg' placeholder='Your Email' ></textarea>
                 </div>
                  </div>
                  <div>
                     <div>
                         <h1 className='text-red-500 font-bold' >
                            Office Address
                         </h1>
                          <p className='text-gray-400 mt-3 '>
                            Elegnat Packages, Lahore, Pakistan
                          </p>
                     </div>
                     <div>
                         <h1 className='text-red-500 font-bold' >
                            Phone
                         </h1>
                          <p className='text-gray-400 mt-3 '>
                            +92 3038196440
                          </p>
                     </div>
                     <div>
                         <h1 className='text-red-500 font-bold' >
                            Business Hours
                         </h1>
                          <p className='text-gray-400 mt-3 '>
                            Mon–Sat: 9:00 AM – 6:00 PM
                          </p>
                          <p className='text-gray-400 mt-3 '>
                            Sunday: Closed
                          </p>
                     </div>
                  </div>
             </div>


       </div>

       <Footer/>
    </>
  )
}

export default Contact