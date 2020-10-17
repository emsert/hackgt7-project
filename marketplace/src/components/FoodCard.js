import React from 'react';
import { Button } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Component,Fragment } from "react";
class FoodCard extends Component{
    render(){
        return(
            <Fragment>
                <Card style={{marginBottom: "2%", width: "100%", height: "15%"}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <div style={{margin: "1%",display:"flex", flexDirection:"row"}}>
                                <img style={{alignSelf: "flex-end", height: "100px"}}src={this.props.img}/>
                            </div>
                            <div style={{width: "100%", display: "flex", flexDirection:"column", textAlign:"center", alignContent:"center"}}>
                                    <h3>{this.props.name}</h3>
                                    <p>{this.props.price}</p>
                                    <p>{this.props.restaurant}</p>
                                    <p>{this.props.address}</p>
                                    <p>{this.props.distance}</p>
                                    <div style={{marginBottom: "3%"}}>
                                        <Button style={{background: "#f05151", width: "40%", height: 30}}>
                                        <p style={{color: "white", fontSize: 10, fontWeight: "bold"}}>Add to Cart</p>
                                        </Button>
                                    </div>
                            </div>
                        </div>
                </Card>
            </Fragment>
        );
    }
}

export default FoodCard