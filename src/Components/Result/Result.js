import React, { Component } from 'react';
import './Result.css';



class Result extends Component {
    

    render() {
        // console.log(this.props.match.params.id)
        // console.log(this.props.city)
        // console.log(this.props.state.length)
        // console.log(this.props.city.length)

    //Variable for brewery information
        let findBrewery
    // if statement to choose whether to look at result coming from a city or state search
        if(this.props.state.length==0){
        findBrewery = this.props.city.find(item => item.id ==this.props.match.params.id)          
        }else{
        findBrewery = this.props.state.find(item => item.id ==this.props.match.params.id)   
        }
        // console.log(findBrewery)
        
        return (
            
            <body>
            <div className="Results">
                <h1>Brewery Details For:</h1>
                <div className="breweryName"><h2>{findBrewery.name}</h2></div>
                <br />

                <div className="breweryType"><h2>Brewery Type</h2>
                <h4>{findBrewery.brewery_type}</h4>
                </div>
                <br />
                <div className="Address">
                    <h2>Address</h2>
                    <h4>
                        {findBrewery.street}<br />
                        {findBrewery.city}, {findBrewery.state} {findBrewery.postal_code}<br /><br /><br />
                    </h4>
                </div>
                <div className="phone">
                    <h2>Phone</h2>
                    <h4>
                        {findBrewery.phone}
                    </h4>
                </div>
                {/* Getting Google map via API */}
           <div className="map">
            <iframe 
                width="400"
                height="400"
                loading="lazy"
                // src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC-ACG-lCKdbokZIL8aQczfwruwzB3lVDo&q=${findBrewery.name},${findBrewery.city}+${findBrewery.state}`}
                
            ></iframe>
            </div>

            </div>
           
            </body>
        );
    }
}



export default Result;