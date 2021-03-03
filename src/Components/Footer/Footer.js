import React, { Component } from 'react';

class Footer extends Component {
  

    render() {
        
        return (
          
          
  
          // Title Section of Footer and overall Div
          <div className="footer-bottom">

              <div className="copyrighttitle">All Copyrights Reserved</div>
            
            {/* For more information, please see below!<br /> */}
           

            {/* Navigation Section of Footer */}
                <nav id="footer-navigation" className="site-navigation">
                  <ul id="footer-menu" className="nav-menu">
                    <li id="list1" ><a className="menu1" href="#">Support</a></li>
                    <li id="list2" ><a className="menu1" href="#">Contact Us</a></li>
                    <li id="list3" ><a className="menu1" href="https://github.com/nibingcheng/Project-3/blob/main/README.md">ReadMe</a></li>
                    <li id="list4" ><a className="menu1" href="https://github.com/nibingcheng/Project-3/blob/main/wireframe.md">WireFrame</a></li>
                  </ul>
                </nav>
            
  
         {/* Social Links Section of Footer */}
                <div id="footer-socials">
                  <div class="socials">
  
                    <a href="#" target="_blank" title="Facebook" className="socials-item"> 
                      <img className="imgF" src="../../Images/facebook.jpg" alt="Facebook" />
                  </a>

                    <a href="#" target="_blank" title="Twitter" className="socials-item">
                      <img className="imgF" src ="../../Images/twitter.jpg" alt="Twitter" />
                    </a>
                    

                    <a href="#" target="_blank" title="Instagram" className="socials-item">
                      <img  className="imgF" src="../../Images/instagram.png" alt="InstaGrm" />
                    </a>

                    <a href="#" target="_blank" title="YouTube" className="socials-item">
                      <img className="imgF" src ="../../Images/youttube.jpg" alt="YouTube" />
                    </a>
                  
                  </div>
      
                </div>
              {/* Copyright Information */}
          
                <div className="copyright">March 2021 © <a href="https://www.openbrewerydb.org/documentation/01-listbreweries" target="_blank">Brewery Listing </a>
                </div>
           </div>  


    ) 
             
  }
}

export default Footer;


          