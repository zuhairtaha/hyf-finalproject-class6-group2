import React from 'react'
import logBackground from './images/logo-bg.svg'
import TouchIcon from '@material-ui/icons/TouchApp'
import Fab from '@material-ui/core/es/Fab/Fab'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root1: {
    // ...
    // xs 0,.. | sm 600,.. | md 960,.. | lg 1280,.. | xl 1920,..
    [theme.breakpoints.down('xs')]: {}
  },
  '@media (min-width: 960px)': {
    content: {}
  },
  root: {
    textAlign: 'right'
  },

  container: {
    minWidth: 275,
    maxWidth: 1200,
    width: '100%',
    height: 'auto',
    display: 'flex',
    margin: 'auto'
  },

  left: {
    flex: 1,
    textAlign: 'left',
    display: 'flex',
    '@media (max-width: 557px)': {
      display: 'none'
    },
    '@media (max-width: 381px)': {
      display: 'none'
    }
  },
  leftContent: {
    margin: 'auto',
    padding: '0 2rem'
  },

  right: {
    flex: 1,
    display: 'flex',
    background: `url(${logBackground}) no-repeat center`,
    minHeight: '500px',
    '@media (max-width: 557px)': {
      backgroundSize: '80%'
    },
    '@media (max-width: 465px)': {
      backgroundSize: '90%'
    },
    '@media (max-width: 381px)': {
      display: 'none'
    }
  },

  rightH3Container: {
    margin: 'auto',
    textAlign: 'center',
    color: '#585858',
    lineHeight: '38px',
    fontWeight: '100'
  },
  beforeApply: {
    '@media (max-width: 740px)': {
      display: 'none'
    },
    '@media (max-width: 557px)': {
      display: 'inherit'
    }
  },
  copenhagen: {
    fontWeight: 'bold',
    color: '#1d5896'
  },
  title: {
    color: '#1d5896',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      color: '#fff',
      textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
    }
  },
  description: {
    lineHeight: '2rem',
    color: '#555',
    fontWeight: '100',
    mixBlendMode: 'color-dodge',
    [theme.breakpoints.down('sm')]: {}
  },
  apply: {
    marginTop: '1.5rem'
  },
  forSmallSize: {
    display: 'none',
    '@media (max-width: 381px)': {
      display: 'inherit',
      color: '#fff',
      textAlign: 'center',
      margin: 'auto'
    }
  }
})

const HomePageHeader = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.leftContent}>
            <h1 className={classes.title}>HackYourFuture</h1>
            <p className={classes.description}>
              HackYourFuture is an educational program that aims to train
              refugees and asylum seekers to become web-developers and empower
              them by opening the doors to a very in-demand job market.
            </p>
          </div>
        </div>
        <div className={classes.right}>
          <h3 className={classes.rightH3Container}>
            <span className={classes.beforeApply}>
              REFUGEE CODE SCHOOL IN <br />
              <span className={classes.copenhagen}>COPENHAGEN</span>
              <br />
            </span>
            <Fab
              className={classes.apply}
              size='large'
              variant='extended'
              color='primary'
            >
              <TouchIcon />
              apply now
            </Fab>
          </h3>
        </div>
        <div className={classes.forSmallSize}>
          <p>
            <h2>HackYourFuture</h2>REFUGEE CODE SCHOOL IN COPENHAGEN
          </p>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(HomePageHeader)
