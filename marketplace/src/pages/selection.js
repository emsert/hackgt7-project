import React from 'react';
import { Component,Fragment} from "react";
import RestaurantCard from '../components/RestaurantCard';
class selection extends Component{
    state={};
    componentDidMount(){
        const url = "https://opentable.herokuapp.com/api/restaurants?zip="+this.props.match.params.zip;
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              restaurants: result.restaurants
            });
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
                <p>Selection Page</p>
                {this.state.restaurants===undefined?null:this.state.restaurants.map((i) => <RestaurantCard name={i.name} address={i.address} img={i.image_url} />)}
            </Fragment>
        );
    }
}
export default selection