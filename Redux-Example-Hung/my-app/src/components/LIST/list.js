import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {
    input,
    output,
    getApiList,
    deleteSuccess,
    inputName,
    inputSalary,
    inputAge,
    addSuccess,
    getDetails,
    inputUpdateAge,
    inputUpdateName,
    inputUpdateSalary,
    inputUpdateId,
    save
} from '../../actions/main-actions';
import mainReducer from "../../reducers/main-reducer";
class Sum extends Component {
    componentDidMount() {
        const {getApiList} = this.props;
        getApiList();
    }
    onInputChange = (e) => {
        this.props.input(e.target.value);
    };
    onChangeName = (e) => {
        this.props.inputName(e.target.value);
    };
    onChangeSalary = (e) => {
        this.props.inputSalary(e.target.value);
    };
    onChangeAge = (e) => {
        this.props.inputAge(e.target.value);
    };
    onUpdateId = (e) => {
        this.props.inputUpdateId(e.target.value);
    };
    onUpdateName = (e) => {
        this.props.inputUpdateName(e.target.value);
    };
    onUpdateSalary = (e) => {
        this.props.inputUpdateSalary(e.target.value);
    };
    onUpdateAge = (e) => {
        this.props.inputUpdateAge(e.target.value);
    };
    render() {
        const inputHere = this.props.example1.get('input');

        return (
            <div>
                <div style={{width:"20%", float:"left", height:"650px", backgroundImage:"linear-gradient(#e1eec3,#f05053)"}}>
                    <h4  style={{marginLeft: "30px"}}>Type here :</h4>
                    <input  style={{marginLeft: "30px"}} onChange={this.onInputChange} value={inputHere}/>
                    <br/>
                    <p  style={{marginLeft: "30px"}}>
                        output: {inputHere}
                    </p>
                    <br/>
                    <hr/>
                    <form style={{marginLeft: "30px"}}>
                        <label>
                            <h3>ADD ITEM :</h3>
                            name:<br/>
                            <input type="text"  onChange={this.onChangeName}/>
                            <br/>salary:<br/>
                            <input type="text"  onChange={this.onChangeSalary}/>
                            <br/>age:<br/>
                            <input type="text"  onChange={this.onChangeAge}/>
                            <br/>
                            <br/>
                            <button type="button"  onClick={() => {this.props.addSuccess()}} >
                                Add
                            </button>
                        </label>
                    </form>
                    <hr/>
                    <form style={{marginLeft: "30px"}}>
                        <label>
                            <h3>UPDATE ITEM :</h3>
                            id:<br/>
                            <input type="text" value={this.props.newId} name="id" onChange={this.onUpdateId}/>
                            <br/>name:<br/>
                            <input type="text" value={this.props.newName} name="name" onChange={this.onUpdateName}/>
                            <br/>salary:<br/>
                            <input type="text" value={this.props.newSalary} name="salary" onChange={this.onUpdateSalary}/>
                            <br/>age:<br/>
                            <input type="text" value={this.props.newAge} name="age" onChange={this.onUpdateAge}/>
                            <br/>
                            <br/>
                            <button type="button"  onClick={() => {this.props.save(this.props.newId)}} >
                                Save
                            </button>
                        </label>
                    </form>
                </div>
                <div style={{float:"right",width:"80%",height:"650px",backgroundImage:"linear-gradient(#83a4d4,#b6fbff)"}}>
                    <div style={{paddingTop:"0px",height:"30px", backgroundImage:"linear-gradient(#83a4d4,#b6fbff)"}}>
                        <h2 style={{marginLeft: "30px"}}>LIST DATA :</h2>
                    </div>
                    <div style={{height:"600px",overflow: "scroll"}}>
                        <ul>
                            {this.props.listData.map((item,index) => (
                                <li key={index}>
                                    <strong>id: </strong> {item.id}
                                    <br/>
                                    <strong>name: </strong> {item.employee_name}
                                    <br/>
                                    <strong>salary: </strong> {item.employee_salary}
                                    <br/>
                                    <strong>age: </strong> {item.employee_age}
                                    <br/>
                                    <button
                                        type="button"
                                        onClick={() => this.props.getDetails(item.id)}>
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {this.props.deleteSuccess(index)}}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

//map các state tu reducers
const mapStateToProps = state => ({
    example1: state.getIn(['mainReducer', 'example1']),
    output: state.getIn(['mainReducer', 'example1', 'output']),
    listData: state.getIn(['mainReducer', 'example1', 'listData']),
    listArr: state.getIn(['mainReducer', 'example1', ' listArr']),
    editItemIndex: state.getIn(['mainReducer', 'example1', 'editItemIndex']),
    editItem: state.getIn(['mainReducer', 'example1', 'editItem']),
    newId: state.getIn(['mainReducer', 'example1', 'newId']),
    newName: state.getIn(['mainReducer', 'example1', 'newName']),
    newSalary: state.getIn(['mainReducer', 'example1', 'newSalary']),
    newAge: state.getIn(['mainReducer', 'example1', 'newAge'])
});
//map các action tu action
const mapDispatchToProps = dispatch => {
    return {
        output: () => dispatch(output()),
        input: (text) => dispatch(input(text)),
        inputName: (text) => dispatch(inputName(text)),
        inputSalary: (payload) => dispatch(inputSalary(payload)),
        inputAge: (payload) => dispatch(inputAge(payload)),
        getApiList: () => dispatch(getApiList()),
        deleteSuccess: (id) => dispatch(deleteSuccess(id)),
        addSuccess: (id) => dispatch(addSuccess(id)),
        getDetails: (id) => dispatch(getDetails(id)),
        inputUpdateId: (text) => dispatch(inputUpdateId(text)),
        inputUpdateName: (text) => dispatch(inputUpdateName(text)),
        inputUpdateSalary: (payload) => dispatch(inputUpdateSalary(payload)),
        inputUpdateAge: (payload) => dispatch(inputUpdateAge(payload)),
        save: (id) => dispatch(save(id)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sum);
