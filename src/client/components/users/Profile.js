import React from 'react'
import Container from '../layouts/container'
import axios from 'axios'

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
    return (
      <Container>
        {Object.entries(user).length !== 0 && (
          <div>
            <img
              style={{ maxWidth: '30%' }}
              src={user.avatar}
              alt={user.name}
            />
            {Object.keys(user).map(
              key =>
                user[key] !== null && (
                  <div key={key}>
                    <b>{key}</b> <span>{user[key]}</span>
                  </div>
                )
            )}
          </div>
        )}
      </Container>
    )
  }
}

export default Profile
