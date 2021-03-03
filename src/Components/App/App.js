import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Home from '../Home/Home';
import Results from '../Results/Results';
import axios from "axios";
import Header from "../Header/Header";
import Result from '../Result/Result';
import Footer from '../Footer/Footer';
// import { ReactDOM } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      city: [],
      state:[]
    }
}
componentDidMount() {window.scrollTo(0, 0)};
citySearch=(city)=>{
  axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=50`, {
  headers: {
      Accept: 'application/json'
  }
})
  .then(response =>{
    this.setState({
      city:response.data, 
      state: []   
    });
  })
  .catch(err => {
    console.error(err)
  })
}

stateSearch=(state)=>{
  axios.get(`https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=50`, {
  headers: {
      Accept: 'application/json'
  }
})
  .then(response =>{
    this.setState({
      state:response.data,
      city: []
    });
  })
  .catch(err => {
    console.error(err)
  })


}


  render() {
    console.log(this.state)
    return (

      
      <div>
        <header>
          <Header/>
        </header> 
        <div className="apptitle">      
        <nav>
          <h3><Link to='/'> Home</Link></h3>
          </nav>
          </div> 
        <Switch>  
          <Route exact path="/" render={routerProps => 
          <Home citySearch={this.citySearch} stateSearch={this.stateSearch} {...routerProps} {...this.state}
          />
          }/>
          
          <Route path="/results" render={routerProps => <Results {...routerProps} {...this.state}/>
          }/>

          <Route path="/result/:id" render={routerProps => 
          <Result {...routerProps} {...this.state}/>
          }/>
          
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
  
    );
  }
}

export default App;
