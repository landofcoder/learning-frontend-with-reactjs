import React, {Component} from "react";
import {connect} from 'react-redux';
import Todo from './todo'

const filter = (todos,filter) => {
    switch (filter) {
        case 'SHOW_LIST':
            return todos;
        case 'LIST_ACTIVE':
            return {
                todos: todos.todos.filter(todo => !todo.completed),
                nextTodoId: todos.nextTodoId
            };
        case 'LIST_COMPLETED':
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
//cây state thay đổi thì sẽ trả về cho TodoList một data là kết quả của function filter(state.todos, state.visible_filter).
const mapStateToProps = (state, ownprops) => {
    return filter(state.todos,state.visible_filter)
};

export default connect(mapStateToProps,null)(TodoList)