import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Component,Fragment } from "react";
class RestaurantCard extends Component{
    render(){
        return(
            <Fragment>
                <Card style={{marginBottom: "1%", width: "40%", height: "15%"}}>
                    <CardActionArea>
                        <div style={{margin: "1%",display:"flex", flexDirection:"row"}}>
                            <img style={{alignSelf: "flex-end", height: "100px"}}src={this.props.img}/>
                            <div style={{display: "flex", flexDirection:"column", marginLeft: "5%"}}>
                                <h3>{this.props.name}</h3>
                                <p>{this.props.address}</p>
                            </div>
                        </div>
                    </CardActionArea>
                </Card>
            </Fragment>
        );
    }
}

export default RestaurantCard