import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import mission from './images/mission.svg'
import program from './images/program.svg'
import training from './images/training.svg'
import Container from '../../layouts/container'

const styles = theme => ({
  block: {
    textAlign: 'center'
  },
  img: {
    maxWidth: '30%',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridColumnGap: '3rem',
    justifyContent: 'space-between',
    padding:'0 1rem',

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr'
    }
  }
})

const OUrMission = props => {
  const {classes} = props
  return (
    <Container noStyle>
      <div className={ classes.root }>
        <div className={ classes.block }>
          <img src={ mission } alt='mission' className={ classes.img }/>
          <h2 className='home-title'>Mission</h2>
          <p>
            Empower refugees by teaching them the necessary skills for a career
            in software application development.
          </p>
        </div>

        <div className={ classes.block }>
          <img src={ program } alt='program' className={ classes.img }/>
          <h2 className='home-title'>Programme</h2>
          <p>
            6 months course is divided into 8 modules of around 3 weeks each,
            after that they have the final project.
          </p>
        </div>

        <div className={ classes.block }>
          <img src={ training } alt='training' className={ classes.img }/>
          <h2 className='home-title'>Training</h2>
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
