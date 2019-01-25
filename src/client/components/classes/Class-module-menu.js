import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { withRouter, Link } from 'react-router-dom'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AddMentorIcon from '@material-ui/icons/PersonAdd'
import EditIcon from '@material-ui/icons/Edit'
import EyeIcon from '@material-ui/icons/Visibility'
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles } from '@material-ui/core/styles'
import { Consumer } from '../../context'
import axios from 'axios'
import swal from 'sweetalert'

const ITEM_HEIGHT = 48
const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
})

class ClassModuleMenu extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  
  deleteClassModule = (id, title, dispatch) => {
    swal({
      title: `Delete ${title}?`,
      text: `Once ${title} deleted, you will not be able to recover`,
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        dispatch({ type: 'TOGGLE_LOADING', payload: true })
        axios
          .delete(`/api/classes-modules/${id}`)
          .then(res => {
            if (res.data.deleted)
              dispatch({ type: 'DELETE_CLASS_MODULE', payload: id })
          })
          .catch(error => swal('OOPS!', error, 'error'))
          .finally(() => dispatch({ type: 'TOGGLE_LOADING', payload: false }))
      }
    })
  }

  render() {
    const { anchorEl } = this.state
    const { classes, id, title } = this.props

    const open = Boolean(anchorEl)
    return (
      <Consumer>
        {({ dispatch }) => (
          <>
            <IconButton
              color='inherit'
              aria-label='More'
              aria-owns={open ? 'long-menu' : undefined}
              aria-haspopup='true'
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id='long-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleOptionClick}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200
                }
              }}
            >
              {/*Edit ----------------------------------- */}
              <MenuItem component={Link} to={`/classes-modules/edit/${id}`}>
                <ListItemIcon className={classes.icon}>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.primary }}
                  inset
                  primary='Edit'
                />
              </MenuItem>

              {/*Delete ----------------------------------- */}
              <MenuItem
                onClick={this.deleteClassModule.bind(this, id, title, dispatch)}
              >
                <ListItemIcon className={classes.icon}>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.primary }}
                  inset
                  primary='Delete'
                />
              </MenuItem>

              {/*Assign mentors ----------------------------------- */}
              <MenuItem
                onClick={() =>
                  this.handleOptionClick('add_mentor_to_class_module', id)
                }
              >
                <ListItemIcon className={classes.icon}>
                  <AddMentorIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.primary }}
                  inset
                  primary='Assign mentors'
                />
              </MenuItem>

              {/*view details ----------------------------------- */}
              <MenuItem
                onClick={() =>
                  this.handleOptionClick('delete_class_module', id, dispatch)
                }
              >
                <ListItemIcon className={classes.icon}>
                  <EyeIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.primary }}
                  inset
                  primary='Details...'
                />
              </MenuItem>
            </Menu>
          </>
        )}
      </Consumer>
    )
  }
}

export default withRouter(withStyles(styles)(ClassModuleMenu))
