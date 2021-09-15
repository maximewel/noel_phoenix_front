import React, { Component } from 'react'
import logo from '../../images/phoenix.png';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import { MenuItem } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
      },
});

class Navbar extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Link to="/">
                                <img src={logo} alt={"Logo"} height="50" />
                            </Link>
                        </IconButton>
                        <MenuItem  variant="h6" component={Link} to="/account">
                            Compte
                        </MenuItem >
                        <MenuItem  variant="h6" component={Link} to="/admin">
                            Admin
                        </MenuItem >
                        <div className={classes.grow} />
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar)