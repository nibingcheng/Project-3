import React, { Component } from 'react';
import { render } from 'react-dom';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import Nav from '../Nav/Nav';

class Header extends Component {
  

    render() {
        
        return (
           
// Header Section of Footer and overall Div
<div class="header-top">

<div class="headertitle">Listing of Breweries in the USA" </div>
<br/>
{/* For more information, please see below!<br /> */}


{/* Navigation Section of Footer */}
  <nav id="header-navigation" class="site-navigation">
    <ul id="footer-menu" class="nav-menu">
      <li id="list1" class="menu1"><a href="#">Home</a></li>
      <li id="list2" class="menu1"><a href="https://github.com/nibingcheng/Project-3/blob/main/project3-app/wireframe.md">Wireframe</a></li>
      <li id="list3" class="menu1"><a href="https://github.com/nibingcheng/Project-3/blob/main/project3-app/README.md">ReadME </a></li>
      <li id="list4" class="menu1"><a href="#">Other</a></li>
    </ul>
  </nav>

  </div>          


        )

             
    }
}

export default Header;