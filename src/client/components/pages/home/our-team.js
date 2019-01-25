import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import team from './images/team.svg'
import Container from '../../layouts/container'

const styles = {
  flex: {
    display: 'flex'
  },
  flex3: {
    flex: 3,
    display: 'flex'
  },
  centerAuto: {
    textAlign: 'center',
    margin: 'auto'
  },
  flex1flex: {
    flex: 1,
    display: 'flex'
  },
  marginAuto: {
    margin: 'auto'
  },
  img: {
    float: 'right',
    width: '200px'
  }
}

const OurTeam = props => {
  const { classes } = props
  return (
    <Container withShadow>
      <div className={classes.flex}>
        <div className={classes.flex3}>
          <p className={classes.centerAuto}>
            With our team of experienced professional developers we have created
            a curriculum around the needs of non-western students. Our teachers
            are all volunteers and extremely passionate about coding. We believe
            talented refugees are a great opportunity for society and we are
            here to give them a helping hand to make use of their potential.
          </p>
        </div>
        <div className={classes.flex1flex}>
          <div className={classes.marginAuto}>
            <img src={team} alt='our team' className={classes.img} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default withStyles(styles)(OurTeam)
