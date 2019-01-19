import React from 'react'
import Progress from '../layouts/progress'
import ModuleItem from './Module-item'
import { Consumer } from '../../context'

class Modules extends React.Component {
  componentWillMount() {
    document.title = 'modules'
  }

  render = () => {
    return (
      <Consumer>
        {value => {
          const { modules } = value
          return (
            <div className='container'>
             
              {value.modules.length === 0 ? (
                <Progress />
              ) : (
                <div className='members mb-3'>
                  {modules.map(module => (
                    <ModuleItem key={module.id} module={module} />
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

export default Modules
