import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Result.css';
// import Results from '../Results/Results'

class Result extends Component {
    

    render() {
        console.log(this.props.match.params.id)
        console.log(this.props.city)
        console.log(this.props.state.length)
        console.log(this.props.city.length)

       
        let findBrewery
        if(this.props.state.length==0){
        findBrewery = this.props.city.find(item => item.id ==this.props.match.params.id)          
        }else{
        findBrewery = this.props.state.find(item => item.id ==this.props.match.params.id)
            
        }
        console.log(findBrewery)
        
        
        return (
            <body>
            <div className="Results">
                <h1>Result test</h1>
                <div className="breweryName"><h2>{findBrewery.name}</h2></div>
                <br /><br />
                <div className="Address">
                    <h3>Address</h3>
                    <h4>
                        {findBrewery.street}<br />
                        {findBrewery.city}, {findBrewery.state} {findBrewery.postal_code}<br /><br /><br />
                    </h4>
                </div>
                <div className="phone">
                    <h3>Phone</h3>
                    <h4>
                        {findBrewery.phone}
                    </h4>
                </div>

            </div>
           
            
            
            </body>
        );
    }
}



export default Result;