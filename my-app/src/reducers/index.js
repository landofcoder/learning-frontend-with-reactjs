import {combineReducers} from 'redux'
import todos_reducer from './todos'
import visible_filter_reducer from './visible_filter'

export const rootreducer = combineReducers({todos: todos_reducer, visible_filter: visible_filter_reducer});