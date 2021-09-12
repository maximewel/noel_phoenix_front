
import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
                    <Typography color="textPrimary" gutterBottom>
                        Base
                    </Typography>
                    { userList }
                </CardContent>
            </Card>
        );
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/users/', {
            method: "GET",
        })
            .then(response => response.json())
            .then(results => {
                this.setState({ users: results })
            });
    }
}