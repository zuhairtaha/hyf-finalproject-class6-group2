import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import classNames from 'classnames'
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
    flexBasis: 200
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
    moduleId: null,
    modules: [],
    start: null,
    end: null,
    className: '',
    classId: null,
    error: '',
    github: ''
  }

  handleChange = prop => event => this.setState({ [prop]: event.target.value })

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
    const { modules, className, error } = this.state
    return error ? (
      <p>{error}</p>
    ) : (
      <Container>
        <Typography variant='h5'>Add module to: {className}</Typography>
        <form onSubmit={this.formSubmitHandler}>
          {/*Modules list*/}
          <TextField
            style={{ width: '50%' }}
            select
            label='Chose module'
            className={classNames(classes.margin, classes.textField)}
            value={this.state.moduleId}
            onChange={this.handleChange('moduleId')}
            fullWidth={true}
          >
            {modules.map(({ id, title }) => (
              <MenuItem key={id} value={id}>
                {title}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id='standard-select-currency'
            select
            label='Select'
            className={classes.textField}
            value={this.state.currency}
            onChange={this.handleChange('currency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText='Please select your currency'
            margin='normal'
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {/*GitHub*/}
          <TextField
            style={{ width: '50%' }}
            id='standard-name'
            label='GitHub repository'
            className={classes.textField}
            defaultValue='https://github.com/'
            value={this.state.name}
            onChange={this.handleChange('github')}
            margin='normal'
            fullWidth={true}
          />
          {/*Date*/}
          <Grid container spacing={24}>
            {/*start*/}
            <Grid item md={6}>
              <TextField
                id='date'
                label='Start'
                type='date'
                defaultValue={this.state.start}
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                onChange={this.handleChange('start')}
                fullWidth={true}
              />
            </Grid>
            {/*end*/}
            <Grid item md={6}>
              <TextField
                id='date'
                label='End'
                type='date'
                defaultValue={this.state.end}
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                onChange={this.handleChange('end')}
                fullWidth={true}
              />
            </Grid>
          </Grid>

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
