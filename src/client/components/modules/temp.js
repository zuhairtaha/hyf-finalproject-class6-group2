import React from 'react'
import { Consumer } from '../../context'

class Temp extends React.Component {
  componentDidMount() {
    console.log('temp:', this.props.value)
  }

  render() {
    const { value, children } = this.props
    return <button className={value ? 'dark' : 'light'}>{children}</button>
  }
}

export default React.forwardRef((props, ref) => (
  <Consumer>{value  =><Temp {...props} value={value} ref={ref} />}</Consumer>
))

