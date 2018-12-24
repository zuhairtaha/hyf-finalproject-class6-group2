import React from "react";
import Picky from "react-picky";
import "react-picky/dist/picky.css";

 



class Drop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      arrayValue: [],
      bigList : []
    };
    this.selectOption = this.selectOption.bind(this);
    this.selectMultipleOption = this.selectMultipleOption.bind(this);
  }
/*componentWillMount(){
    fetch('/api/classes')
    .then(res => res.json())
    .then(respons => {
      this.setState({ bigList :respons })
      console.log(this.state.classes)
    })
    .catch(console.log)
}*/
componentDidMount(){
   this.setState({bigList:this.props.option})
   console.log(this.state.bigList)
}
  selectOption(value) {
    console.log("Vals", value);
    this.setState({ value });
  }
  selectMultipleOption(value) {
    console.log("Val", value);
    this.setState({ arrayValue: value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Multi select</h3>
            <Picky
              value={this.state.arrayValue}
              options={this.state.bigList}
              onChange={this.selectMultipleOption}
              open={true}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={true}
              includeFilter={true}
              dropdownHeight={600}
            />
          </div>
          
        </div>
      </div>
    );
  }
}

export default Drop