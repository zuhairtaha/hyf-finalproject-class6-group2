import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BallotIcon from '@material-ui/icons/Ballot'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class NavigationDrawer extends React.Component {
  state = {
    left: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem component={Link} to='/modules' button key={1}>
            <ListItemIcon>
              <BallotIcon />
            </ListItemIcon>
            <ListItemText primary={'Modules'} />
          </ListItem>
        </List>
      </div>
    )

    return (
      <div>
        <IconButton
          onClick={this.toggleDrawer('left', true)}
          className={classes.menuButton}
          color='inherit'
          aria-label='Menu'
        >
          <MenuIcon />
        </IconButton>

        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role='button'
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    )
  }
}

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavigationDrawer)
