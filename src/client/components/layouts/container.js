import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 1200,
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

  return <Card className={classes.card}>{children}</Card>
}

Container.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Container)
