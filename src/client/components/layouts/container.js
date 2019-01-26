import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import Card from '@material-ui/core/Card'
import Layout from './index'

const styles = theme => ({
  root: {
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  card: {
    minWidth: 275,
    maxWidth: 1200,
    width: '100%',
    height: 'auto',
    display: 'table',
    margin: '1rem auto',
    padding: '1rem 2rem',
    textAlign: 'justify',
    lineHeight: '1.9rem',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0',
      margin: '0 0 1px 0',
    }
  },
  shadow: {
    boxShadow: '10.565px 22.658px 50px 0 rgba(0,0,0,.1)',
    color: '#555',
    lineHeight: '2rem',
    marginBottom: '3.5rem',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0',
      margin: '0 0 1px 0',
    }
  },
  noStyle: {
    background: 'none',
    boxShadow: 'none',
    padding: 0
  }
})

function Container(props) {
  const { withLayout } = props
  return (
    <>
      {withLayout ? (
        <Layout>
          <CardContainer {...props} />
        </Layout>
      ) : (
        <CardContainer {...props} />
      )}
    </>
  )
}

function CardContainer({ classes, style, children, withShadow, noStyle }) {
  return (
    <Card
      className={classNames(
        classes.card,
        {
          [classes.shadow]: withShadow === true
        },
        {
          [classes.noStyle]: noStyle === true
        }
      )}
      style={style}
    >
      {children}
    </Card>
  )
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  withLayout: PropTypes.bool,
  withShadow: PropTypes.bool,
  noStyle: PropTypes.bool
}

export default withStyles(styles)(Container)
