import React from 'react'
import { Link } from 'react-router-dom'

const requestSection = () => {
  return (
    <>
    
     <div id='requestSection'  className='relative mb-20 ' > 
           <div>
              <img className='absolute  ml-230 rounded-bl-full h-191  ' src="https://packaging-app.vercel.app/assets/packagingunlimited-DlHRqPhE.png" alt="" />
          </div> 

           
            <div className=' ' >  
                   <div className='mt-30 flex flex-col  bg-gray-300 px-30 py-60 '>
                          <h2 className=' font-bold text-red-700  text-2xl ' >    
                              We leading Packaging provider in the world        
                         </h2>        
                         <h1 className='text-4xl font-bold mt-5' >        
                            Custom & Elegant Packaging Solutions        
                         </h1>        
                         <p className='w-200 font-serif mt-10' >        
                             At Elegant Packages, we specialize in providing custom and elegant packaging solutions tailored to enhance your brand’s identity. Whether you’re a startup or an established business, our premium packaging options will make your products stand out and leave a lasting impression.
                         </p>

                          <div  className='mt-10 bg-red-500 w-45 px-5 py-2 rounded-xl cursor-pointer transistion-colors duration-300 hover:bg-red-600' >
                               <Link to = "/sign" >
                               <button className=' text-white font-bold  ' >
                                 Get Request Now
                              </button>
                                 </Link>
                           </div>
                   </div>
                 

            </div>

     </div>

    </>
  )
}

export default requestSection