import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Results.css';
// import Result from "../Result/Result";

class Results extends Component {
    
    render() {
        
        let list1 = this.props.city.map(item => {
            return (
              <div className="city" key={item.id}>
                <p>
                <Link to={"/result/"+item.id}>{item.name}</Link>
                </p>
              </div>
            );
          });
          let list2 = this.props.state.map(item => {
            return (
              <div className="state" key={item.id}>
                <p>
                <Link to={"/result/"+item.id}>{item.name}</Link>
                </p>
              </div>
            );
          });

        return (
            <div className="Results">
                <form>
                <div>
                  <input type="checkbox" id='brewpub' name="brewpub" />
                  <label for="brewpub">Brewpub</label><br />
                  <input type="checkbox" id='micro' name="micro" />
                  <label for="micro">Micro</label><br />
                  <input type="checkbox" id='regional' name="regional" />
                  <label for="regional">Regional</label>
                </div>
                <div>
                  <button type="submit" value='submit' >Filter</button>
                </div>
                </form>

                <div>
                    <div>{list1}</div>
                    <div>{list2}</div>
                </div>
     
            </div>
        );
    }
}


export default Results;