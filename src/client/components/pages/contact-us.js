import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import Container from '../layouts/container'

const styles = theme => ({
  flex: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  textField: {
    flex: 1
  },
  submitForm: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
})

class ContactUs extends Component {
  componentDidMount() {
    document.title = 'Contact us'
  }

  render() {
    const { classes } = this.props
    return (
      <Container>
        <h2 className='home-title'>Contact Us</h2>
        <form
          method='POST'
          action={`https://formspree.io/${this.props.email}`}
          noValidate
          autoComplete='off'
        >
          {/*Message*/}
          <TextField
            label='Message'
            multiline
            rows='2'
            rowsMax='6'
            name='message'
            margin='normal'
            fullWidth
          />

          <div className={classes.flex}>
            {/*Your name*/}
            <TextField
              className={classes.textField}
              label='Your name'
              type='text'
              name='name'
              margin='normal'
              style={{ marginRight: '1rem' }}
            />

            {/*Your email*/}
            <TextField
              className={classes.textField}
              type='email'
              label='Your email'
              name='email'
              margin='normal'
            />
          </div>
          <br />

          {/*submit form*/}
          <Button
            type='submit'
            variant='contained'
            size='large'
            color='primary'
            className={classes.submitForm}
          >
            Send &nbsp; <SendIcon />
          </Button>
        </form>
      </Container>
    )
  }
}

export default withStyles(styles)(ContactUs)
