import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Container from '../../layouts/container'
import Typography from '@material-ui/core/es/Typography/Typography'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import moment from 'moment'
import DateFnsUtils from '@date-io/date-fns'
import swal from 'sweetalert'
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers'

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

class EditClassModule extends React.Component {
  state = {
    id: 0,
    class_id: 0,
    module_id: 0,
    github_page: '',
    start_date: '',
    end_date: '',
    module_title: '',
    length: 0,
    class_name: '',
    selectedModuleId: 0,
    restModules: [],
    selectedModuleLength: 3 //initial module length
  }

  handleChange = name => event => {
    const { value } = event.target
    this.setState({ [name]: value })

    // when module selected from drop-down list set the its id and length at state
    if (name === 'selectedModuleId') {
      this.setState({
        selectedModuleLength: this.state.restModules.filter(
          module => module.id === value
        )[0]['length']
      })
    }
  }

  // when start date selected, set :
  // (end date) = (start date) + (selected module length)
  handleStartDateChange = date => {
    this.setState({ start_date: date })

    const end_date = moment(new Date(date).toISOString())
      .add(this.state.selectedModuleLength, 'week')
      .format('YYYY-MM-DD')
    this.setState({ end_date })
  }

  handleEndDateChange = date => {
    this.setState({ end_date: date })
  }

  formSubmitHandler = e => {
    e.preventDefault()
    const {
      class_id,
      selectedModuleId,
      github_page,
      start_date,
      end_date
    } = this.state
    axios
      .put(`/api/classes-modules/`, {
        class_id,
        module_id: selectedModuleId,
        github_page,
        start_date,
        end_date
      })
      .then(res => {
        if (res.data.updated) this.props.history.push('/classes')
      })
      .catch(err => swal('Oops!', err.response.data, 'error'))
  }

  componentDidMount() {
    // get class_module details
    axios
      .get(`/api/classes-modules/${this.props.match.params.id}`)
      .then(res => {
        const { module_title, class_name, class_id } = res.data
        this.setState({ ...res.data, selectedModuleId: res.data.module_id })
        document.title = `Edit ${module_title} for ${class_name} `

        // get rest modules for current class
        return axios
          .get(`/api/modules/rest-modules-for-class/${class_id}`)
          .then(res => this.setState({ restModules: res.data }))
      })
      .catch(error => swal('OOPS!', error.response.data, 'error'))
  }

  render = () => {
    const { classes } = this.props
    const {
      github_page,
      start_date,
      end_date,
      module_title,
      class_name,
      selectedModuleId,
      restModules
    } = this.state
    return (
      <Container>
        <Typography variant='h5'>
          <EditIcon /> {class_name} - {module_title}
        </Typography>
        <form onSubmit={this.formSubmitHandler}>

          {/*Modules list*/}
          <TextField
            select
            label='Chose module'
            value={selectedModuleId}
            onChange={this.handleChange('selectedModuleId')}
            className={classes.textField}
            SelectProps={{ MenuProps: { className: classes.menu } }}
            helperText='Please select your currency'
            margin='normal'
          >
            {restModules.map(({ id, title }) => (
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
            value={github_page || ''}
            onChange={this.handleChange('github_page')}
            margin='normal'
          />
          <br />

          {/*start*/}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin='normal'
              label='Start date'
              format='dd-MM-yyyy'
              value={start_date}
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
              value={end_date}
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
            <SaveIcon /> update
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

export default withStyles(styles)(withRouter(EditClassModule))
