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
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyItems: 'center',
    gridGap: '16px',
    maxWidth: '1248px',
    margin: '1rem auto',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  },
  imgWrapper: {},
  img: {
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '10vh'
    }
  }
})

const Sponsors = props => {
  const { classes } = props
  return (
    <Container withShadow>
      <div className={classes.root}>
        <h3 className='home-title'>Official partners & supporters</h3>
        <div className={classes.imagesContainer}>
          <div className={classes.imgWrapper}>
            <img className={classes.img} src={APMS} alt='' />
          </div>
          <div className={classes.imgWrapper}>
            <img className={classes.img} src={RSV} alt='' />
          </div>
          <div className={classes.imgWrapper}>
            <img className={classes.img} src={donationslogo} alt='' />
          </div>
          <div className={classes.imgWrapper}>
            <img className={classes.img} src={foreningen} alt='' />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default withStyles(styles)(Sponsors)
