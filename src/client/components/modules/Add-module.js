import React, { Component } from 'react'
import NavLink from 'react-router-dom/es/NavLink'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { Consumer } from '../../context'

class AddModule extends Component {

    constructor(props) {
        super(props)
        this.state = {
         
                title: '',
                description: '',
                length: '',
                created_at: '',
                updated_at: ''
                    }
    }
    updateField = e => {
        const { name, value } = e.target
        this.setState({
            
              ...this.state,
              [name]: value
            
          })
        console.log(name, value)
    }

    componentWillMount() {
        document.title = 'Add Module';
    }

    submitForm = e => {
        e.preventDefault()
        console.log(this.state)
        const url = `/api/modules`
        const method = 'POST'

        fetch(url, {
            method,
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.text())
.then(req=>console.log(req))
            .then(response => {
                console.log('Success:', response)

                // TODO redirect to the modules list page (/modules)
                console.log('adding....')
                //this.props.history.goBack()
            })
            .catch(error => console.error('Error:', error))
    }

    render() {
        const { title, description, length, created_at, updated_at } = this.state
        return (

                    //const { dispatch } = value;
                    //return (
            <div className='card mb-3'>
                <div className='card-header'>
                    <h3>{'Edit Module'}</h3>
                    <div className='card-body'>
                        <div className='card shadow-sm p-3 mb-3'>
                            <form onSubmit={this.submitForm}>
                                <div className='row'>
                                    <div className='col-md-6 mb-2'>
                                        {/*title*/}
                                        <TextField
                                            label='Title'
                                            name='title'
                                            Value={title}

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
                                            defaultValue={description}
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
                                            Value={length}
                                            onChange={this.updateField}
                                            margin='normal'
                                        />
                                        <br />
                                        {/*created_at*/}

                                        <TextField
                                            label='Created_at'
                                            name='created_at'
                                            defaultValue={created_at}
                                            onChange={this.updateField}
                                            margin='normal'
                                        />
                                        <br />
                                        {/*updated_at*/}

                                        <TextField
                                            type='date'
                                            label='Updated_at'
                                            name='updated_at'
                                            defaultValue={updated_at}
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
        )




    }
}

export default withRouter(AddModule)
