import React, {Component} from "react";
import  {addTodo} from "../../actions";
import {connect} from 'react-redux';

class AddTodo extends Component{
    constructor() {
        super();
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(e){
        e.preventDefault();
        let text = document.getElementById("text").value;
        this.props.addTodo(text)
    }
    render(){
        return(
            <form onSubmit={e => this.handleAddTodo(e)}>
                <input type="text" id="text"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
//AddTodo có thể gọi được action addTodo thông qua props của nó
export default connect(null,{addTodo})(AddTodo); //connect den store