import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Result.css';

class Result extends Component {
   

    render() {
        console.log(this.props);
        return (
            <div className="Result">
                <p>individual brewery goes here</p>

            </div>
        );
    }
}



export default Result;