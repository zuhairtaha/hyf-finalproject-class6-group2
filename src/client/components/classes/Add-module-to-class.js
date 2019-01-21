import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import classNames from 'classnames'
import MenuItem from '@material-ui/core/MenuItem'
import Container from '../layouts/container'
import Typography from '@material-ui/core/es/Typography/Typography'
import axios from 'axios'

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
  }
})

class AddModuleToClass extends React.Component {
  state = {
    mentor: '',
    status: '',
    modules: [],
    start: '2019-01-01',
    end: '2019-01-01',
    className: '',
    classId: null,
    error: ''
  }

  handleChange = prop => event => this.setState({ [prop]: event.target.value })

  formSubmitHandler = e => e.preventDefault()

  componentDidMount() {
    axios
      .get(`/api/classes/${this.props.match.params.id}`)
      .then(res => {
        const { id, name } = res.data
        return this.setState({ className: name, classId: id })
      })
      .catch(error => this.setState(state => ({ ...state.error, error })))

    axios
      .get(`/api/modules/`)
      .then(res => this.setState({ modules: res.data }))
      .catch(error => this.setState(state => ({ ...state.error, error })))
  }

  render = () => {
    const { classes } = this.props
    const { modules, className } = this.state
    return (
      <Container>
        <Typography variant='h5'>Add module to: {className}</Typography>
        <form onSubmit={this.formSubmitHandler}>
          {/*Mentors list*/}
          <TextField
            style={{ width: '50%' }}
            select
            label='Chose module'
            className={classNames(classes.margin, classes.textField)}
            value={this.state.mentor}
            onChange={this.handleChange('mentor')}
            fullWidth={true}
          >
            {modules.map(({ id, title }) => (
              <MenuItem key={id} value={id}>
                {title}
              </MenuItem>
            ))}
          </TextField>

          {/*status*/}
          <TextField
            style={{ width: '50%' }}
            id='standard-name'
            label='GitHub repository'
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('status')}
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
                InputLabelProps={{
                  shrink: true
                }}
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
                InputLabelProps={{
                  shrink: true
                }}
                onChange={this.handleChange('end')}
                fullWidth={true}
              />
            </Grid>
          </Grid>

          {/*Submit*/}
          <Button
            onClick={() => {
              this.onCloseModal()
              return this.props.onAddItem(this.state)
            }}
            className={classes.mt1}
            variant='contained'
            color='primary'
          >
            <AddIcon /> add
          </Button>
        </form>
      </Container>
    )
  }
}

export default withStyles(styles)(AddModuleToClass)
