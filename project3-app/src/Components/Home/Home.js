import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


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
        console.log("city selection:", this.state.citySelected);
        console.log("state selection:", this.state.stateSelected);
        
        return (
            <div className="Home">
                <div>
                    <input type="text" placeholder="City Name" onChange={this.handleCity}/>
                    {/* <Link to='/'> */}
                    <button type='submit' onClick={this.handleSubmit}>Submit</button>
                    {/* </Link> */}
                    <br /><br />
                </div>
                
                <div>
                    <input type="text" placeholder="State Name" onChange={this.handleState}/>
                    {/* <Link to='/'> */}
                    <button type='submit' onClick={this.handleSubmit}>Submit</button>
                    {/* </Link> */}
                    <br /><br />
                </div>

                {/* {parksList} */}

            </div>
        );
    }
}



export default Home;