import React from 'react'
import './sectionOne.css'

const SectionOne = () => {
  return (
    <div className='section_1_container'>
          <div className='section_1_hero_text_container'>
              <p>
              <span>Promoting your business and services with Propel:</span> A responsive, multi-page business template with everything you need propel your business.
              </p>
          </div>
          
          <div className='section_1_box_container'>
              <div className='section_1_box'>
                  <img src="./5b681bfb5b239d8246368808_icon-feature-01.svg" alt="icon" />
                  <span>Crafting Delicious Meals</span>
                  <p>
                  We specialize in creating mouthwatering dishes made from the freshest, locally sourced ingredients.
                  </p>
              </div><div className='section_1_box'>
                  <img src="./5b681c235fc94c975348ed36_icon-feature-02.svg" alt="icon" />
                  <span>Crafting Delicious Meals</span>
                  <p>
                  We specialize in creating mouthwatering dishes made from the freshest, locally sourced ingredients.
                  </p>
              </div><div className='section_1_box'>
                  <img src="./5b681c455b239d0903368830_icon-feature-03.svg" alt="icon" />
                  <span>Crafting Delicious Meals</span>
                  <p>
                  We specialize in creating mouthwatering dishes made from the freshest, locally sourced ingredients.
                  </p>
              </div>
          </div>
    </div>
  )
}

export default SectionOne
