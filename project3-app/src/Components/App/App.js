import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
// import Home from './Home'
// import Results from './Results'
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      city: [],
      state:[]
    }
}
citySearch=()=>{
  axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`, {
  headers: {
      Accept: 'application/json'
  }
})
  .then(response =>{
    this.setState({
      city:response.data,
      
    })
  })
}

stateSearch=()=>{
  axios.get(`https://api.openbrewerydb.org/breweries?by_state=${state}`, {
  headers: {
      Accept: 'application/json'
  }
})
  .then(response =>{
    this.setState({
      state:response.data
    })
  })
}


  render() {
    console.log(this.state)
    return (

      <div>
        <header></header>
        <nav><Link to='/'>
          <h3> Test</h3>
          </Link></nav>
          <Route exact path="/" render={routerProps => <Home citySearch={this.citySearch} stateSearch={this.stateSearch} {...routerProps} {...this.state}
          />
          }/>

          <Route path="/results" render={routerProps => <Results {...routerProps} {...this.state}/>
          }/>

      </div>
  
    );
  }
}

export default App;
