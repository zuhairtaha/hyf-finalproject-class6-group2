import React from 'react'
import { classTitle, getItem } from './components/classes/GroupsItems'

const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }

    case 'TOGGLE_LOADING':
      return {
        ...state,
        loading: action.payload ? action.payload : !state.loading
      }

    case 'ADD_MODULE':
      return { ...state, modules: [...state.modules, action.payload] }

    case 'ADD_CLASS_MODULE':
      return { ...state, items: [...state.items, getItem(action.payload)] }

    case 'UPDATE_MODULE':
      return {
        ...state,
        modules: state.modules.map(module =>
          module.id === action.payload.id ? action.payload : module
        )
      }

    case 'UPDATE_CLASS_MODULE':
      return { ...state, items: action.payload }

    case 'UPDATE_MOVED_ITEM':
      return {}

    case 'DELETE_MODULE':
      return {
        ...state,
        modules: state.modules.filter(module => module.id !== action.payload)
      }

    case 'DELETE_CLASS':
      return {
        ...state,
        groups: state.groups.filter(group => group.id !== action.payload),
        items: state.items.filter(item => item.group !== action.payload)
      }

    case 'DELETE_CLASS_MODULE':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }

    case 'ADD_CLASS': {
      const { id, name } = action.payload
      return {
        ...state,
        groups: [...state.groups, { id, title: classTitle(name, id) }]
      }
    }

    case 'EDIT_CLASS': {
      const { id, name } = action.payload
      return {
        ...state,
        groups: state.groups.map(group =>
          group.id === id ? { id, title: classTitle(name, id) } : group
        )
      }
    }

    case 'ADD_ROLE':
      return { ...state, roles: [...state.roles, action.payload] }

    case 'GET_MODULES':
      return { ...state, modules: action.payload }

    case 'GET_USERS':
      return { ...state, users: action.payload }

    case 'GET_ROLES':
      return { ...state, roles: action.payload }

    case 'SET_CLASSES_CALENDER':
      return { ...state, ...action.payload }

    default:
      return state
  }
}

export class Provider extends React.Component {
  state = {
    users: [],
    modules: [],
    loading: false,
    roles: [],
    // calender props start:
    groups: [], // group is class
    items: [], // item is class_module
    defaultTimeStart: null,
    defaultTimeEnd: null,
    // calender props end;
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
