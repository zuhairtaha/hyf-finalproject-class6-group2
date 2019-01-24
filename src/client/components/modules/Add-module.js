import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Consumer } from '../../context'
import Container from '../layouts/container'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/es/Button/Button'
import AddIcon from '@material-ui/icons/Add'
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
    document.title = 'Add Module'
  }

  submitForm = (dispatch, e) => {
    e.preventDefault()

    const { title, description, length } = this.state
    const newModule = {
      title,
      description,
      length
    }

    axios
      .post(`/api/modules`, newModule)
      .then(res => {
        if (res.data.added) {
          dispatch({ type: 'ADD_MODULE', payload: newModule })
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
          <Container withLayout={true}>
            <h2>Add module</h2>
            <form onSubmit={this.submitForm.bind(this, dispatch)}>
              {/*title*/}
              <TextField
                label='Title'
                name='title'
                defaultValue={title}
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
                <AddIcon /> Add Module
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
