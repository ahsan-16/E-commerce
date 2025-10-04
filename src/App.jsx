import React from 'react'
import { motion } from "motion/react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './components/Nav'
import Banner from './components/mainSection'
import RequestSection from './components/requestSection'
import Feedback from './components/feedback'
import Features from './components/features'
import Footer from './components/footer'
import Products from './components/Products'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Blog from './components/blog'
import Contact from './components/Contact'
import Sign from './components/Sign'

const router = createBrowserRouter([

{
  path: "/",
  element: <>
    <Home />
    <Nav />
    <Banner />
    <RequestSection />
    <Feedback />
    <Features />
    <Footer />
  </>
},
{
  path: "/products",
  element: <Products />,
},
{
  path: "/about",
  element: <About />,
},
{
  path: "/service",
  element: <Service />,
},
{
  path: "/blog",
  element: <Blog />,
},
{
  path: "/contact",
  element: <Contact />,
},
{
  path: "/Sign",
  element: <Sign />,
},


]);

const App = () => {
  return (
     <>
      <RouterProvider router={router} />
     </>
  )
}

export default App