import React from 'react';
import { Component,Fragment,Redirect } from "react";

class home extends Component{
    state = {}
    render(){
        return(
            <Fragment>
                <div style={{textAlign: "center"}}>
                    <h1>Find fresh and affordable ingredients from local chains!</h1>
                    <p>Find you restaurant by inputting the zip code!</p>
                    <input type="number" onChange={(event)=>this.setState({zip: event.target.value})}/>
                    <input type="submit" value="Find" onClick={() => window.location=`/selection/${this.state.zip}`}/>
                </div>
            </Fragment>
        );
    }
}

export default home