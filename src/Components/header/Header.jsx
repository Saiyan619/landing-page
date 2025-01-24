import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import './header.css'

const Header = () => {

    const [ref, InView] = useInView({
        triggerOnce: false,
        threshold:0.2
    })
    
  return (
      <header>
          <motion.div
              className='sub_header'
              ref={ref}
              initial={{ opacity: 0, y: 0 }}
          animate={InView ? {opacity: 1, y: -20 } : {}}
          exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
          >
          <h1>Boost your business.</h1>
          <p className='header_sub_text'>Spoon comes with everything to keep your business rolling.</p>
              <button className='hero_btn'>Get started</button>
              </motion.div>
      </header>
  )
}

export default Header
