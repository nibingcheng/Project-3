import React, { Component } from 'react';
import { render } from 'react-dom';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import Nav from '../Nav/Nav';

class Footer extends Component {
  

    render() {
        
        return (
           
            <div className='Footer'>
                <h1> FOOTER PAGE </h1>  
          
            {/* Copyright Information */}
            <div class="copyright">March 2021 © <a href="https://www.openbrewerydb.org/documentation/01-listbreweries" target="_blank">Brewery Listing </a></div>
            
            {/* Ordered Listing  */}
                    <div class="orderedList">
                        <nav id="footer-navigation" class="footer-navigation">
                            <ul id="footerMenu" class="footerMenu">
                                <li id="Support" class="Support"><a href="#">Support</a></li>
                                <li id="Contact" class="Contact"><a href="#">Contact Us</a></li>
                                <li id="Disclaimer" class="Disclaimer"><a href="#">Disclaimer</a></li>
                                <li id="AddMore" class="AddMore"><a href="#">Add more</a></li>
                            </ul>
                        </nav>
                    </div>

            </div>
        ) 

             
    }
}

export default Footer;