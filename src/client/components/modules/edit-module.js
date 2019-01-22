import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Consumer } from '../../context'
import Container from '../layouts/container'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/es/Button/Button'
import SaveIcon from '@material-ui/icons/Save'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

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

class AddModule extends Component {
  state = {
    id: null,
    title: '',
    description: '',
    length: ''
  }
  updateField = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  componentWillMount() {
    const moduleId = this.props.match.params.id
    axios
      .get(`/api/modules/${moduleId}`)
      .then(res => this.setState(res.data))
      .catch(console.error)

    document.title = 'Edit Module'
  }

  submitForm = (dispatch, e) => {
    e.preventDefault()
    const { id, title, description, length } = this.state
    const newModule = { title, description, length }
    axios
      .put(`/api/modules/${id}`, newModule)
      .then(res => {
        if (res.data.updated) {
          dispatch({ type: 'UPDATE_MODULE', payload: newModule })
          this.props.history.push('/modules')
        }
      })
      .catch(console.error)
  }

  render() {
    const { title, description, length } = this.state
    const { classes } = this.props
    return (
      <Consumer>
        {({ dispatch }) => (
          <Container>
            <form onSubmit={this.submitForm.bind(this, dispatch)}>
              {/*title*/}
              <TextField
                label='Title'
                name='title'
                value={title}
                onChange={this.updateField}
                margin='normal'
                className={classes.textField}
                style={{ marginRight: '1rem' }}
              />

              {/*length*/}
              <TextField
                label='length (weeks)'
                name='length'
                value={length}
                onChange={this.updateField}
                margin='normal'
                className={classes.textField}
              />

              <br />
              {/*description*/}
              <TextField
                label='Description'
                multiline
                rowsMax='4'
                rows='3'
                name='description'
                value={description}
                onChange={this.updateField}
                margin='normal'
                fullWidth
              />

              <br />

              <Button variant='contained' color='primary' type='submit'>
                <SaveIcon /> Update Module
              </Button>

              <Button
                variant='contained'
                component={Link}
                to='/modules'
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

export default withStyles(styles)(withRouter(AddModule))
