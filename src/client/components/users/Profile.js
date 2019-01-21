import React from 'react'
import Container from '../layouts/container'
import axios from 'axios'

class Profile extends React.Component {
  state = {
    auth: false,
    user: {}
  }

  componentDidMount() {
    const userId = this.props.match.params.id
    axios
      .get(`/api/users/${userId}`)
      .then(res => this.setState({ user: res.data }))
      .catch(console.error)
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
             <p><b>user name:</b> {user.name}</p>
             <p><b>user email:</b> {user.email}</p>
          </div>
        )}
      </Container>
    )
  }
}

export default Profile
