import React from 'react'
//import NavLink from 'react-router-dom/es/NavLink'
//import { Link } from 'react-router-dom'
import 'react-picky/dist/picky.css'
import Picky from 'react-picky'
import 'react-picky/dist/picky.css'
import Class from './Classesveiw'
import { NULL } from 'mysql2/lib/constants/types'
class Classes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: NULL,
      arrayValue: [],
      bigList: [],
      senddata :[]
    }
    this.selectMultipleOption = this.selectMultipleOption.bind(this)
  }

  selectMultipleOption(value) {
    console.log('Val', value)
    var result =[]
    value.forEach(element => {
      //const x = this.state.bigList.filter(w => w.classname === element)
      //console.log( x)
      //result = Object.assign({}, x, ...result);
      result.push(this.state.bigList.find(w => w.classname === element))
    });
    this.setState({arrayValue: value})
    this.setState({senddata:result})
    console.log(result)
    console.log(this.state.senddata)

  }

  
  componentDidMount() {
    fetch('/api/classes')
      .then(res => res.json())
      .then(respons => {
        console.log(respons)
        this.setState({ bigList: respons })
        //console.log(this.state.bigList)
      })
      .catch(console.log)
  }
  render() {
    var send = this.state.senddata
   // console.log(send)
    //console.log(list)
    return (
      <div className="container">
        
            <h3>Classes</h3>
            <Picky
              value={this.state.arrayValue}
              onChange={this.selectMultipleOption}
              options={this.state.bigList.map(data => {
                return data.classname
              })}
              open={true}
              valueKey="id"
              labelKey="name"
              multiple={true}
              dropdownHeight={600}
            />
         
          <div className="container">

          {send.map(data => {
            return <Class classdata={data} />
          })}
            </div>

      </div>
         
    )
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
