import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import shape from '../pages/home/shape.svg'

const styles = theme => ({
  root:{
    width:'100%',
    height:'100%',
    overflow:'hidden',
    display:'flex',
    position:'relative'
  },
  card: {
    minWidth: 275,
    maxWidth: 1200,
    width:'100%',
    margin: '1rem auto',
    padding: '1rem 2rem',
    textAlign: 'justify',
    lineHeight: '1.9rem',
    marginTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0'
    }
  }
})

function Container(props) {
  const { classes, children } = props

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <img src={shape} alt='' className='shape_1' />
        <img src={shape} alt='' className='shape_2' />
        {children}
      </Card>
    </div>
  )
}

Container.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Container)
