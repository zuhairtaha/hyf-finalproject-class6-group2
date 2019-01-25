import React, { Component } from 'react'
import UserForm from './User-form'
import axios from 'axios'
import { Consumer } from '../../../context'
import { withStyles } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/es/Button/Button'
import Container from '../../layouts/container'
import TextField from '@material-ui/core/TextField'
import { Link, withRouter } from 'react-router-dom'

// export default (props) => {
//     // Do the fetching, and render the form only when the data is here
//     return (
//         <UserForm {...props} isEditing={true} />
//     )
// }
const styles = theme => ({
  textField: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  submitForm: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
})

class EditUser extends Component {
  state = {
    id: null,
    name: '',
    email: '',
    avatar: '',
    birth_date: '',
    role_id: '',
    status: '',
    github_username: '',
    linkedin: '',
    type: '',
    active: null,
    created_at: '',
    updated_at: ''
  }
  updateField = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  componentDidMount() {
    const userId = this.props.match.params.id
    axios
      .get(`/api/users/${userId}`)
      .then(res => this.setState(res.data))
      .catch(console.error)

    document.title = 'Edit User'
  }

  submitForm = (dispatch, e) => {
    e.preventDefault()
    const {
      id,
      name,
      email,
      type,
     
    } = this.state
    const newUser = {
      name,
      email,
      type
    }
    axios
      .put(`/api/users/${id}`, newUser)
      .then(res => {
        if (res.data.updated) {
          dispatch({ type: 'UPDATE_USER', payload: newUser })
          this.props.history.push('/users')
        }
      })
      .catch(console.error)
  }
  render() {
    const {
      name,
      email,
      type
    } = this.state

    return (
      <Consumer>
        {({ dispatch }) => (
          <Container>
            <form onSubmit={this.submitForm.bind(this, dispatch)}>
              {/*Name*/}
              <TextField
                label='Name'
                name='name'
                value={name}
                onChange={this.updateField}
                margin='normal'
                style={{ marginRight: '1rem' }}
              />
              <br />
              {/*Email*/}
              <TextField
                label='Email'
                name='email'
                value={email}
                onChange={this.updateField}
                margin='normal'
              />
              <br />
             
              <br />
              {/*Type*/}
              <TextField
                label='Type'
                name='type'
                value={type}
                onChange={this.updateField}
                margin='normal'
              />
              <br />
              <Button variant='contained' color='primary' type='submit'>
                <SaveIcon /> Update User
              </Button>
              <Button
                variant='contained'
                component={Link}
                to='/users'
                style={{ marginLeft: '1rem' }}
              >
                cancel
              </Button>
            </form>
          </Container>
        )}
      </Consumer>
    )
  }
}

export default withStyles(styles)(withRouter(EditUser))
