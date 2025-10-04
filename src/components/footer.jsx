import React from 'react'

const footer = () => {
  return (
    <>
    
    <div  className='bg-[rgb(16,24,40)] px-50 py-20' >
          <div className='flex gap-x-70 ' >
               <div>
                  <div className='flex gap-x-9' >  
                <div><h1 className='font-bold bg-red-500 px-2 py-2 w-10 rounded-md text-white'>EP</h1></div>
                <div><h1 className='text-white' >Elegant Packaging</h1></div>
             </div>
                 
             <div>
                <p  className='text-gray-500 w-80  mt-5' >At Elegant Packages, our mission is to deliver premium packaging, printing, and advertising solutions that elevate brands...</p>    
            </div>  
            </div>

            <div className='flex  gap-x-90' >
               <div>
                   <h1 className='text-red-500 font-bold' >
                       Products 
                   </h1>
                    <p  className='text-gray-400 mt-6 '  >Stickers</p>
                    <p  className='text-gray-400 mt-4'  >Labels & Tags</p>
                    <p  className='text-gray-400 mt-4'  >Paper Bag</p>
                    <p  className='text-gray-400 mt-4'  >Rigid Boxes</p>
            
                </div> 
                 
                 <div className='flex' >
                    <div>
                        <h1 className='text-red-500 font-bold' >Newsletter</h1>
                        <p className='text-gray-500 mt-4 w-90' >
                            Subscribe to our Newsletter & Event right now to be updated.
                        </p>

                         <div className='flex flex-col w-60' >
                            <input type="text"
                         placeholder='Your Name '
                         className='bg-gray-800 text-gray-500 px-9 py-2 rounded-md mt-4'
                        />
                        <input type="text"
                         placeholder='Your Email '
                         className='bg-gray-800 text-gray-500 px-9 py-2 rounded-md mt-4'
                        />
                         </div>
                          <div className='bg-red-500 w-60 mt-4 rounded-md px-7 py-3 flex justify-center ' >
                             <button className='text-white' >
                                SIGN UP NEWSLETTER
                             </button>
                          </div>

                    </div>
                 </div>

            </div>  
          </div>

            <div className='border-t border-gray-500 mt-10' >
                <div className='flex flex-col justify-center items-center mt-9' >
                    <div>
                        <p className='text-gray-600 ' >© 2025 Elegant Packages. All rights reserved.</p>
                        <p className='text-gray-600 mt-1 text-center '>Designed By: Muhammad Ahsan | CEO</p>
                    </div>

                    <div className='flex gap-x-9 mt-4'>
                        <div>
                            <p className='text-gray-600 ' > Privacy Policy</p>
                        </div>
                        <div>
                            <p className='text-gray-600 '>Cookie Policy</p>
                        </div>
                    </div>
                </div>
            </div>

    </div>
    
    </>
  )
}

export default footer