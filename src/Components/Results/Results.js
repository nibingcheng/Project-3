import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Results.css';

class Results extends Component {    
  constructor(props) {
    super(props)
  
    this.state = {
    brewpubCheckBox: false,
    microCheckBox: false,
    regionalCheckBox: false
    }
  }

  handleBrewpub=(e)=>{ 
    this.setState ({
      brewpubCheckBox: e.target.checked
    })   
  }
  handleMicro=(e)=>{ 
    this.setState ({
      microCheckBox: e.target.checked
    })   
  }
  handleRegional=(e)=>{ 
    this.setState ({
      regionalCheckBox: e.target.checked
    })    
  }

    render() {
        // console.log('BrewpubCheckBox', this.state.brewpubCheckBox);
        // console.log('MicroCheckBox', this.state.microCheckBox);
        // console.log('RegionalCheckBox', this.state.regionalCheckBox);
        let list1 = [];
        let list2 = [];
        let list1Filtered = [];
        let list2Filtered = [];

        if ((this.state.brewpubCheckBox && this.state.microCheckBox && this.state.regionalCheckBox) ||
            (!this.state.brewpubCheckBox && !this.state.microCheckBox && !this.state.regionalCheckBox)) {
          list1 = this.props.city.map(item => {  //list all per city search
              return (
                <div className="city" key={item.id}>
                  <p>
                  <Link to={`/result/${item.id}`}>{item.name}</Link>
                  </p>
                </div>
              );
          });
          list2 = this.props.state.map(item => {  //list all per state search
              return (
                <div className="state" key={item.id}>
                  <p>
                  <Link to={`/result/${item.id}`}>{item.name}</Link> 
                  </p>
                </div>
              );
          });
        }else {  //select those per filter checkbox
          if (this.state.brewpubCheckBox) {
              list1Filtered = list1Filtered.concat(this.props.city.filter(item => 
                item.brewery_type === "brewpub"            
              ));
              list2Filtered = list2Filtered.concat(this.props.state.filter(item => 
                item.brewery_type === "brewpub"            
              ));
          };
          if (this.state.microCheckBox) {
              list1Filtered = list1Filtered.concat(this.props.city.filter(item => 
                item.brewery_type === "micro"            
              ));
              list2Filtered = list2Filtered.concat(this.props.state.filter(item => 
                item.brewery_type === "micro"            
              ));
          };
          if (this.state.regionalCheckBox) {
              list1Filtered = list1Filtered.concat(this.props.city.filter(item => 
                item.brewery_type === "regional"            
              ));
              list2Filtered = list2Filtered.concat(this.props.state.filter(item => 
                item.brewery_type === "regional"            
              ));
          };

          list1 = list1Filtered.map(item => { //list of filtered per city search
            return (
              <div className="city" key={item.id}>
                <p>
                <Link to={`/result/${item.id}`}>{item.name}</Link>
                </p>
              </div>
            );
          });
          list2 = list2Filtered.map(item => {  //list of filtered per state search
            return (
              <div className="state" key={item.id}>
                <p>
                <Link to={`/result/${item.id}`}>{item.name}</Link> 
                </p>
              </div>
            );
          });
        }
    
        return (
            <div className="Results">
                <div>
                    <input type="checkbox" id='brewpub' name="brewpub" onClick={this.handleBrewpub}/>
                    <label>Brewpub</label><br />
                    <input type="checkbox" id='micro' name="micro" onClick={this.handleMicro}/>
                    <label>Micro</label><br />
                    <input type="checkbox" id='regional' name="regional" onClick={this.handleRegional}/>
                    <label>Regional</label>
                </div>
                 <div>
                    <div>{list1}</div>
                    <div>{list2}</div>
                    <img src ='/src/Images/Glassbeer.jpg' alt="Beer Glass" />
                </div>
            </div>
        );
    }
}

export default Results;