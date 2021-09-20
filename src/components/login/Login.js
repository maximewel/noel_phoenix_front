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

    loadUser = async (response) => {
        //update user visualisation
        this.setState({      
            user: response.name,
        });
        
        let gifts = await apiCaller.request('get', '/api/gifts/');
        console.log(gifts);
        //load into API
        let resp = await apiCaller.loginFromFacebook(response.accessToken);
        console.log(resp);
        gifts = await apiCaller.request('get', '/api/gifts/');
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