import React from 'react'
<<<<<<< HEAD
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
=======
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
>>>>>>> c615c6b42c8965381ff5e707618c3a82ee8f889c

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
<<<<<<< HEAD
      <div>
        <a href=' ' className='btn btn-info'>
          <i className='fa ' aria-hidden='true'>
            {this.props.cllmod.module}
          </i>
        </a>
      </div>
>>>>>>> 46e1d7e9316638c71aad46275300e6e044537391
=======
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
>>>>>>> c615c6b42c8965381ff5e707618c3a82ee8f889c
    )
  }
}

ModuleItem.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ModuleItem)
