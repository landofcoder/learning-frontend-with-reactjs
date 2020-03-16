import React, {Component} from "react";
import {connect} from 'react-redux';
import Todo from './todo'

const filter = (todos,filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return {
                todos: todos.todos.filter(todo => !todo.completed),
                nextTodoId: todos.nextTodoId
            };
        case 'SHOW_COMPLETED':
            return {
                todos: todos.todos.filter(todo => todo.completed),
                nextTodoId: todos.nextTodoId
            }
        default: throw new Error('Have no filter');
    }
};

class TodoList extends Component{
    render() {
        return(
            <ul>
                {
                    this.props.todos.map(todo => <Todo text={todo.text} key={todo.id} id={todo.id}/>)
                }
            </ul>
        )
    }
}
const mapStateToProps = (state, ownprops) => {
    return filter(state.todos,state.visible_filter)
};

export default connect(mapStateToProps,null)(TodoList)