import React, { Component } from 'react';
import { render } from 'react-dom';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import Nav from '../Nav/Nav';

class Header extends Component {
  

    render() {
        
        return (
           

                
            <div className='Header'>
                <h1>Brewery Listing </h1>  
                <br/>
                <Nav/>
            </div>
            


        )

             
    }
}

export default Header;