import React, { useEffect } from 'react'
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useInView } from "framer-motion"

const Feedback = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  const createCounter = (target, duration) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, value => Math.round(value))

    useEffect(() => {
      if (isInView) {
        const controls = animate(count, target, { duration })
        return () => controls.stop()
      }
    }, [isInView, count, target, duration])

    return rounded
  }

  const count1 = createCounter(15000, 3)
  const count2 = createCounter(1250, 3)
  const count3 = createCounter(141, 3)

  return (
    <div ref={ref} className="text-center py-15 bg-gray-400 w-180 ml-130 mb-20 rounded-lg">
      <div>
        <h1 className="text-2xl font-bold">We are your best solution for Packaging Material</h1>
        <p className="text-gray-700  mt-2 ">Never worry about going to multiple sources to get your dream packaging</p>
      </div>

      <div className="flex justify-center gap-10 mt-6">
        <div>
          <motion.pre className="text-4xl font-extrabold text-black inline">
            {count1}
          </motion.pre>
          <span className="text-4xl font-extrabold text-black">+</span>
          <p className='font-serif mt-3 text-white ' > Projects Realized</p>
        </div>

        <div>
          <motion.pre className="text-4xl font-extrabold text-black inline">
            {count2}
          </motion.pre>
          <span className="text-4xl font-extrabold text-black">+</span>
          <p className='font-serif mt-3 text-white ' >Experts Joined </p>
        </div>

        <div>
          <motion.pre className="text-4xl font-extrabold text-black inline">
            {count3}
          </motion.pre>
          <span className="text-4xl font-extrabold text-black">+</span>
          <p className='font-serif mt-3 text-white ' >Awards Won</p>
        </div>
      </div>
    </div>
  )
}

export default Feedback
