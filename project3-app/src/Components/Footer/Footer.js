import React, { Component } from 'react';

class Footer extends Component {
  

    render() {
        
        return (
          
          
  
          // Title Section of Footer and overall Div
          <div classNames="footer-bottom">

              <div className="copyrighttitle">All Copyrights are prohibited</div>
            
            {/* For more information, please see below!<br /> */}
           

            {/* Navigation Section of Footer */}
                <nav id="footer-navigation" className="site-navigation">
                  <ul id="footer-menu" className="nav-menu">
                    <li id="list1" className="menu1"><a href="#">Support</a></li>
                    <li id="list2" className="menu1"><a href="#">Contact Us</a></li>
                    <li id="list3" className="menu1"><a href="https://github.com/nibingcheng/Project-3/blob/main/project3-app/README.md">ReadMe</a></li>
                    <li id="list4" className="menu1"><a href="https://github.com/nibingcheng/Project-3/blob/main/project3-app/wireframe.md">WireFrame</a></li>
                  </ul>
                </nav>
            
  
         {/* Social Links Section of Footer */}
                <div id="footer-socials">
                  {/* <div class="socials"> */}
  
                    <a href="#" target="_blank" title="Facebook" className="socials-item"> 
                      <img src="../../Images/facebook.jpg" alt="Facebook" />
                  </a>

                    <a href="#" target="_blank" title="Twitter" className="socials-item">
                      <img src ="../../Images/twitter.jpg" alt="Twitter" />
                    </a>
                    

                    <a href="#" target="_blank" title="Instagram" className="socials-item">
                      <img src ="../../Images/instagram.png" alt="InstaGrm" />
                    </a>

                    <a href="#" target="_blank" title="YouTube" className="socials-item">
                      <img src ="../../Images/youttube.jpg" alt="YouTube" />
                    </a>
                  
                  {/* </div> */}
      
                </div>
              {/* Copyright Information */}
          
                <div className="copyright">March 2021 © <a href="https://www.openbrewerydb.org/documentation/01-listbreweries" target="_blank">Brewery Listing </a>
                </div>
           </div>  


    ) 
             
  }
}

export default Footer;


          