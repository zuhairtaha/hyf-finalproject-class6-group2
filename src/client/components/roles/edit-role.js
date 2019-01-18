import React, { Component } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import { NavLink } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'

class Editrole extends Component {
  state = {
    message: 'Hang in there...',
    roleData: null
  }
  updateField = e => {
    const { name, value } = e.target
    this.setState({
      roleData: {
        ...this.state.roleData,
        [name]: value
      }
    })
  }
  componentDidMount() {
    document.title ='Edit role'
    const url = '/api/roles'
    const id = this.props.match.params.id
    // TODO handle failure (404)
    console.log(id)

    axios
      .get(`${url}/${id}`)
      .then(res =>
        this.setState({
          roleData: res.data
        })
      )
      .catch(error =>
        this.setState({
          message: error
        })
      )
  }

  submitForm = e => {
    e.preventDefault()
    const url = `/api/roles/${this.props.match.params.id}`
    const method = 'PUT'
    fetch(url, {
      method,
      body: JSON.stringify(this.state.roleData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.text())
      .then(response => {
        console.log('editing role Success:', response)
        // TODO redirect to the roles list page (/roles)
        console.log('updated....')
        this.props.history.goBack()
      })
      .catch(error => console.error('Error:', error))
  }

  render() {
    const id = this.props.match.params.id
    console.log(id)

    const roleData = this.state.roleData
    console.log(roleData)
    //

    return this.state.roleData ? (
      <Paper className='role'>
      <div className='container'>
          <h3>{'Edit role'}</h3>
          <div className='card shadow-sm p-3 mb-3'>
            <form onSubmit={this.submitForm}>
              <div className='row'>
                <div className='col-md-6 mb-2'>
                  {/*title*/}
                  <TextField
                    label='Title'
                    name='title'
                    value={roleData.title}
                    onChange={this.updateField}
                    margin='normal'
                  />
                  <br />
                 </div>

                <button type='submit' className='btn btn-primary'>
                  <i className='fa fa-floppy-o' aria-hidden='true' />{' '}
                  {'Update role'}
                </button>
                <NavLink className='btn btn-light ml-3' to='/roles'>
                  <i className='fa fa-caret-left' /> back
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </Paper>
    ) : (
        <div />
    )
  }
}

export default Editrole
