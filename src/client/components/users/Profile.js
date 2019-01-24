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
      <Container withLayout={true}>
        {Object.entries(user).length !== 0 && (
          <div style={{display:'flex'}}>
             <div style={{flex:1,display:'flex'}}>
               <div style={{margin:'auto' }}>
               <img
                 style={{ maxWidth: '500px',borderRadius:'50%'}}
                 src={user.avatar}
                 alt={user.name}
               />
               <h2>{user.name}</h2>
             </div>
             </div>
             <div style={{flex:1}}>

               {Object.keys(user).map(
                 key =>
                   user[key] !== null && (
                     <div key={key}>
                       <b>{key}</b> {
                       key==='linkedin'
                         ? <a target='_blank' rel="noopener noreferrer" href={user[key]}>{user[key]}</a>
                         : key==='email'
                         ? <a target='_top' rel="noopener noreferrer" href={'mailto:'+user[key]}>{user[key]}</a>
                         :<span>{user[key]}</span>}
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

export default Profile
