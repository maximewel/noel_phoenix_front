import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class FbButton extends Component {
    render() {
        return (
            <div>
                <FacebookLogin
                appId="182977177249662"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.responseFacebook} />
            </div>
        )
    }

    responseFacebook(response){
        console.log("Received fb response: ");
        console.log(response);
        if(response){
            this.props.loadUser(response);
        }
    }
}