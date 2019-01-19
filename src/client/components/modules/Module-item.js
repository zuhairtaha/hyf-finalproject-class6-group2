import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Consumer } from '../../context'
import TextField from '@material-ui/core/TextField'


class ModuleItem extends React.Component {
   
    deleteModule = (id, dispatch) =>
    dispatch({
      type: 'DELETE_MODULE',
      payload: id
    })
    

  render() {
    const {
      id,
      title,
      description,
      length,
      created_at,
      updated_at
    } = this.props.module
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <Paper className='module'>
              
              <TextField
            label='title'
            name='title'
            value={title}
            onChange={this.handleChange}
            margin='normal'
          />
          <br />

          {/*description*/}
          <TextField
            label='description'
            multiline
            rowsMax='4'
            value={description}
            name='description'
            onChange={this.handleChange}
            margin='normal'
            // fullWidth
          />
          <br />
          <TextField
            label='length'
            name='length'
            value={length}
            onChange={this.handleChange}
            margin='normal'
          />
          <br /><TextField
            label='created_at'
            name='created_at'
            value={created_at}
            onChange={this.handleChange}
            margin='normal'
          />
          <br /><TextField
            label='updated_at'
            name='updated_at'
            value={updated_at}
            onChange={this.handleChange}
            margin='normal'
          />
          <br />
             

              <div className='socialIcons'>
                <IconButton component={Link} to={`/modules/edit/${id}`}>
                  <EditIcon />
                </IconButton>

                <IconButton
                  onClick={() => this.deleteModule(id, dispatch)}
                  aria-label='Delete'
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Paper>
          )
        }}
      </Consumer>
=======
//import Progress from '../layouts/Progress'
//import NavLink from 'react-router-dom/es/NavLink'
//import { Link } from 'react-router-dom'

class ModuleItem extends React.Component {
  state = {
    modules: []
  }

  render = () => {
    // console.log(this.props.cllmod)
    //const { mentors } = this.state
    return (
      <div>
        <a href=' ' className='btn btn-info'>
          <i className='fa ' aria-hidden='true'>
            {this.props.cllmod.module}
          </i>
        </a>
      </div>
>>>>>>> 46e1d7e9316638c71aad46275300e6e044537391
    )
  }
}

export default ModuleItem
