import { AppBar } from '@material-ui/core'
import React, { Component } from 'react'
import { Toolbar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import logo from '../../images/phoenix.jpg';
import { withStyles, makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
}));

class Navbar extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={styles.menuButton} >
                        <img src={logo} alt="Logo" height="50" />
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Navbar);