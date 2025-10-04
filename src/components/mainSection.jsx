import React from 'react'
import { Link } from 'react-router-dom'


const banner = () => {
  return (
    <>
      <div className='relative' >

         <img className='object-cover' src="https://packaging-app.vercel.app/assets/main-DNzjNlA2.png" alt="no img" />

          <div className=' ' >
             <a href="#requestSection">

               
              <button  className='absolute inset-0  h-fit w-fit text-white bg-[rgb(159,7,18)] px-4 py-2 rounded-3xl mt-150 ml-70  cursor-pointer hover:bg-red-700 ' >
                 Get A Quote
             </button>
             </a>
          </div>

      </div>

        <div  className='flex gap-x-5 justify-center mt-30' >
             <div className='flex flex-col bg-white shadow-md rounded-lg shadow-black w-100 px-4 py-7 transition-all duration-300 ease-in-out transform hover:scale-102 ' >
          <div>
             <img className='w-10 ml-5' src="https://pngimg.com/d/printer_PNG7733.png" alt="" />
          </div>
          <h1 className='mt-2 font-bold' >
                Printing Choices
          </h1>
          <p className='w-90 mt-1 text-sm' > 
               Choose from minimalist to ornate designs, radiant effects, and a variety of printing and finishing options to make your boxes stand out.
          </p>
      </div>

      <div className='flex flex-col bg-white shadow-md rounded-lg shadow-black w-100 px-4 py-7  transition-all duration-300 ease-in-out transform hover:scale-102  ' >
          <div>
             <img className='w-10 ml-5' src="https://toppng.com/uploads/preview/shopping-bag-png-11553960570vzdsdnjghe.png" alt="" />
          </div>
          <h1 className='mt-2 font-bold' >
                Printing Choices
          </h1>
          <p className='w-90 mt-1 text-sm' > 
               Choose from minimalist to ornate designs, radiant effects, and a variety of printing and finishing options to make your boxes stand out.
          </p>
      </div>
      <div className='flex flex-col shadow-md rounded-lg shadow-black w-100 px-4 py-7 bg-[rgb(159,7,18)]  transition-all duration-300 ease-in-out transform hover:scale-102  ' >
          <div>
             <img className='w-10 ml-5' src="https://www.freeiconspng.com/uploads/settings-icon-13.png" alt="" />
          </div>
          <h1 className='mt-2 font-bold text-white ' >
                Printing Choices
          </h1>
          <p className='w-90 mt-1 text-sm text-white' > 
               Choose from minimalist to ornate designs, radiant effects, and a variety of printing and finishing options to make your boxes stand out.
          </p>
      </div>
        </div>
      
    </>
  )
}

export default banner