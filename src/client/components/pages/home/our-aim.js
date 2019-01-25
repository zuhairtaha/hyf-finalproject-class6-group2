import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import webTech from './images/aim2.jpg'
import Container from '../../layouts/container'

const styles = {
  flex1: {
    flex: 1,
    display: 'flex'
  },
  flexText: {
    flex: 1
  },
  mAuto: {
    margin: 'auto'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  left2rem: {
    textAlign: 'left',
    lineHeight: '2rem'
  },
  max100: {
    maxWidth: '100%'
  }
}

const OurAim = props => {
  const { classes } = props
  return (
    <Container withShadow>
      <div className={classes.flexRow}>
        <div className={classes.flex1}>
          <div className={classes.mAuto}>
            <img className={classes.max100} src={webTech} alt='' />
          </div>
        </div>
        <div className={classes.flexText}>
          <h3 className='home-title'>Our aim</h3>
          <p className={classes.left2rem}>
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
