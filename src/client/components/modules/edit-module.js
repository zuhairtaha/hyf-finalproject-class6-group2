import React, { Component } from 'react'
//import UserForm from './User-form'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import { NavLink } from 'react-router-dom'

// export default (props) => {
//     // Do the fetching, and render the form only when the data is here
//     return (
//         <UserForm {...props} isEditing={true} />
//     )
// }

class Editmodule extends Component {
  state = {
    message: 'Hang in there...',
    moduleData: null
  }
  updateField = e => {
    const { name, value } = e.target
    this.setState({
      moduleData: {
        ...this.state.moduleData,
        [name]: value
      }
    })
  }
  componentDidMount() {
    document.title = this.props.isEditing ? 'Edit User' : 'Add User'
    const url = '/api/modules'
    const id = this.props.match.params.id
    // TODO handle failure (404)
    console.log(id)

    axios
      .get(`${url}/${id}`)
      .then(res =>
        this.setState({
          moduleData: res.data
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
    const url = `/api/modules/${this.props.match.params.id}`
    const method = 'PUT'
    fetch(url, {
      method,
      body: JSON.stringify(this.state.moduleData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.text())
      .then(response => {
        console.log('editing module Success:', response)
        // TODO redirect to the Users list page (/modules)
        console.log('updated....')
        this.props.history.goBack()
      })
      .catch(error => console.error('Error:', error))
  }

  render() {
    const id = this.props.match.params.id
    console.log(id)

    const moduleData = this.state.moduleData
    console.log(moduleData)
    //

    return this.state.moduleData ? (
      <div>
        <div className='container'>
          <h3>{'Edit Module'}</h3>
          <div className='card shadow-sm p-3 mb-3'>
            <form onSubmit={this.submitForm}>
              <div className='row'>
                <div className='col-md-6 mb-2'>
                  {/*title*/}
                  <TextField
                    label='Title'
                    name='title'
                    value={moduleData.title}
                    onChange={this.updateField}
                    margin='normal'
                  />
                  <br />

                  {/*description*/}
                  <TextField
                    label='Description'
                    multiline
                    rowsMax='4'
                    name='description'
                    value={moduleData.description}
                    onChange={this.updateField}
                    margin='normal'
                    // fullWidth
                  />
                  <br />

                  <br />
                  {/*length*/}
                  <TextField
                    label='length'
                    name='length'
                    value={moduleData.length}
                    onChange={this.updateField}
                    margin='normal'
                  />
                  <br />
                  {/*created_at*/}

                  <TextField
                    label='Created_at'
                    name='created_at'
                    value={moduleData.created_at}
                    onChange={this.updateField}
                    margin='normal'
                  />
                  <br />
                  {/*updated_at*/}

                  <TextField
                    type='date'
                    label='Updated_at'
                    name='updated_at'
                    value={moduleData.updated_at}
                    onChange={this.updateField}
                    margin='normal'
                  />
                  <br />
                </div>

                <button type='submit' className='btn btn-primary'>
                  <i className='fa fa-floppy-o' aria-hidden='true' />{' '}
                  {'Update Module'}
                </button>
                <NavLink className='btn btn-light ml-3' to='/modules'>
                  <i className='fa fa-caret-left' /> back
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    ) : (
        <div />
    )
  }
}

export default Editmodule
