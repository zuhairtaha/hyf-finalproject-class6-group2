import React, { Component } from 'react'
import NavLink from 'react-router-dom/es/NavLink'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { Consumer } from '../../context'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'

class AddRole extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  updateField = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  componentWillMount() {
    document.title = 'Add Role'
  }

  submitForm = (dispatch, e) => {
    e.preventDefault()
    const newRole = { name: this.state.name }

    axios
      .post(`/api/roles`, newRole)
      .then(res => {
        if (res.data.added) dispatch({ type: 'ADD_ROLE', payload: newRole })
      })
      .catch(console.error)
  }

  render() {
    const { name } = this.state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <Paper className='role'>
              <div className='card mb-3'>
                <div className='card-header'>
                  <h3>{'Edit role'}</h3>
                  <div className='card-body'>
                    <div className='card shadow-sm p-3 mb-3'>
                      <form onSubmit={this.submitForm.bind(this, dispatch)}>
                        <div className='row'>
                          <div className='col-md-6 mb-2'>
                            {/*name*/}
                            <TextField
                              label='Name'
                              name='name'
                              defaultValue={name}
                              onChange={this.updateField}
                              margin='normal'
                            />
                            <br />
                          </div>
                          <button type='submit' className='btn btn-primary'>
                            <i className='fa fa-floppy-o' aria-hidden='true' />{' '}
                            {'Add role'}
                          </button>
                          <NavLink className='btn btn-light ml-3' to='/roles'>
                            <i className='fa fa-caret-left' /> back
                          </NavLink>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          )
        }}
      </Consumer>
    )
  }
}

export default withRouter(AddRole)
