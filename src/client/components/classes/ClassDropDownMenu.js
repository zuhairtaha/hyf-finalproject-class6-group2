import React, { Fragment } from 'react'
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

class ClassDropDownMenu extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleOptionClick = (actionType, _class) => {
    this.setState({ anchorEl: null })
    switch (actionType) {
      case 'edit_class':
        this.props.history.push(`/classes/edit/${_class.id}`)
        break
      case 'add_module_to_class':
        break
      case 'delete_class':
        this.props.history.push(`/classes/delete/${_class.id}`)
        break
      default:
        break
    }
  }

  render() {
    const { anchorEl } = this.state
    const { classes } = this.props

    const open = Boolean(anchorEl)
    const id = this.props
    return (
      <Fragment>
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
          <MenuItem onClick={() => this.handleOptionClick('edit_class', id)}>
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
            onClick={() => this.handleOptionClick('add_module_to_class', id)}
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
          <MenuItem onClick={() => this.handleOptionClick('delete_class', id)}>
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
      </Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(ClassDropDownMenu))
