import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import shape from './background-shapes/shape.svg'
import  './background-shapes/shape.css'

const styles = () => ({
  root: {
    width: '100%',
    overflow: 'hidden',
    display: 'block',
    flexDirection: 'column',
    position: 'relative',
    minHeight: 'calc(100vh - 64px)',
  }
})

function Layout(props) {
  const { classes, children } = props

  return (
    <div className={classes.root}>
      <img src={shape} alt='' className='shape_1' />
      <img src={shape} alt='' className='shape_2' />
      {children}
    </div>
  )
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Layout)
