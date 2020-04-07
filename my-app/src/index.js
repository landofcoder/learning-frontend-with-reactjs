import {createStore} from "redux";
import {rootreducer} from "./reducers";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import React,{Component} from "react";
import FilterList from "./container/filter_list";
import AddTodo from "./container/add_todo/Add_todo";
import TodoList from "./container/todo_list";

const store = createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
class App extends Component{
    render() {
        return(
            <>
                <AddTodo/>
                <FilterList/>
                <TodoList/>
            </>
        )
    }
}
render(
    //cung cap store cho nhung component con
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);