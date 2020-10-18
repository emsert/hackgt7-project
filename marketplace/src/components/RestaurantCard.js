import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Component,Fragment } from "react";
class RestaurantCard extends Component{
    render(){
        return(
            <Fragment>
                <Card style={{marginBottom: "2%", width: "100%", height: "15%"}}>
                    <CardActionArea onClick={()=>this.props.onClick(this.props.address)}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <div style={{margin: "1%",display:"flex", flexDirection:"row"}}>
                                <img style={{alignSelf: "flex-end", height: "100px"}}src={this.props.img}/>
                            </div>
                            <div style={{width: "100%", display: "flex", flexDirection:"column", textAlign:"center", alignContent:"center"}}>
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