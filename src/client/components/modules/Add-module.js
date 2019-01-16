import React from 'react'

class AddModule extends React.Component {
  state = {
    localmodules: [],
    avaiablemodules: []
  }

  render = () => {
    return (
      <div>
        <a href=' ' className='btn btn-info'>
          <i className='fa ' aria-hidden='true'>
            {this.props.cllmod.module}
          </i>
        </a>
      </div>
    )
  }
}

export default AddModule
