import React from 'react'

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
      return { ...state, classes: [...state.classes, action.payload] }

    case 'EDIT_CLASS':
      return {
        ...state,
        classes: state.classes.map(_class =>
          _class.id === action.payload.id ? action.payload : _class
        )
      }

    case 'ADD_ROLE':
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
