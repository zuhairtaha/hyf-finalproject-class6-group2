import React from 'react'
import Progress from '../layouts/progress'
import RoleItem from './Role-item'
import { Consumer } from '../../context'

class Roles extends React.Component {
  componentWillMount() {
    document.title = 'roles'
  }

  render = () => {
    return (
      <Consumer>
        {value => {
          const { roles } = value
          console.log(roles)
          return (
            <div className='container'>
              
              {value.roles.length === 0 ? (
                <Progress />
              ) : (
                <div className='members mb-3'>
                  {roles.map(role => (
                    <RoleItem key={role.id} role={role} />
                  ))}
                </div>
              )}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Roles
