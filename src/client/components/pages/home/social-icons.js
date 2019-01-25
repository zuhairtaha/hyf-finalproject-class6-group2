import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Container from '../../layouts/container'
import '../../layouts/background-shapes/shape.css'
import GithubIcon from 'mdi-material-ui/GithubCircle'
import LinkedinIcon from 'mdi-material-ui/Linkedin'
import FacebookIcon from 'mdi-material-ui/Facebook'
import TwitterIcon from 'mdi-material-ui/TwitterCircle'
import YoutubeIcon from 'mdi-material-ui/Youtube'
import IconButton from '@material-ui/core/IconButton'

const styles = theme => ({
  root: {
    textAlign: 'center'
  }
})

const SocialIcons = props => {
  const { classes } = props
  return (
    <Container withShadow>
      <div className={classes.root}>
      <IconButton component='span'>
        <GithubIcon style={{ color: '#5a5a5a' }} fontSize='large' />
      </IconButton>
      <IconButton component='span'>
        <LinkedinIcon style={{ color: '#0270ad' }} fontSize='large' />
      </IconButton>
      <IconButton component='span'>
        <FacebookIcon style={{ color: '#3a5793' }} fontSize='large' />
      </IconButton>
      <IconButton component='span'>
        <TwitterIcon style={{ color: '#27a5da' }} fontSize='large' />
      </IconButton>
      <IconButton
        href='https://www.youtube.com/channel/UCgWEvuTAyg7qbWcq0M8w4EQ'
        component='span'
      >
        <YoutubeIcon style={{ color: '#ff0000' }} fontSize='large' />
      </IconButton>
    </div>
    </Container>
  )
}

export default withStyles(styles)(SocialIcons)
