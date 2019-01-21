import React from 'react'
import axios from 'axios'
//import qs from 'qs'

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      axios
        .delete(`/api/users/${action.payload}`)
        .then(console.log)
        .catch(console.error)
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }
    case 'TOGGLE_LOADING':
      return {
        ...state,
        loading: !state.loading
      }
    case 'RESET_REDIRECT':
      return {
        ...state,
        redirect: false
      }
    case 'ADD_MODULE':
      axios
        .post(`/api/modules`, action.payload)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        })
      return {
        ...state,
        modules: [...state.modules, action.payload]
      }

    case 'DELETE_MODULE':
      axios
        .delete(`/api/modules/${action.payload}`)
        .then(console.log)
        .catch(console.error)
      return {
        ...state,
        modules: state.modules.filter(module => module.id !== action.payload)
      }
    case 'ADD_CLASS':
      action.payload.history.push('/classes')
      return {
        ...state,
        classes: [...state.classes, action.payload.item]
      }
    case 'EDIT_CLASS':
      action.payload.history.push('/classes')
      return {
        ...state,
        classes: [...state.classes, action.payload.item]
      }
    case 'ADD_ROLE':
      console.log('adding role context')
      axios
        .post(`/api/roles`, action.payload)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        })
      return {
        ...state,
        roles: [action.payload, ...state.roles]
      }
    case 'GET_MODULES':
      return { ...state, modules: action.payload }
    default:
      return state
  }
}

export class Provider extends React.Component {
  state = {
    users: [],
    modules: [],
    classes: [],
    loading: false,
    groups: [],
    items: [],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount() {
    axios
      .get('/api/users')
      .then(res => this.setState({ users: res.data }))
      .catch(console.error)

    axios
      .get('/api/roles')
      .then(res => this.setState({ roles: res.data }))
      .catch(console.error)

  }

  render = () => (
    <Context.Provider value={this.state}>
      {this.props.children}
    </Context.Provider>
  )
}

export const Consumer = Context.Consumer
