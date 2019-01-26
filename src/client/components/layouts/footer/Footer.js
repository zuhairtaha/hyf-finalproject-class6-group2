import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  footer: {
    background: '#1d5896',
    textAlign: 'center',
    margin: 0,
    padding: '1rem'
  },
  copyRight: {
    fontSize: '1.2rem',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
    }
})

const Footer = props => {
  const { classes } = props
  return (
    <div className={classes.footer}>
      <span className={classes.copyRight}>
        &copy; Copyright HackYourFuture Copenhagen 2019
      </span>
    </div>
  )
}

export default withStyles(styles)(Footer)
