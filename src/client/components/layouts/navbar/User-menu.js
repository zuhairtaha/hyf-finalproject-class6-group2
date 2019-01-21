import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import toRenderProps from 'recompose/toRenderProps'
import withState from 'recompose/withState'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import { getProfileInfo, isLoggedIn } from '../../users/login/OAuth-api-calls'
import { NavLink } from 'react-router-dom'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LogoutIcon from '@material-ui/icons/OpenInBrowser'
import ProfileIcon from '@material-ui/icons/PersonOutline'
import { withStyles } from '@material-ui/core/styles'
import GithubIcon from 'mdi-material-ui/GithubCircle'

require('dotenv').config()

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null))
let URLPrefix =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
})

class UserMenu extends Component {
  state = {
    auth: false,
    user: {}
  }

  componentDidMount() {
    isLoggedIn()
      .then(res => this.setState({ auth: !!res }))
      .then(() => {
        if (this.state.auth)
          getProfileInfo().then(res => this.setState({ user: res.data }))
      })
  }

  render = () => {
    const { auth, user } = this.state
    const { classes } = this.props

    return (
      <WithState>
        {({ anchorEl, updateAnchorEl }) => {
          const open = Boolean(anchorEl)
          const handleClose = () => {
            updateAnchorEl(null)
          }
          return (
            <React.Fragment>
              <IconButton
                color='inherit'
                aria-owns={open ? 'render-props-menu' : undefined}
                aria-haspopup='true'
                onClick={event => {
                  updateAnchorEl(event.currentTarget)
                }}
              >
                {auth ? (
                  <img
                    alt={user.name}
                    style={{ height: '40px', borderRadius: '50%' }}
                    src={user.avatar}
                  />
                ) : (
                  <AccountCircle />
                )}
              </IconButton>

              <Menu
                id='render-props-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {!auth && (
                  <MenuItem
                    component='a'
                    href={URLPrefix + '/auth/github'}
                    onClick={handleClose}
                  >
                    <GithubIcon /> Sign in with GitHub
                  </MenuItem>
                )}
                {auth && (
                  <MenuItem
                    component={NavLink}
                    to={`/users/${user.id}`}
                    onClick={handleClose}
                  >
                    <ListItemIcon className={classes.icon}>
                      <ProfileIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.primary }}
                      inset
                      primary='Profile'
                    />
                  </MenuItem>
                )}
                {auth && (
                  <MenuItem
                    component='a'
                    href={URLPrefix + '/auth/github/logout'}
                    onClick={handleClose}
                  >
                    <ListItemIcon className={classes.icon}>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.primary }}
                      inset
                      primary='Logout'
                    />
                  </MenuItem>
                )}
              </Menu>
            </React.Fragment>
          )
        }}
      </WithState>
    )
  }
}

export default withStyles(styles)(UserMenu)
