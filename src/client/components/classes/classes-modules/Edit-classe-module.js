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
import { Consumer } from '../../../context'

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
    classId: null,
    moduleId: 0,
    modules: [],
    github: '',
    start: moment(new Date().toISOString()).format('YYYY-MM-DD'),
    // todo: end should be larger than start date
    end: moment(new Date().toISOString()).format('YYYY-MM-DD'),
    module_title: '',
    length: 0,
    className: '',
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

    console.log('state after handler',this.state.module_title)
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

  formSubmitHandler = dispatch => event => {
    event.preventDefault()
    const {
      id,
      classId,
      moduleId,
      github,
      start,
      end,
      modules
    } = this.state
    axios
      .put(`/api/classes-modules/${id}`, {
        class_id: classId,
        module_id: moduleId,
        github_page: github,
        start_date: start,
        end_date: end
      })
      .then(res => {
        if (res.data.updated) {
          const updatedItem = {
            item_id: id,
            item_title: modules
              .filter(module => module.id === moduleId)
              .map(module => module.title)[0],
            group_id: classId,
            start_date: start,
            end_date: end
          }
          dispatch({ type: 'UPDATE_CLASS_MODULE', payload: updatedItem })
          this.props.history.push('/classes')
        }
      })
      .catch(err => swal('Oops!', err.response.data, 'error'))
  }

  componentDidMount() {
    // get class_module details
    const classModuleId = this.props.match.params.id
    axios
      .get(`/api/classes-modules/${classModuleId}`)
      .then(res => {
        const {
          id,
          class_id,
          module_id,
          github_page,
          start_date,
          end_date,
          module_title,
          length,
          class_name
        } = res.data

        this.setState({
          id,
          classId: class_id,
          moduleId: module_id,
          github: github_page,
          start: start_date,
          end: end_date,
          module_title: module_title,
          length,
          className: class_name
        })

        document.title = `Edit ${module_title} for ${class_name} `

        // get rest modules for current class
        return axios
          .get(`/api/modules/rest-modules-for-class/${class_id}`)
          .then(res =>
            this.setState({
              modules: [
                ...res.data,
                // add current module to rest modules (because here is edit page)
                { id: module_id, title: module_title, length }
              ]
            })
          )
      })
      .catch(error => swal('OOPS!', error.response.data, 'error'))
  }

  render = () => {
    const { classes } = this.props
    const {
      github,
      start,
      end,
      module_title,
      className,
      moduleId,
      modules
    } = this.state
    return (
      <Consumer>
        {({ dispatch }) => {
          return (
            <Container>
              <Typography variant='h5'>
                <EditIcon /> {className} - {module_title}
              </Typography>
              <form onSubmit={this.formSubmitHandler(dispatch)}>

                {/*Modules list*/}
                <TextField
                  select
                  label='Chose module'
                  value={moduleId}
                  onChange={this.handleChange('moduleId')}
                  className={classes.textField}
                  SelectProps={{ MenuProps: { className: classes.menu } }}
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
                  value={github || ''}
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
        }}
      </Consumer>
    )
  }
}

export default withStyles(styles)(withRouter(EditClassModule))
