import React from 'react';
import { Component,Fragment} from "react";
import RestaurantCard from '../components/RestaurantCard';
import { ScrollView } from "@cantonjs/react-scroll-view";

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
        function restaurantClick(address){
          window.location = `/shopping/${address}`
        }
        return(
            <Fragment>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h1 style={{color: "white"}}>Select Your restaurant:</h1>
                    <ScrollView style={{ height: '80vh', borderRadius: "20px", width: "30%", paddingTop: 20, paddingBottom: 20, paddingLeft: 30, paddingRight: 30, background: '#e8e6e6'}}>
                        {this.state.restaurants===undefined?null:this.state.restaurants.map((i) => <RestaurantCard name={i.name} address={i.address} img={i.image_url} onClick={restaurantClick}/>)}
                    </ScrollView>
                </div>
            </Fragment>
        );
    }
}
export default selection