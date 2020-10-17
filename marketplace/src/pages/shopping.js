import React from 'react';
import { Button } from '@material-ui/core';
import { Component,Fragment} from "react";
import FoodCard from '../components/FoodCard';
import { ScrollView } from "@cantonjs/react-scroll-view";

class shopping extends Component{
    state={
        numItems:0,
        items: ["tomatoes", "oranges", "carrots"],
    }
    componentDidMount(){

    }
    render(){
        return(
            <Fragment>
                <div style={{display:"flex",flex:1, width: "100%", flexDirection: "row", justifyContent: "flex-end"}}>
                    <img style={{marginTop: "1%", marginRight: "2%", width: 50, height: 50}} src={require("./shopping_cart.png")}/>
                    <p style={{textAlign: "center", position: "absolute", color: "white", width: 20, marginRight: 15, top: 25, background:"#f05151", borderRadius:10}}>{this.state.numItems}</p>
                </div>
                <div style={{marginTop: "10%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h1 style={{color: "white"}}>Search your ingredients</h1>
                    <div style={{marginBottom: "2%", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <input type="value" style={{height:35, width: 500}}/>
                        <Button style={{background: "#024fba", width: "20%", height: 40}}>
                            <h3 style={{color: "white"}}>Search</h3>
                        </Button>
                    </div>
                    <ScrollView style={{ height: '30vh', borderRadius: "20px", width: "30%", paddingTop: 20, paddingBottom: 20, paddingLeft: 30, paddingRight: 30, background: '#e8e6e6'}}>
                        {!this.state.items?null:this.state.items.map((i) => <FoodCard name={i}/>)}
                    </ScrollView>
                </div>
            </Fragment>
        );
    }
}

export default shopping