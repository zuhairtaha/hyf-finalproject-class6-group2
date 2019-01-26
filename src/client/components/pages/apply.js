import Button from '@material-ui/core/Button'
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send'
import Grid from '@material-ui/core/Grid'
import AccountCircle from '@material-ui/icons/AccountCircle'
import EmailIcon from '@material-ui/icons/Drafts'
import LocationCityIcon from '@material-ui/icons/Room'
import PhoneIcon from '@material-ui/icons/Phone'
import InfoIcon from '@material-ui/icons/Comment'
import BookIcon from '@material-ui/icons/School'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Container from "../layouts/container"

const styles = theme => ({
  flex: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  textField: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  submitForm: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
})

class Apply extends Component {
  state = {
    gilad: true,
    jason: false,
    antoine: true
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  render() {
    const { email, classes } = this.props
    return (
      <Container>
        <form method='POST' action={`https://formspree.io/${email}`}>
          <div>
            <Grid container spacing={8} alignItems='flex-end'>
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item style={{ flex: 1 }}>
                <TextField
                  label='Your name'
                  name='name'
                  className={classes.textField}
                  margin='normal'
                />
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid container spacing={8} alignItems='flex-end'>
              <Grid item>
                <LocationCityIcon />
              </Grid>
              <Grid item style={{ flex: 1 }}>
                <TextField
                  className={classes.textField}
                  label='Address / Municipality / City'
                  name='address'
                  margin='normal'
                />
              </Grid>
            </Grid>
          </div>

          <div className={classes.margin}>
            <Grid container spacing={8} alignItems='flex-end'>
              <Grid item>
                <EmailIcon />
              </Grid>
              <Grid item style={{ flex: 1 }}>
                <TextField
                  type='email'
                  label='Your email'
                  name='email'
                  margin='normal'
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </div>

          <div className={classes.margin}>
            <Grid container spacing={8} alignItems='flex-end'>
              <Grid item>
                <PhoneIcon />
              </Grid>
              <Grid item style={{ flex: 1 }}>
                <TextField
                  label='Phone'
                  name='phone'
                  margin='normal'
                  className={classes.textField}
                />
              </Grid>
            </Grid>
          </div>

          <div className={classes.margin}>
            <Grid container spacing={8} alignItems='flex-end'>
              <Grid item>
                <InfoIcon />
              </Grid>
              <Grid item style={{ flex: 1 }}>
                <TextField
                  label='How did you hear about HackYourFuture?'
                  multiline
                  rows='2'
                  rowsMax='6'
                  name='how-did-your-hear'
                  margin='normal'
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>

          <div className={classes.margin}>
            <Grid container spacing={8} alignItems='flex-end'>
              <Grid item>
                <BookIcon />
              </Grid>
              <Grid item style={{ flex: 1 }}>
                <TextField
                  label='What is your Educational background?'
                  multiline
                  rows='2'
                  rowsMax='6'
                  name='education'
                  margin='normal'
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>

          <FormControl component='fieldset'>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.gilad}
                    onChange={this.handleChange('gilad')}
                    name='own-computer'
                    value='gilad'
                  />
                }
                label='Do you have your own computer?'
              />
            </FormGroup>
          </FormControl>

          <br />
          <Button
            className={classes.submitForm}
            variant='contained'
            color='primary'
            type='submit'
            size='large'
          >
            Apply &nbsp; <SendIcon />
          </Button>
        </form>
      </Container>
    )
  }
}

export default withStyles(styles)(Apply)