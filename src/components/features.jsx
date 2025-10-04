import React from 'react'

const features = () => {
  return (
   <>
   
     <div className='bg-[rgb(16,24,40)] px-90 py-20 mb-10 ' >
         <div  > 
            <h1  className='text-3xl font-bold  flex justify-center text-white  ' >Why choose us? </h1>
         </div>

           <div className=' grid  grid-cols-3 mt-15 ' >
               <div className='bg-[rgb(30,41,57)] w-85 px-7 py-8 rounded-xl  hover:shadow-blue-400 shadow-md hover:transistion-all duration-500 transition-all  ease-in-out transform hover:scale-102' >  
                   <h1 className='text-red-700 font-bold text-lg  '>Custom Designs</h1>
                   <p  className='text-white mt-3 '>Unique packaging tailored to your brand vision with full design flexibility.</p>
               </div>

               <div  className='bg-[rgb(30,41,57)] w-85 px-7 py-8 rounded-xl  hover:shadow-blue-400 shadow-md hover:transistion-all duration-500 transition-all  ease-in-out transform hover:scale-102' >
                 <h1 className='text-red-700 font-bold text-lg  ' >Fast Turnaround</h1>
                 <p className='text-white mt-3 ' >  Streamlined production ensures quick delivery without compromising quality.</p>
               </div>

               <div className='bg-[rgb(30,41,57)] w-85 px-7 py-8 rounded-xl  hover:shadow-blue-400 shadow-md hover:transistion-all duration-500 transition-all  ease-in-out transform hover:scale-102 ' >  
                 <h1 className='text-red-700 font-bold text-lg  ' >  High-Quality Materials</h1>
                 <p  className='text-white mt-3 ' >Eco-friendly and durable materials that protect products and convey luxury.</p>
               </div>

               <div className='bg-[rgb(30,41,57)] w-85 px-7 py-8 rounded-xl mt-7  hover:shadow-blue-400 shadow-md hover:transistion-all duration-500 transition-all  ease-in-out transform hover:scale-102' > 
                  <h1 className='text-red-700 font-bold text-lg  ' >Sustainability Commitment</h1>
                  <p className='text-white mt-3 ' >We reduce carbon footprint and promote environmentally conscious packaging.</p>
               </div>

               <div className='bg-[rgb(30,41,57)] w-85 px-7 py-8 rounded-xl mt-7  hover:shadow-blue-400 shadow-md hover:transistion-all duration-500 transition-all  ease-in-out transform hover:scale-102' >
                    <h1 className='text-red-700 font-bold text-lg  ' >Competitive Pricing</h1>
                    <p className='text-white mt-3 ' >  Affordable solutions without sacrificing quality or design excellence.</p>
               </div>

               <div className='bg-[rgb(30,41,57)] w-85 px-7 py-8 rounded-xl mt-7 hover:shadow-blue-400 shadow-md hover:transistion-all duration-500 transition-all  ease-in-out transform hover:scale-102 ' >
                 <h1  className='text-red-700 font-bold text-lg  ' >  Print in All Colors</h1>
                 <p  className='text-white mt-3 '> CMYK printing technology offers unlimited color options for vibrant results. </p>
               </div>
           </div>

           <div className='flex gap-x-25 ' >
              <div>
                 <img className='w-160 mt-20 rounded-xl' src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80" alt="" />
              </div>
                
                <div className='mt-20' >
                      <div>
                   <h1 className='text-3xl text-red-500 w-130'>Create Top-End Branding and Unboxing Experience</h1>
                   <p className='text-white font-serif mt-4 w-140 '  >Looking to create custom boxes with an elegant, premium finish to transform your customer's experience into high-class branding from the first interaction to unboxing? You are at the right place. We specialize in crafting custom boxes with high-class branding and a premium unboxing experience. With a vast array of design, printing, finishing, and material options, along with our customer-focused policies.</p>
               </div>

               <div>
                   <h1 className='mt-4 text-white' >
                       ✔
                         Free design adjustments
                   </h1>
                </div>     
               <div>
                   <h1 className='mt-4 text-white' >
                       ✔
                       Expert help to pick right stock, printing, style
                     </h1>
                </div>     
                 <div>
                     <h1 className='mt-4 text-white' >
                         ✔
                        No die plate & shipping fee on all order size
                     </h1>
                  </div>     
                 <div>
                     <h1 className='mt-4 text-white' >
                         ✔
                         Physical prototype & free 3D sampling
                   </h1>
                </div>     

                <div className='bg-red-500 px-7 py-2 rounded-lg mt-9  w-40  ' >
                     <button  className='text-white font-bold' >
                        Get A QUOTE
                     </button>
                </div>
                </div>

           </div>

     </div>
   
   </>
  )
}

export default features