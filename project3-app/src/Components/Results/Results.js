import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Results.css';
import Result from "../Result/Result";

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
                <div>
                    <div>{list1}</div>
                    <div>{list2}</div>
                </div>
                <Route path="/result/:id" render={routerProps => 
                <Result {...routerProps} {...this.state}/>
                }/>
            </div>
        );
    }
}


export default Results;