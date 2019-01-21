import React from 'react'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Consumer } from '../../context'

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
})

class ModuleItem extends React.Component {
  state = { expanded: false }

  deleteModule = (id, dispatch) =>
    dispatch({
      type: 'DELETE_MODULE',
      payload: id
    })
  
  render() {
    const { classes } = this.props
    const { id, title, description, length } = this.props.module

    return (
      
      <Consumer>
        {({ dispatch }) => (
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
              <Typography style={{ fontSize: '1rem' }} component='p'>
                Description: {description}
              </Typography>
              <br />
              <Typography component='p'>Length: {length} weeks</Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label='Share'>
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => this.deleteModule(id, dispatch)}
                aria-label='Add to favorites'
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        )}
      </Consumer>
    )
  }
}

ModuleItem.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ModuleItem)
