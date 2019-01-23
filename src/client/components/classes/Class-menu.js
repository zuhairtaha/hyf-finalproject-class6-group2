import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { withRouter } from 'react-router-dom'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
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

class ClassMenu extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleOptionClick = (actionType, _class, dispatch = null, title = null) => {
    this.setState({ anchorEl: null })
    switch (actionType) {
      case 'edit_class':
        this.props.history.push(`/classes/edit/${_class.id}`)
        break

      case 'add_module_to_class':
        this.props.history.push(`/classes/add-module/${_class.id}`)
        break

      case 'delete_class':
        swal({
          title: 'Are you sure?',
          text: `this will delete ${title} wih all modules, sessions,...etc that belong to it`,
          icon: 'warning',
          buttons: true,
          dangerMode: true
        }).then(willDelete => {
          if (willDelete) {
            dispatch({ type: 'TOGGLE_LOADING', payload: true })
            axios
              .delete(`/api/classes/${_class.id}`)
              .then(res => {
                if (res.data.deleted)
                  dispatch({ type: 'DELETE_CLASS', payload: _class.id })
              })
              .catch(console.error)
              .finally(() =>
                dispatch({ type: 'TOGGLE_LOADING', payload: false })
              )
          }
        })

        break

      default:
        break
    }
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
              {/*Edit class*/}
              <MenuItem
                onClick={() => this.handleOptionClick('edit_class', id)}
              >
                <ListItemIcon className={classes.icon}>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.primary }}
                  inset
                  primary='Edit class'
                />
              </MenuItem>
              {/*Add module*/}
              <MenuItem
                onClick={() =>
                  this.handleOptionClick('add_module_to_class', id)
                }
              >
                <ListItemIcon className={classes.icon}>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.primary }}
                  inset
                  primary='Add module'
                />
              </MenuItem>
              {/*Delete Class*/}
              <MenuItem
                onClick={() =>
                  this.handleOptionClick('delete_class', id, dispatch, title)
                }
              >
                <ListItemIcon className={classes.icon}>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.primary }}
                  inset
                  primary='Delete Class'
                />
              </MenuItem>
            </Menu>
          </>
        )}
      </Consumer>
    )
  }
}

export default withRouter(withStyles(styles)(ClassMenu))
