import React, { Component } from 'react'
require('dotenv').config()

let URLPrefix =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''

export default class LoginButton extends Component {
  render() {
    //checks if user is signed in and render a login or logout button accordingly
    return !this.props.isAuthenticated ? (
      <li>
        <a href={URLPrefix + '/auth/github'} className='loginbutton'>
          login
        </a>
      </li>
    ) : (
      <li>
        <a href={URLPrefix + '/auth/github/logout'} className='loginbutton'>
          logout
        </a>
      </li>
    )
  }
}
