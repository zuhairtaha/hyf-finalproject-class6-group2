import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import toRenderProps from 'recompose/toRenderProps'
import withState from 'recompose/withState'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import { getProfileInfo, isLoggedIn } from '../../users/login/OAuth-api-calls'
import { Link } from 'react-router-dom'

require('dotenv').config()

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null))
let URLPrefix =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''
class UserMenu extends Component {
  state = {
    auth: false,
    user: {}
  }

  componentDidMount() {
    //Checks if the user is logged in and authenticated after mounting
    isLoggedIn()
      .then(res => {
        res ? this.setState({ auth: true }) : this.setState({ auth: false })
      })
      .then(() => {
        /*if the user is authenticated fetch information from db and store it in state*/

        if (this.state.auth) {
          getProfileInfo().then(res => this.setState({ user: res.data }))
        }
      })
  }

  render = () => {
    const { auth, user } = this.state
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
                {auth  ? (
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
                    Login
                  </MenuItem>
                )}
                {auth && (
                  <MenuItem
                    component={Link}
                    to='/profile'
                    onClick={handleClose}
                  >
                    Profile
                  </MenuItem>
                )}
                {auth && (
                  <MenuItem
                    component='a'
                    href={URLPrefix + '/auth/github/logout'}
                    onClick={handleClose}
                  >
                    Logout
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

export default UserMenu
