import React, { Component } from 'react'
import FbButton from './FbButton'
import { Typography } from '@material-ui/core'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
        };  
    }

    loadUser = (response) => {
        console.log("User : " + response.name);
        this.setState({      
            user: response.name,
         });
    }

    render() {
        return (
            <div>
                Login with fb !<br/>
                <FbButton loadUser={this.loadUser}/>
                
            <Typography>Bienvenue, {this.state.user}</Typography>

            </div>
        )
    }
}