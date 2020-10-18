import { Button } from '@material-ui/core';
import React from 'react';
import { Component,Fragment } from "react";

class home extends Component{
    state = {}
    render(){
        return(
            <Fragment>
            <div style={{display:"flex", flexDirection:"row", width: "100%"}}>
                <img src={require("./logo192.png")} style={{position: "absolute", top: 20, left: 40, width: 75, height: 75}}/>
            </div>
            <div style={{display: "flex", flex: 1, marginTop: "10%", justifyContent: "center"}}>
                <div style={{textAlign: "center"}}>
                    <h1 style={{"fontFamily":"Inter","fontStyle":"normal","fontWeight":"normal","fontSize":"28px","lineHeight":"40px","letterSpacing":"-0.043em","color":"white"}}>Find fresh and affordable ingredients from local chains!</h1>
                    <p style={{color: "white"}}>Find your restaurant by inputting the zip code!</p>
                    <div style={{display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center"}}>
                        <div style={{width: "40%"}}>
                            <input type="number" onChange={(event)=>this.setState({zip: event.target.value})}/>
                        </div>
                        <div style={{width: "15%", height: 40, marginTop: "1%"}}>
                            <Button onClick={() => window.location=`/selection/${this.state.zip}`} style={{background: "#024fba", width: "100%", height: "100%"}}>
                                <h3 style={{color: "white"}}>Search</h3>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default home