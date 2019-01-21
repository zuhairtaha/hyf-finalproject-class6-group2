import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '60vh',
    background:
      'fixed url("/images/parallax.jpg") no-repeat center center/cover',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    zIndex: -1
  },

  logo: {
    maxHeight: '50vh',
    maxWidth: '50vh',
    display: 'block',
    margin: 'auto',
    opacity: 0.85
  }
}

const Parallax = props => {
  const { classes } = props

  return (
    <div className={classes.container}>
      {/*<img className="logo" src="/static/HYF_LOGO.png"/>*/}
      <div className={classes.logo}>
        <img src='/images/logo-white.svg' alt='HackYourFuture Copenhagen' />
      </div>
    </div>
  )
}

export default withStyles(styles)(Parallax)
