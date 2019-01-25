import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Container from '../layouts/container'
import axios from 'axios'

const styles = theme => ({
  root: {
    display: 'flex'
  },
  left: {
    flex: 1,
    display: 'flex'
  },
  marginAuto: {
    margin: 'auto',
    textAlign:'center'
  },
  img: {
    maxWidth: '300px',
    borderRadius: '50%',
    boxShadow:'3px 3px 25px rgba(0,0,0,.05)'
  },
  flex1: {
    flex: 1
  }
})

class Profile extends React.Component {
  state = {
    auth: false,
    user: {}
  }

  fetchUser() {
    const userId = this.props.match.params.id
    axios
      .get(`/api/users/${userId}`)
      .then(res => {
        document.title = res.data.name
        return this.setState({ user: res.data })
      })
      .catch(console.error)
  }

  componentDidMount() {
    this.fetchUser()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    prevProps !== this.props && this.fetchUser()
  }

  render = () => {
    const { user } = this.state
    const { classes } = this.props
    return (
      <Container withLayout>
        {Object.entries(user).length !== 0 && (
          <div className={classes.root}>
            <div className={classes.left}>
              <div className={classes.marginAuto}>
                <img
                  className={classes.img}
                  src={user.avatar}
                  alt={user.name}
                />
                <h2>{user.name}</h2>
              </div>
            </div>
            <div className={classes.flex1}>
              {Object.keys(user).map(
                key =>
                  user[key] !== null && (
                    <div key={key}>
                      <b>{key}</b>{' '}
                      {key === 'linkedin' ? (
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={user[key]}
                        >
                          {user[key]}
                        </a>
                      ) : key === 'email' ? (
                        <a
                          target='_top'
                          rel='noopener noreferrer'
                          href={'mailto:' + user[key]}
                        >
                          {user[key]}
                        </a>
                      ) : (
                        <span>{user[key]}</span>
                      )}
                    </div>
                  )
              )}
            </div>
          </div>
        )}
      </Container>
    )
  }
}

export default withStyles(styles)(Profile)
