import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Container from '../../layouts/container'
import APMS from './images/APMS.jpg'
import RSV from './images/RSV.jpg'
import donationslogo from './images/donationslogo.jpg'
import foreningen from './images/foreningen.jpg'

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  imagesContainer: {
    display: 'flex'
  },
  image: {
    flex: 1
  },
  img: {
    maxWidth: '100%'
  }
})

const Sponsors = props => {
  const { classes } = props
  return (
    <Container withShadow>
      <div className={classes.root}>
        <h3 className='home-title'>Official partners & supporters</h3>
        <div className={classes.imagesContainer}>
          <div className={classes.image}>
            <img className={classes.img} src={APMS} alt='' />
          </div>
          <div className={classes.image}>
            <img className={classes.img} src={RSV} alt='' />
          </div>
          <div className={classes.image}>
            <img className={classes.img} src={donationslogo} alt='' />
          </div>
          <div className={classes.image}>
            <img className={classes.img} src={foreningen} alt='' />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default withStyles(styles)(Sponsors)
