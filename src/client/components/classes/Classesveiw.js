import React from 'react'
//import Progress from '../layouts/Progress'
//import NavLink from 'react-router-dom/es/NavLink'
import { Link } from 'react-router-dom'

class Class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: []
          }
          //this.componentWillReceiveProps=this.componentWillReceiveProps.bind(this)
      }
     
      componentWillReceiveProps({classdata}) {
        this.setState({class :this.props.classdata})
        console.log(this.state.class)
}
componentDidCatch(){
  this.setState({class :this.props.classdata})
  console.log(this.state.class)
}
     render () {

     return (
      <div >
          <div className="col-md-6">
            <div className="card shadow-sm mb-3">
              <div className="card-body">
                <h5 className="card-title">{this.props.classdata}  </h5>
            
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
