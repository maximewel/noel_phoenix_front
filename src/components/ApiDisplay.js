
import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ApiCaller from '../api/ApiCaller';
export default class ApiDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    render() {
        const userList = [];
        for(let user of this.state.users){
            const userText = (
                <Typography key={user.username} color="textPrimary" gutterBottom>
                    user: {user.username}; email: {user.email}
                </Typography>
            );
            userList.push(userText)
        }     
        return (
            <Card>
                <CardContent>
                    <Typography>
                        env: {process.env.NODE_ENV}
                    </Typography>
                    <Typography color="textPrimary" gutterBottom>
                        Base
                    </Typography>
                    { userList }
                </CardContent>
            </Card>
        );
    }

    async componentDidMount() {
        let response = await ApiCaller.request('get', '/api/users/');
        console.log("Got response: " + response);
        if (response){
            this.setState({ users: response });
        }
    }
}