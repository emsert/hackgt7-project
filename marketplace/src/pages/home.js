import { Button } from '@material-ui/core';
import React from 'react';
import { Component,Fragment } from "react";

class home extends Component{
    state = {}
    render(){
        return(
            <div style={{display: "flex", flex: 1, marginTop: "17%", justifyContent: "center"}}>
                <div style={{textAlign: "center"}}>
                    <h1 style={{color: "white"}}>Find fresh and affordable ingredients from local chains!</h1>
                    <p style={{color: "white"}}>Find your restaurant by inputting the zip code!</p>
                    <div style={{display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center"}}>
                        <div style={{width: "40%"}}>
                            <input type="number" onChange={(event)=>this.setState({zip: event.target.value})}/>
                        </div>
                        <div style={{width: "10%", height: 40, marginTop: "1%"}}>
                            <Button onClick={() => window.location=`/selection/${this.state.zip}`} style={{background: "#024fba", width: "100%", height: "100%"}}>
                                <h3 style={{color: "white"}}>Search</h3>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default home