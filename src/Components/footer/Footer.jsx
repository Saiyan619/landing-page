import React from 'react'
import './footer.css'
const Footer = () => {
  return (
      <footer>
          <div className='sub_footer_container'>
              
          <div className='sub_left_footer_container'>
              <img src="./5b680f7ddc6fa8394a12fc7f_logo-spoon-white.svg" alt="footer logo" />
              <p>2018 Spoon Inc, All rights reserved</p>
          </div>

              <div className='sub_right_footer_container'>
                  
          <div className='sub_right_footer_list_container'>
             <span>features</span>
             <span>About</span>
             <span>Pricing</span>
             <span>Contact</span>
                  </div>
                  
                  
                <div className='sub_right_footer_list_container'>
             <span>licsense info</span>
             <span>Powered by Ebenezer</span>
              </div>
              
                  <div className='footer_icons_container'>
                      <img src="./5b68459df109cf0cf0d97867_icon-facebook.svg" alt="icon" />
                      <img src="./5b6846535b239d7ba536b158_icon-instagram.svg" alt="icon" />
                      <img src="./5b684641659acabed7c8b74d_icon-twitter.svg" alt="icon" />
                  </div>
              </div>

         
          </div>
    </footer>
  )
}

export default Footer
