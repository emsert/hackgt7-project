import React from 'react';
import { Button } from '@material-ui/core';
import { Component,Fragment} from "react";
import FoodCard from '../components/FoodCard';
import { ScrollView } from "@cantonjs/react-scroll-view";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import RestaurantCard from '../components/RestaurantCard';

class shopping extends Component{
    state={
        numItems:0,
        query: "",
        items: [],
        filteredItems:[],
    }
    componentDidMount(){
        var json = require('./grocery_data.json');
        var newItems = [];
        for(var i = 0; i < json.length; i++){
            const element = json[i];
            const markets = require('./farmers_market_data.json');
            for(var j = 0; j < markets.length; j++){
                var market = markets[j]
                var item = { 
                    name: element.itemDescription,
                    address: market.address,
                    market: market.name,
                    distance: market.distance,
                    price:  ((Math.random()*.6)+.3).toFixed(2)
                };
                newItems.push(item)
        }
        }
        this.setState({items: newItems});
        this.setState({filteredItems: newItems});
    }
    sortList = (event) =>{
        var newItems = this.state.filteredItems;
        var value = event.value;
        if(value === "Price: $-$$"){
            newItems = newItems.sort((a, b) => {return a.price - b.price})
        }
        else if(value === "Price: $$-$"){
            console.log("works")
            newItems = newItems.sort((a, b) => {return b.price - a.price})
        }
        else{
            newItems = newItems.sort((a, b) => {return a.distance - b.distance})
        }
        this.setState({filteredItems:newItems});
    }
    render(){
        return(
            <Fragment>
                <div style={{display:"flex",flex:1, width: "100%", flexDirection: "row", justifyContent: "flex-end"}}>
                    <div style={{display:"flex", flexDirection:"row", width: "100%"}}>
                        <img src={require("./logo192.png")} style={{position: "absolute", top: 20, left: 40, width: 75, height: 75}}/>
                    </div>
                    <img style={{marginTop: "1%", marginRight: "2%", width: 50, height: 50}} src={require("./shopping_cart.png")}/>
                    <p style={{textAlign: "center", position: "absolute", color: "white", width: 20, marginRight: 15, top: 25, background:"#f05151", borderRadius:10}}>{this.state.numItems}</p>
                </div>
                <div style={{marginTop: "0%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h1 style={{color: "white"}}>Search your ingredients</h1>
                    <div style={{marginBottom: "2%", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <input type="value" style={{height:35, width: 500}} onChange={(event)=>this.setState({query: event.target.value})}/>
                        <Button style={{background: "#024fba", width: "40%", height: 40}} onClick={() => this.setState({filteredItems: this.state.items.filter((i)=> i.name.includes(this.state.query))})}>
                            <h3 style={{color: "white"}}>Search</h3>
                        </Button>
                            <Dropdown options={["Price: $-$$","Price: $$-$","Distance"]}  value={"Price: $-$$"} onChange={(event)=>this.sortList(event)} placeholder="Select an option" style={{"position":"absolute","width":"320px","height":"40px","left":"650px","top":"780px"}}/>
                    </div>
                    <ScrollView style={{ height: '80vh', borderRadius: "20px", width: "30%", paddingTop: 20, paddingBottom: 20, paddingLeft: 30, paddingRight: 30, background: '#e8e6e6'}}>
                        {!this.state.filteredItems?null:this.state.filteredItems.map((i) => <FoodCard name={i.name} onClick={()=>this.setState({numItems: this.state.numItems+1})}address={i.address} price={"$"+i.price+"/lb"} distance={i.distance+" mi"} market={i.market}/>)}
                    </ScrollView>
                </div>
            </Fragment>
        );
    }
}

export default shopping