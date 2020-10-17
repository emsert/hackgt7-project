import React from 'react';
import { Component,Fragment } from "react";

class home extends Component{
    state = {}
    createLocalRestaurants(zip){
      const url = "https://opentable.herokuapp.com/api/restaurants?zip="+zip;
      fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            restaurants: result.restaurants
          });
          console.log(result.restaurants)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    render(){
        return(
            <Fragment>
                <div style={{textAlign: "center"}}>
                    <h1>Find fresh and affordable ingredients from local chains!</h1>
                    <input type="number" onChange={(event)=>this.setState({zip: event.target.value})}/>
                    <input type="submit" value="Find" onClick={() => this.createLocalRestaurants(this.state.zip)}/>
                </div>
                {this.state.restaurants===undefined?console.log("null"):this.state.restaurants.map((i) => <p>{i.name}</p>)}
            </Fragment>
        );
    }
}

export default home