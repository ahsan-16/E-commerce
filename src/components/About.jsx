import React from 'react'
import Nav from './Nav'
import Features from './features'
import Footer from './footer'

const About = () => {
  return (
    <>
        <Nav />
       <div>
          <div className='bg-gray-200 py-20 ' >
            <h1 className='text-3xl text-red-500 font-bold items-center text-center' >About Elegnat Packages</h1>
            <p className='w-160 ml-160  text-center mt-5' >We craft packaging that transforms brands and elevates customer experience from first glance to final unboxing.</p>
          </div>

          <div className='flex gap-x-20 justify-center py-30 ' >
             <div>
                 <h1  className='text-red-500 font-bold text-2xl '>Our Mission</h1>
                 <p className='w-110 mt-4  text-sm ' >At Elegant Packages, our mission is to deliver premium packaging, printing, and advertising solutions that help businesses stand out. We believe packaging is more than protection—it's your brand’s first impression.</p>
             </div>

               <div>
                 <h1 className='text-red-500 font-bold text-2xl ' >Our Story</h1>
                 <p className='w-110 mt-4 text-sm' >Founded in Lahore, Pakistan, we started with a simple goal: to make packaging elegant, functional, and unforgettable. Over the years, we've grown into a trusted partner for brands across industries, offering custom boxes, labels, bags, and more.</p>
               </div>
          </div>

       </div>
         <Features />
            <Footer />

    </>
  )
}

export default About