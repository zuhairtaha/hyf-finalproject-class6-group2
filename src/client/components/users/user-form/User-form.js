import React, { Component } from 'react'
import NavLink from 'react-router-dom/es/NavLink'
import Container from '../../layouts/container'
import Button from '@material-ui/core/es/Button/Button'
import { withStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'

const styles = theme => ({
  root: {
    // ...
    // xs 0,.. | sm 600,.. | md 960,.. | lg 1280,.. | xl 1920,..
    [theme.breakpoints.down('xs')]: {}
  },
  '@media (min-width: 960px)': {
    content: {}
  }
})

class UserForm extends Component {
  constructor(props) {
    super(props)
    if (this.props.isEditing)
      this.state = {
        userData: this.props.userData,
        active: false
      }
    else
      this.state = {
        userData: {
          name: '',
          birth_date: '',
          type: 'User',
          slack_nickname: 'https://github.com/',
          active: false
        }
      }
  }

  updateField = e => {
    const {name, value} = e.target
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value
      }
    })
  }

  componentWillMount() {
    document.title = this.props.isEditing ? 'Edit User' : 'Add User'
  }

  submitForm = e => {
    e.preventDefault()
    let url    = '',
        method = ''
    if (this.props.isEditing) {
      url = `/api/users/${ this.props.match.params.id }`
      method = 'PUT'
    } else {
      url = `/api/users`
      method = 'POST'
    }
    fetch(url, {
      method,
      body: JSON.stringify(this.state.userData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.text())

      .then(response => {
        console.log('Success:', response)

        // TODO redirect to the Users list page (/Users)
        console.log('updated....')
        this.props.history.goBack()
      })
      .catch(error => console.error('Error:', error))
  }

  render() {

    return (
      <Container>
        <h3 className='home-title'>
          { this.props.isEditing ? 'Edit User' : 'Add User' }
        </h3>
        <div>
          <form onSubmit={ this.submitForm }>
            <div>
              <div>


                <input
                  type='text'
                  name='name'
                  placeholder='First name'
                  defaultValue={ this.state.userData.name }
                  onChange={ this.updateField }
                />


              </div>

              <div>
                <input
                  type='date'
                  name='birth_date'
                  placeholder='Birth date'
                  defaultValue={ this.state.userData.birth_date }
                  onChange={ this.updateField }
                />
              </div>
              <div>
                <input
                  type='text'
                  name='type'
                  placeholder='type'
                  defaultValue={ this.state.userData.type }
                  onChange={ this.updateField }
                />
              </div>

              <div>
                <input
                  type='text'
                  name='slack_nickname'
                  placeholder='GitHub url'
                  defaultValue={ this.state.userData.slack_nickname }
                  onChange={ this.updateField }
                />
              </div>

              <div>
                <div>Status</div>
                <div>
                  <div>
                    <label htmlFor='active'>
                      <input
                        type='checkbox'
                        name='active'
                        onChange={ () =>
                          this.setState({
                            userData: {
                              ...this.state.userData,
                              active: !this.state.userData.active
                            }
                          })
                        }
                        checked={ this.state.userData.active }
                      />{ ' ' }
                      Active
                    </label>
                  </div>
                </div>
              </div>
              <Button type='submit' variant='contained' color='primary'>
                <SaveIcon/> { this.props.isEditing ? 'Update User' : 'Add User' }
              </Button>

              <Button
                style={ {marginLeft: '1rem'} }
                component={ NavLink }
                to='/users'
                variant='contained'
              >
                back
              </Button>
            </div>
          </form>
        </div>
      </Container>
    )
  }
}

export default withStyles(styles)(UserForm)
