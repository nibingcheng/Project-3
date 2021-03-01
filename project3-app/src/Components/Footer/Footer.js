import React, { Component } from 'react';
import { render } from 'react-dom';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import Nav from '../Nav/Nav';

class Footer extends Component {
  

    render() {
        
        return (
          
          
          // Title Section of Footer and overall Div
          <div class="footer-bottom">

              <div class="copyrighttitle">All Copyrights are prohibited</div>
            <br/>
            {/* For more information, please see below!<br /> */}
           

            {/* Navigation Section of Footer */}
                <nav id="footer-navigation" class="site-navigation">
                  <ul id="footer-menu" class="nav-menu">
                    <li id="list1" class="menu1"><a href="#">Support</a></li>
                    <li id="list2" class="menu1"><a href="#">Contact Us</a></li>
                    <li id="list3" class="menu1"><a href="#">Disclaimer</a></li>
                    <li id="list4" class="menu1"><a href="#">Add more</a></li>
                  </ul>
                </nav>
            
  
         {/* Social Links Section of Footer */}
                <div id="footer-socials">
                  <div class="socials">
  
                    <a href="#" target="_blank" title="Facebook" class="socials-item"> 
                      <img src ="/src/Images/facebook.jpg" alt="Facebook" />
                  </a>

                    <a href="#" target="_blank" title="Twitter" class="socials-item">
                      <img src ="/src/Images/facebook.jpg" alt="Twitter" />
                    </a>

                    <a href="#" target="_blank" title="Instagram" class="socials-item">
                      <img src ="/src/Images/facebook.jpg" alt="InstaGrm" />
                    </a>

                    <a href="#" target="_blank" title="YouTube" class="socials-item">
                      <img src ="/src/Images/facebook.jpg" alt="YouTube" />
                    </a>
                  
                  </div>
      
                </div>
              {/* Copyright Information */}
          
                <div class="copyright">March 2021 © <a href="https://www.openbrewerydb.org/documentation/01-listbreweries" target="_blank">Brewery Listing </a>
                </div>
           </div>  

    ) 
             
  }
}

export default Footer;


          