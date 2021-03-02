import React, { Component } from 'react';
import './Home.css';


class Home extends Component {

    render() {
        console.log(this.props);
        console.log(window.location)
        return (
            <body>

                      
            <div className="Home">
                <div className="boxes">
                <div>
                <h3 className="apptitle2"> Search by City</h3>
            
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    this.props.citySearch(event.target.city.value)
                    this.props.history.push("/results")
                }}>
                    <input type="text" id="City Name" name="city"/>
                    
                    <input type='submit' value="submit"/>
                    
                    <br /><br />
                    </form><br />
                </div>
                
                <div>
    
                    <h3 className="apptitle2"> Search by State</h3>
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    this.props.stateSearch(event.target.state.value)
                    this.props.history.push("/results")
                    
                }}>
                    <input type="text" id="State Name" name="state"/>
                    
                    <input type='submit' value="submit"/>
                    <br /><br />
                    </form><br />

                    
                </div>
                </div>
                <div className="homeImg" ><img className="img1" src ="../../Images/Beer.jpg" alt="Beer"/></div>
                </div>
            
            
               
            </body>
        );
    }

  
}



export default Home;