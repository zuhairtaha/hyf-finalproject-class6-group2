import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Container from '../../layouts/container'
import Typography from '@material-ui/core/es/Typography/Typography'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '1rem 5rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 1rem'
    }
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    boxSizing: 'border-box',
    width: '50%',
    paddingRight: '1rem',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
      width: '100%'
    }
  },
  mt1: {
    marginTop: '1rem'
  },
  floatingBtn: {
    position: 'absolute',
    right: '2rem',
    bottom: '2rem',
    zIndex: 9
  },
  menu: {
    width: 200
  }
})

class AddModuleToClass extends React.Component {
  state = {
    status: '',
    moduleId: 0,
    modules: [],
    start: null,
    end: null,
    className: '',
    classId: null,
    error: '',
    github: ''
  }

  handleChange = name => event => this.setState({ [name]: event.target.value })

  formSubmitHandler = e => {
    e.preventDefault()
    const { classId, moduleId, github, start, end } = this.state
    axios
      .post(`/api/classes-modules/`, {
        class_id: classId,
        module_id: moduleId,
        github_page: github,
        start_date: start,
        end_date: end
      })
      .then(res => {
        if (res.data.added) this.props.history.push('/classes')
      })
      .catch(error => this.setState({ error }))
  }

  componentDidMount() {
    const classId = this.props.match.params.id
    axios
      .get(`/api/classes/${classId}`)
      .then(res => {
        const { id, name } = res.data
        this.setState({ className: name, classId: id })
        document.title = `Add module to ${name}`
      })
      .catch(error => this.setState(state => ({ ...state.error, error })))

    axios
      .get(`/api/modules/rest-modules-for-class/${classId}`)
      .then(res => this.setState({ modules: res.data }))
      .catch(error => this.setState(state => ({ ...state.error, error })))
  }

  render = () => {
    const { classes } = this.props
    const {
      modules,
      className,
      error,
      moduleId,
      start,
      end,
      github
    } = this.state
    return error ? (
      <p>{error}</p>
    ) : (
      <Container>
        <Typography variant='h5'>Add module to: {className}</Typography>
        <form onSubmit={this.formSubmitHandler}>
          {/*Modules list*/}

          <TextField
            select
            label='Chose module'
            value={moduleId}
            onChange={this.handleChange('moduleId')}
            className={classes.textField}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText='Please select your currency'
            margin='normal'
          >
            {modules.map(({ id, title }) => (
              <MenuItem key={id} value={id}>
                {title}
              </MenuItem>
            ))}
          </TextField>
          <br />

          {/*GitHub*/}
          <TextField
            id='standard-name'
            label='GitHub repository'
            className={classes.textField}
            defaultValue='https://github.com/'
            value={github}
            onChange={this.handleChange('github')}
            margin='normal'
          />
          <br />

          {/*start*/}
          <TextField
            id='date'
            label='Start'
            type='date'
            defaultValue={start}
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            onChange={this.handleChange('start')}
          />
          <br />
          {/*end*/}
          <TextField
            id='date'
            label='End'
            type='date'
            defaultValue={end}
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            onChange={this.handleChange('end')}
          />
          <br />
          {/*Submit*/}
          <Button
            type='submit'
            className={classes.mt1}
            variant='contained'
            color='primary'
          >
            <AddIcon /> add
          </Button>

          <Button
            className={classes.mt1}
            variant='contained'
            component={Link}
            to='/classes'
            style={{ marginLeft: '1rem' }}
          >
            cancel
          </Button>
        </form>
      </Container>
    )
  }
}

export default withStyles(styles)(withRouter(AddModuleToClass))
