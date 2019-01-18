import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Consumer } from '../../context'
import TextField from '@material-ui/core/TextField'


class RoleItem extends React.Component {
   
    deleteRole = (id, dispatch) =>
    dispatch({
      type: 'DELETE_ROLE',
      payload: id
    })
    

  render() {
    const {
      id,
      name
    } = this.props.role
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <Paper className='role'>
               {/*name*/}
              <TextField
            label='Nmae'
            name='name'
            value={name}
            onChange={this.handleChange}
            margin='normal'
          />
          <br />

         
             

              <div className='socialIcons'>
                <IconButton component={Link} to={`/roles/edit/${id}`}>
                  <EditIcon />
                </IconButton>

                <IconButton
                  onClick={() => this.deleteRole(id, dispatch)}
                  aria-label='Delete'
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Paper>
          )
        }}
      </Consumer>
    )
  }
}

export default RoleItem
