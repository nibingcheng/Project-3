import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Home.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Home extends Component {

    render() {
        console.log(this.props);
        console.log(window.location)
        return (
            <body>

            {/* <header>
              <Header/>
            </header> */}
            
            <div className="Home">
                <div>
                    <h3>Search by City</h3>
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
                    <h3>Search by State</h3>
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
            
            <div>
                <footer>
                    <Footer/>
                </footer> 
            </div>
               
            </body>
        );
    }

  
}



export default Home;