import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Consumer } from '../../context'
import Container from '../layouts/container'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/es/Button/Button'
import AddIcon from '@material-ui/icons/Add'
import { Link, Redirect, withRouter } from 'react-router-dom'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/es/Typography/Typography'
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

class AddClass extends Component {
  state = {
    name: '',
    active: true
  }

  updateField = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  submitForm = (dispatch, e) => {
    e.preventDefault()
    const { name, active } = this.state
    const newClass = {
      name,
      active
    }

    axios.post(`/api/classes`, newClass).then(res => {
      if (res.data.added) {
        const payload = {
          item: res.data.item,
          history: this.props.history
        }
        dispatch({ type: 'ADD_CLASS', payload })
      }
    })
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  componentDidMount() {
    document.title = 'Add class'
    // .dispatch({ type: 'RESET_REDIRECT' })
  }

  render() {
    const { name } = this.state
    const { classes } = this.props
    return (
      <Consumer>
        {({ dispatch, redirect }) => {
          return redirect ? (
            <Redirect to='/classes' />
          ) : (
            <Container>
              <Typography component='h5' variant='h5'>
                Add class
              </Typography>
              <form onSubmit={this.submitForm.bind(this, dispatch)}>
                {/*name*/}
                <TextField
                  label='Name'
                  name='name'
                  defaultValue={name}
                  onChange={this.updateField}
                  margin='normal'
                  className={classes.textField}
                  style={{ marginRight: '1rem' }}
                />

                <br />

                <FormControlLabel
                  control={
                    <Switch
                      color='primary'
                      checked={this.state.active}
                      onChange={this.handleChange('active')}
                      value='active'
                    />
                  }
                  label='Active'
                />
                <br />
                <Button variant='contained' color='primary' type='submit'>
                  <AddIcon /> Add Class
                </Button>

                <Button
                  variant='contained'
                  component={Link}
                  to='/classes'
                  style={{ marginLeft: '1rem' }}
                >
                  cancel
                </Button>
              </form>
            </Container>
          )
        }}
      </Consumer>
    )
  }
}

export default withStyles(styles)(withRouter(AddClass))
