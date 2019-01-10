import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
require('dotenv').config()

let URLPrefix =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''

export default class LoginButton extends Component {
  render() {
    //checks if user is signed in and render a login or logout button accordingly
    return !this.props.isAuthenticated ? (
      <li>
        <Button
          variant='contained'
          color='primary'
          className='loginbutton'
          href={URLPrefix + '/auth/github'}
        >
          login
        </Button>
      </li>
    ) : (
      <li>
        <Button
          variant='contained'
          color='secondary'
          className='loginbutton'
          href={URLPrefix + '/auth/github/logout'}
        >
          logout
        </Button>
      </li>
    )
  }
}
