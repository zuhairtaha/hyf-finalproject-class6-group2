import React from 'react'
import Module from '../modules/Module'
//import Progress from '../layouts/Progress'
//import NavLink from 'react-router-dom/es/NavLink'
//import { Link } from 'react-router-dom'

class Class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      class: [],
      modulesarr: []
    }
    //this.componentWillReceiveProps=this.componentWillReceiveProps.bind(this)
  }

  componentWillReceiveProps({ classdata }) {
    this.setState({ class: this.props.classdata })
    console.log(this.state.class)
  }
  componentDidMount() {
    fetch('/api/modules')
      .then(res => res.json())
      .then(modulesarr => this.setState({ modulesarr }))
      .catch(console.log)
  }

  componentDidCatch() {
    this.setState({ class: this.props.classdata })
    console.log(this.state.class)
  }
  render() {
    return (
      <div>
        <div className="col-md-6">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title">{this.props.classdata} </h5>

              <div className="row">
                {this.state.modulesarr.map(datacm => {
                  return <Module cllmod={datacm} />
                })}
              </div>
              <button
                className="btn btn-danger"
                onClick={() => console.log('delete')}
              >
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
      //
    )
  }
}

export default Class
