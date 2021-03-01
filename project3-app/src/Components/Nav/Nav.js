import React, { Component } from 'react';
import { render } from 'react-dom';
import {Switch, Route, Link, Redirect} from 'react-router-dom';


class Nav extends Component {
  

    render() {
        
        return (
           
            <div className='Nav'>
                <h4>help</h4>  
                <h4>safety</h4>  
                <h4>privacy</h4>  
                <h4>feedback</h4>  
                <h4>terms</h4>  
                <h4>POST</h4>  
            </div>
        )

    }
}

export default Nav;