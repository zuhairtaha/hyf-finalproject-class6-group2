<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from 'react'
import NavLink from 'react-router-dom/es/NavLink'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { Consumer } from '../../context'
import Paper from '@material-ui/core/Paper'

class AddModule extends Component {

    constructor(props) {
        super(props)
    this.state = {
        
        title: '',
        description: '',
        length: ''
       
}
    }
    updateField = e => {
        const { name, value } = e.target
        this.setState({

            [name]: value

        })
        console.log(name,value)
    }

    componentWillMount() {
        document.title = 'Add Module';
    }

    submitForm = (dispatch,e)  => {
        e.preventDefault();
      
        const { title, description, length } = this.state
        const newModule = {
            title,
            description,
            length
            

        };
        dispatch({ type: 'ADD_MODULE', payload: newModule });
    }

    render() {
        const { title, description, length} = this.state
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <Paper className='module'>

                        <div className='card mb-3'>
                            <div className='card-header'>
                                <h3>{'Edit Module'}</h3>
                                <div className='card-body'>
                                    <div className='card shadow-sm p-3 mb-3'>
                                        <form onSubmit={this.submitForm.bind(this,dispatch)}>
                                            <div className='row'>
                                                <div className='col-md-6 mb-2'>
                                                    {/*title*/}
                                                    <TextField
                                                        label='Title'
                                                        name='title'
                                                        defaultValue={title}

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
                                                        value={description}
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
                                                        value={length}
                                                        onChange={this.updateField}
                                                        margin='normal'
                                                    />
                                                    <br />
                                                    
                                                </div>

                                                <button type='submit' className='btn btn-primary'>
                                                    <i className='fa fa-floppy-o' aria-hidden='true' />{' '}
                                                    {'Add Module'}
                                                </button>
                                                <NavLink className='btn btn-light ml-3' to='/modules'>
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

export default withRouter(AddModule)
=======
import React from 'react'
=======
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Consumer } from '../../context'
import Container from '../layouts/container'
import { withStyles } from '@material-ui/core'
import Button from '@material-ui/core/es/Button/Button'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
>>>>>>> c615c6b42c8965381ff5e707618c3a82ee8f889c

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
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      length: ''
    }
  }

  updateField = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
    console.log(name, value)
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
    dispatch({ type: 'ADD_MODULE', payload: newModule })
  }

  render() {
    const { title, description, length } = this.state
    const { classes } = this.props
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <Container>
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

                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                >
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
          )
        }}
      </Consumer>
    )
  }
}

<<<<<<< HEAD
export default AddModule
>>>>>>> 46e1d7e9316638c71aad46275300e6e044537391
=======
export default withStyles(styles)(AddModule)
>>>>>>> c615c6b42c8965381ff5e707618c3a82ee8f889c
