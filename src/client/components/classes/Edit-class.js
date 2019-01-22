import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Consumer } from '../../context'
import Container from '../layouts/container'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/es/Button/Button'
import SaveIcon from '@material-ui/icons/Save'
import { Link, withRouter } from 'react-router-dom'
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

class EditClass extends Component {
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

    axios
      .put(`/api/classes/${this.props.match.params.id}`, newClass)
      .then(res => {
        if (res.data.updated) {
          dispatch({ type: 'EDIT_CLASS', newClass })
          this.props.history.push('/classes')
        }
      })
      .catch(console.error)
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  componentDidMount() {
    document.title = 'Edit class'
    const id = this.props.match.params.id
    axios.get(`/api/classes/${id}`).then(res => {
      const { name, active } = res.data
      this.setState({ name, active: active === 1 })
    })
  }

  render() {
    const { name, active } = this.state
    const { classes } = this.props
    return (
      <Consumer>
        {({ dispatch }) => (
          <Container>
            <Typography component='h5' variant='h5'>
              Edit class
            </Typography>
            <form onSubmit={this.submitForm.bind(this, dispatch)}>
              {/*name*/}
              <TextField
                label='Name'
                name='name'
                value={name}
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
                    checked={active}
                    onChange={this.handleChange('active')}
                    value='active'
                  />
                }
                label='Active'
              />
              <br />
              <Button variant='contained' color='primary' type='submit'>
                <SaveIcon /> update Class
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
        )}
      </Consumer>
    )
  }
}

export default withStyles(styles)(withRouter(EditClass))
