import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import mission from './images/mission.svg'
import program from './images/program.svg'
import training from './images/training.svg'
import Container from '../../layouts/container'

const styles = theme => ({
  noneBackground: {
    background: 'none',
    boxShadow: 'none'
  },
  centerText: {
    textAlign: 'center'
  },
  max30: {
    maxWidth: '30%'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridColumnGap: '3rem',
    justifyContent: 'space-between'
  }
})

const OUrMission = props => {
  const { classes } = props
  return (
    <Container noStyle>
      <div className={classes.grid}>
        <div className={classes.centerText}>
          <img src={mission} alt='mission' className={classes.max30} />
          <h2 className='home-title'>Our Mission</h2>
          <p>
            Empower refugees by teaching them the necessary skills for a career
            in software application development.
          </p>
        </div>
        <div className={classes.centerText}>
          <img src={program} alt='program' className={classes.max30} />
          <h2 className='home-title'>Our Programme</h2>
          <p>
            Our 6 months course is divided into 8 modules of around 3 weeks
            each, after that they have the final project.
          </p>
        </div>
        <div className={classes.centerText}>
          <img src={training} alt='training' className={classes.max30} />
          <h2 className='home-title'>Our Training</h2>
          <p>
            Every Sunday we meet for in-person classes. Students are supported
            online with their homework during the week.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default withStyles(styles)(OUrMission)
