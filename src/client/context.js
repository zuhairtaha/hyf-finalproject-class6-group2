import React from 'react'
import axios from 'axios'

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }
    case 'TOGGLE_LOADING':
      return { ...state, loading: !state.loading }
    case 'ADD_MODULE':
      return { ...state, modules: [...state.modules, action.payload] }
    case 'DELETE_MODULE':
      return {
        ...state,
        modules: state.modules.filter(module => module.id !== action.payload)
      }
    case 'ADD_CLASS':
      return { ...state, classes: [...state.classes, action.payload.item] }
    case 'EDIT_CLASS':
      action.payload.history.push('/classes')
      return { ...state, classes: [...state.classes, action.payload.item] }
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
      return { ...state, roles: [...state.roles, action.payload] }
    case 'GET_MODULES':
      return { ...state, modules: action.payload }
    case 'GET_USERS':
      return { ...state, users: action.payload }
    case 'GET_ROLES':
      return { ...state, roles: action.payload }
    case 'UPDATE_MODULE':
      return {
        ...state,
        modules: state.modules.map(module =>
          module.id === action.payload.id ? action.payload : module
        )
      }
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
    roles: [],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount() {}

  render = () => (
    <Context.Provider value={this.state}>
      {this.props.children}
    </Context.Provider>
  )
}

export const Consumer = Context.Consumer
