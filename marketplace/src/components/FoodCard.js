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
                                    <h3 styles={{"fontFamily":"Inter","fontStyle":"normal","fontWeight":"normal","fontSize":"14px","lineHeight":"24px","display":"flex","alignItems":"center","letterSpacing":"-0.006em","color":"#000000"}}>{this.props.name}</h3>
                                    <p style={{margin: 0}}>{this.props.price}</p>
                                    <p style={{margin: 0}}>{this.props.market}</p>
                                    <p style={{margin: 0}}>{this.props.address}</p>
                                    <p style={{margin: 0}}>{this.props.distance}</p>
                                    <div style={{marginTop: "3%", marginBottom: "3%"}}>
                                        <Button style={{background: "#f05151", width: "40%", height: 30}}>
                                        <p style={{color: "white", fontSize: 10, fontWeight: "bold"}} onClick={this.props.onClick}>Add to Cart</p>
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