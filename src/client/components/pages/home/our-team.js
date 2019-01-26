import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import team from './images/team.svg'
import Container from '../../layouts/container'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  textContainer: {
    flex: 3,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      order:2
    }
  },
  text: {
    textAlign: 'center',
    margin: 'auto'
  },
  imgContainer: {
    flex: 1,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      order:1
    }
  },
  imgWrapper: {
    margin: 'auto'
  },
  img: {
    float: 'right',
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      maxHeight:'30vh'
    }
  }
})
const OurTeam = props => {
  const { classes } = props
  return (
    <Container withShadow>
      <div className={classes.root}>
        <div className={classes.textContainer}>
          <p className={classes.text}>
            With our team of experienced professional developers we have created
            a curriculum around the needs of non-western students. Our teachers
            are all volunteers and extremely passionate about coding. We believe
            talented refugees are a great opportunity for society and we are
            here to give them a helping hand to make use of their potential.
          </p>
        </div>
        <div className={classes.imgContainer}>
          <div className={classes.imgWrapper}>
            <img src={team} alt='our team' className={classes.img} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default withStyles(styles)(OurTeam)
