import React, { Component } from 'react'
import FbButton from './FbButton'
import { Typography } from '@material-ui/core'
import apiCaller from '../../api/ApiCaller';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
        };  
    }

    loadUser = (response) => {
        //update user visualisation
        this.setState({      
            user: response.name,
        });
        
        let gifts = apiCaller.request('get', '/api/gifts/');
        console.log(gifts);
        //load into API
        let resp = apiCaller.loginFromFacebook(response.accessToken);
        console.log(resp);
        let gifts = apiCaller.request('get', '/api/gifts/');
        console.log(gifts);
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