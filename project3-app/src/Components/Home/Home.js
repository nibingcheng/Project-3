import React, { Component } from 'react';
<<<<<<< HEAD
=======
import { Link, Redirect } from 'react-router-dom';
import './Home.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
>>>>>>> 87a43ad0fd7ed3eb53f68a89f69c2b27be2c0e5e

class Home extends Component {

    render() {
        console.log(this.props);
        console.log(window.location)
        return (
            <body>

            <header>
              <Header/>
            </header>
            
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
<<<<<<< HEAD
          </div>
=======
                </div>
            
            <div>
                <footer>
                    <Footer/>
                </footer> 
            </div>
               
            </body>
>>>>>>> 87a43ad0fd7ed3eb53f68a89f69c2b27be2c0e5e
        );
    }

  
}



export default Home;