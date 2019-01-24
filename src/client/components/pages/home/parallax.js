import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SchoolIcon from '@material-ui/icons/School'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '380px',
    background: 'fixed url("/images/p2.jpg") no-repeat center center/cover',
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
    maxWidth: '1200px',
    display: 'block',
    margin: 'auto',
    opacity: 0.85
  },
  content: {
    color: '#fff',
    fontWeight: '100',
    lineHeight: '2rem',
  },
  icon: { color: '#fff', fontSize: '7rem' }
}

const Parallax = props => {
  const { classes } = props

  return (
    <div className={classes.container}>
      {/*<img className="logo" src="/static/HYF_LOGO.png"/>*/}
      <div className={classes.logo}>
        <SchoolIcon className={classes.icon} />
        <h3 className={classes.content}>
          After completion of our program we guide students towards work via our
          network. With our team of experienced professional developers we have
          created a curriculum around the needs of non-western students. Our
          teachers are all volunteers and extremely passionate about coding.
        </h3>
      </div>
    </div>
  )
}

export default withStyles(styles)(Parallax)
