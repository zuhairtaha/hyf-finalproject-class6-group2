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
import moment from 'moment'
import DateFnsUtils from '@date-io/date-fns'
import swal from 'sweetalert'
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers'

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
    start: moment(new Date().toISOString()).format('YYYY-MM-DD'),
    end: moment(new Date().toISOString()).format('YYYY-MM-DD'),
    className: '',
    classId: null,
    error: '',
    github: 'https://github.com/',
    selectedModuleLength: 3 //initial module length
  }

  handleChange = name => event => {
    const { value } = event.target
    this.setState({ [name]: value })

    // when module selected from drop-down list set the its id and length at state
    if (name === 'moduleId') {
      this.setState({
        selectedModuleLength: this.state.modules.filter(
          module => module.id === value
        )[0]['length']
      })
    }
  }

  // when start date selected, set :
  // (end date) = (start date) + (selected module length)
  handleStartDateChange = date => {
    this.setState({ start: date })

    const end = moment(new Date(date).toISOString())
      .add(this.state.selectedModuleLength, 'week')
      .format('YYYY-MM-DD')
    this.setState({ end })
  }

  handleEndDateChange = date => {
    this.setState({ end: date })
  }

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
      .catch(err => swal('Oops!', err.response.data, 'error'))
  }

  componentDidMount() {
    const classId = this.props.match.params.id
    axios
      .get(`/api/classes/${classId}`)
      .then(res => {
        const { id, name, length } = res.data
        this.setState({
          className: name,
          classId: id,
          length
        })
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
            value={github}
            onChange={this.handleChange('github')}
            margin='normal'
          />
          <br />

          {/*start*/}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin='normal'
              label='Start date'
              format='dd-MM-yyyy'
              value={start}
              className={classes.textField}
              onChange={this.handleStartDateChange}
            />
          </MuiPickersUtilsProvider>
          <br />

          {/*end*/}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin='normal'
              label='End date'
              format='dd-MM-yyyy'
              value={end}
              className={classes.textField}
              onChange={this.handleEndDateChange}
            />
          </MuiPickersUtilsProvider>

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
