import React, { Component } from 'react'
import FbButton from './FbButton'

export default class Login extends Component {
    render() {
        return (
            <div>
                Login with fb !<br/>
                <FbButton />
            </div>
        )
    }
}