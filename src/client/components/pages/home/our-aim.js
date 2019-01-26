import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import webTech from './images/aim2.jpg'
import Container from '../../layouts/container'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    // xs 0,.. | sm 600,.. | md 960,.. | lg 1280,.. | xl 1920,..
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  imgContainer: {
    flex: 1,
    display: 'flex'
  },
  textContainer: {
    flex: 1,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  imgWrapper: {
    margin: 'auto'
  },
  text: {
    textAlign: 'left',
    lineHeight: '2rem',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  img: {
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      maxHeight:'30vh'
    }
  }
})

const OurAim = props => {
  const { classes } = props
  return (
    <Container withShadow>
      <div className={classes.root}>
        <div className={classes.imgContainer}>
          <div className={classes.imgWrapper}>
            <img className={classes.img} src={webTech} alt='' />
          </div>
        </div>

        <div className={classes.textContainer}>
          <h3 className='home-title'>Our aim</h3>
          <p className={classes.text}>
            In our free 6-month program we train refugees, asylum seekers and
            people with limited access to further education in modern JavaScript
            software development. Our aim is to have our students land their
            first software development job after finishing our course. We
            achieve this by not only teaching them relevant frameworks, but also
            by preparing them for a job market that requires independent problem
            solving and continuous self-development. After completion of our
            program we guide students towards work via our network.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default withStyles(styles)(OurAim)
