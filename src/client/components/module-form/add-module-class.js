import React, { Component } from 'react'

// export default (props) => {
//     // Do the fetching, and render the form only when the data is here
//     return (
//         <ModuleForm {...props} isEditing={true} />
//     )
// }

class AddtoClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      message: 'Hang in there...',
      classid: null,
      modules: [],
      moduleslocal: [],
      avaiblemodules: [],
      unique1:[]
    }
  }
componentWillMount(){
    const id = this.props.match.params.id
    console.log(id)
    fetch('/api/modules')
      .then(res => res.json())
      .then(modules => this.setState({ modules }))
      .catch(console.log)
    fetch(`/api/classesmodules/${id}`)
      .then(res => res.json())
      .then(res =>console.log(res))
      .then(moduleslocal => this.setState({ moduleslocal }))
      .catch(console.log)
      
}
  componentDidMount() {
    var uniqueResultOne = this.state.moduleslocal.filter(function(obj) {
        return !this.state.modules.some(function(obj2) {
            return obj.module === obj2.module;
        });
    });
    this.setState({unique1:uniqueResultOne},function () {
        console.log(this.state.avaiblemodules);
    })
  }
  render() {
    const { moduleslocal ,modules,avaiblemodules,unique1} = this.state
    return (
      //this.state.isLoading ?
      // <div>{this.state.message}</div>
      //:
      //<ModuleForm {...this.props} moduleData={this.state.moduleData} id={this.props.match.params.moduleid} AddtoClass={true} />
      <div>
        <h1>add module to class</h1>
          {avaiblemodules.map(module => (
            <div key={module.moduleid} className="col-md-6">
              <div className="card shadow-sm mb-3">
                <div className="card-body">
                  <h2 className="card-title">{module.module}</h2>
                  <h5>Description</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {module.description}
                  </h6>
                  <p className="card-text">
                    START : {module.start}
                    <br />
                    length: {module.length}
                  </p>

                </div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

export default AddtoClass
