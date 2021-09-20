import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class FbButton extends Component {

    render() {
        return (
            <div>
                <FacebookLogin
                appId="182977177249662"
                fields="name,email"
                callback={this.responseFacebook} />
            </div>
        )
    }

    responseFacebook = (response) => {
        if(response){
            this.props.loadUser(response);
        }
    }
}