import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import UserMenu from './User-menu'
import NavigationDrawer from '../NavigationDrawer'
import Progress from '../Progress'
import { Consumer } from '../../../context'
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  logo: {
    height: '40px'
  },
  onLargeScreenOnly: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
})

function Navbar(props) {
  const { classes } = props
  return (
    <Consumer>
      {({ loading }) => (
        <div className={classes.root}>
          {loading && <Progress />}
          <AppBar position='relative'>
            <Toolbar>
              <NavigationDrawer />

              <Typography variant='h6' color='inherit' className={classes.grow}>
                <Button component={Link} to='/' color='inherit'>
                  <img
                    className={classes.logo}
                    src='/images/logo-white.svg'
                    alt='HackYourFuture Copenhagen'
                  />
                </Button>
              </Typography>

              <Button
                className={classes.onLargeScreenOnly}
                component={Link}
                to='/about/'
                color='inherit'
              >
                About
              </Button>
              <Button
                className={classes.onLargeScreenOnly}
                component={Link}
                to='/contact/'
                color='inherit'
              >
                Contact
              </Button>

              <UserMenu />
            </Toolbar>
          </AppBar>
        </div>
      )}
    </Consumer>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)
