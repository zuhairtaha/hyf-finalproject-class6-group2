import React from 'react'
//import NavLink from 'react-router-dom/es/NavLink'
//import { Link } from 'react-router-dom'
import 'react-picky/dist/picky.css'
import Picky from "react-picky";
import "react-picky/dist/picky.css";
import Class from './Classesveiw'

let colors = ['orange', 'red', 'blue', 'purple']
class Classes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: [],
      arrayValue: [],
      bigList :[]
    }
    this.selectMultipleOption = this.selectMultipleOption.bind(this);
  }
  
  selectMultipleOption(value) {
    console.log("Val", value);
    this.setState({arrayValue : value });
    console.log(this.state.arrayValue)
  }
  
  deleteMentor(id) {
    this.setState(state => ({
      classes: [...state.classes.filter(state => state.id !== id)]
    }))

    fetch(`api/classes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  componentDidMount() {
    this.setState({arrayValue : this.state.value });
    console.log(this.state.arrayValue)

    fetch('/api/classes')
      .then(res => res.json())
      .then(respons => {
        console.log(respons)
        this.setState({bigList : respons })
        //this.setState({bigList:respons})
      console.log(this.state.bigList)

      })
      .catch(console.log)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Multi select</h3>
            <Picky
              value={this.state.arrayValue}
              onChange={this.selectMultipleOption}
              options={this.state.bigList.map(data => {return data.classname}  )}
              open={true}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={true}
              includeFilter={true}
              dropdownHeight={600}
            />
          </div>
          <Class classdata={this.state.arrayValue} />
        </div>
      </div>
    );
  }
}
 /* render() {
    const {classes}  = this.state
    console.log(classes)
    return (
      <div className="container">
        <h2>Classes </h2>
        {classes.length === 0 ? (
          <Progress />
        ) : (
          <div>
            {classes.map(classdata => (
              
              <div key={classdata.classid} className="col-md-6">
                 <div className="card shadow-sm mb-3">
                   <div className="card-body" />
                    <Class classdata={classdata} key={classdata.classid} />
                   </div>
                </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}*/

export default Classes
