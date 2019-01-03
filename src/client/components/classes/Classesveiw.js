import React from 'react'
import Module from '../modules/Module'

class Class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      class: [],
      modulesarr: []
    }
  }
<<<<<<< HEAD
  componentWillReceiveProps({ classdata }) {
    this.setState({ class: this.props.classdata })
  }
  deleteClass(id) {
      fetch(`api/classes/${id}`, {
      method: 'DELETE',
         })
         .then(req=>console.log(req))
  }
=======

  componentWillReceiveProps({classdata}) {
    this.setState({class: this.props.classdata})
  }

>>>>>>> master
  componentDidMount() {
    
    const id = this.props.classdata.classid
    console.log(id)
    fetch(`/api/classesmodules/${ id }`)
      .then(res => res.json())
      .then(modulesarr => this.setState({modulesarr}))
      .catch(console.log)
  }

  componentDidCatch() {
    this.setState({class: this.props.classdata})
    console.log(this.state.class)
  }
<<<<<<< HEAD
  render() {
   
=======

  render() {
    // classdata
>>>>>>> master
    return (
      <div>
        <div className="col-md-6">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
<<<<<<< HEAD
              <h5 className="card-title">{this.props.classdata.classname} </h5>
              <div>
              
                <button classid={this.props.classdata.classid}
                
                
                >Add Module</button>
              </div>
=======
              <h5 className="card-title">{ this.props.classdata.classname } </h5>
>>>>>>> master
              <div className="row">
                { this.state.modulesarr.map(datacm => {
                  return <Module cllmod={ datacm }/>
                }) }
              </div>
              <button
<<<<<<< HEAD
                          className="btn btn-danger"
                onClick={() => this.deleteClass(this.props.classdata.classid)}>
                <i className="fa fa-trash" />
=======
                className="btn btn-danger"
                onClick={ () => console.log('delete') }>
                <i className="fa fa-trash"/>
>>>>>>> master
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
