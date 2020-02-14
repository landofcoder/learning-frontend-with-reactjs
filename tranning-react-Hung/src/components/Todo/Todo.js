import React, {Component} from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [{id:"",text:""}], text: ''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    render() {
        return(
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new Todo">
                    What needs to be done ?
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        #ADD {this.state.items.length +1}
                    </button>
                </form>
            </div>
        )
    }
    handleChange(e){
        this.setState({text : e.target.value})
    }
    handleSubmit(e){

        e.preventDefault();
        if (!this.state.text){
            return;
        }
        // const newItem = {
        //     text: this.state.text,
        //     id: Date.now()
        // };
        let items = this.state.items;
        console.log(items);
        items.push({id: items.length,text:this.state.text})
        this.setState({item: items,text:''});
    }
}
export class TodoList extends React.Component{
    render() {
        return(
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}
