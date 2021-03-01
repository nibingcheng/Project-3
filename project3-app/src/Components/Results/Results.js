import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Results.css';
// import Result from "../Result/Result";

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
    // e.preventDefault();  
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
        console.log('BrewpubCheckBox', this.state.brewpubCheckBox);
        console.log('MicroCheckBox', this.state.microCheckBox);
        console.log('RegionalCheckBox', this.state.regionalCheckBox);
        let list1 = [];
        let list2 = [];
        if ((this.state.brewpubCheckBox && this.state.microCheckBox && this.state.regionalCheckBox) ||
            (!this.state.brewpubCheckBox && !this.state.microCheckBox && !this.state.regionalCheckBox)) {

          list1 = this.props.city.map(item => {
              return (
                <div className="city" key={item.id}>
                  <p>
                  <Link to={`/result/${item.id}`}>{item.name}</Link>
                  </p>
                </div>
              );
            });
          list2 = this.props.state.map(item => {
            return (
              <div className="state" key={item.id}>
                <p>
                <Link to={`/result/${item.id}`}>{item.name}</Link> 
                </p>
              </div>
            );
          });
        }else {
          if (this.state.brewpubCheckBox) {
            list1 += this.props.city.filter(item => 
              item.brewery_type === "brewpub"            
            );
            list2 += this.props.state.filter(item => 
              item.brewery_type === "brewpub"            
            );
          };
          if (this.state.microCheckBox) {
            list1 += this.props.city.filter(item => 
              item.brewery_type === "micro"            
            );
            list2 += this.props.state.filter(item => 
              item.brewery_type === "micro"            
            );
          };
          if (this.state.brewpubCheckBox) {
            list1 += this.props.city.filter(item => 
              item.brewery_type === "regional"            
            );
            list2 += this.props.state.filter(item => 
              item.brewery_type === "regional"            
            );
          };

        }
        console.log(list1);
        console.log(list2);
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
                </div>
                <div>
                
                </div>
            </div>
        );
    }
}


export default Results;