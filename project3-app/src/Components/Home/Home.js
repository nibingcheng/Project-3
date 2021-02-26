import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Results from '../Results/Results';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          citySelected: [],
          stateSelected: []
        }
      }

    handleCity=(e)=>{ 
        e.preventDefault();
        this.setState ({
            citySelected: e.target.value
        })
    }
    handleState=(e)=>{ 
        e.preventDefault();
        this.setState ({
            stateSelected: e.target.value
        })
    }
    handleCitySubmit=(e)=>{ 
        e.preventDefault();    
        this.props.citySearch(this.state.citySelected);
    }
    handleStateSubmit=(e)=>{ 
        e.preventDefault();    
        this.props.stateSearch(this.state.stateSelected);
    }

    render() {
        console.log(this.props);

        return (
            <div className="Home">
                <div>
                    <input type="text" placeholder="City Name" onChange={this.handleCity}/>
                    
                    <button type='submit' onClick={this.handleCitySubmit}>
                    <Link to='/results'>Submit</Link>
                    </button>
                    <br /><br />
                </div>
                
                <div>
                    <input type="text" placeholder="State Name" onChange={this.handleState}/>
                    
                    <button type='submit' onClick={this.handleStateSubmit}>
                        <Link to='/results'>Submit</Link>
                    </button>
                    
                </div>
            </div>
        );
    }
}



export default Home;