import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Result.css';
// import Results from '../Results/Results'

class Result extends Component {
    

    render() {
        console.log(this.props.match.params.id)
        console.log(this.props)
        
        const findBrewery = this.props.city.find(city => city.index ===this.props.match.id)
            console.log(findBrewery)
           
        const findBrewery2 = this.props.state.find(state => state.index ===this.props.match.id)
            console.log(findBrewery)
        

        
        
        return (
            <div className="Result">
                <p>individual brewery goes here</p>
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
           
            {/* <div className="ResultsState">
                <h1>Result test</h1>
                <div className="breweryName"><h2>{findBrewery2.name}</h2>
                </div>
                <br /><br />
                <div className="Address">
                    <h3>Address</h3>
                    <h4>
                        {findBrewery2.street}<br />
                        {findBrewery2.city}, {findBrewery2.state} {findBrewery2.postal_code}<br /><br /><br />
                    </h4>
                </div>
                <div className="phone">
                    <h3>Phone</h3>
                    <h4>
                        {findBrewery2.phone}
                    </h4>
                </div>

            </div> */}
            </body>
        );
    }
}



export default Result;