import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {input,output} from '../../actions/main-actions';

class Sum extends Component {
    componentDidMount() {
        console.log('sum:', this.props.sum);
    }

    constructor(props) {
        super(props);
    }
    onInputChange = (e) => {
        this.props.input(e.target.value);
    };

    render() {
        const inputHere = this.props.example1.get('input');
        const {output} = this.props;

        return (
            <div>
                <h4>Type here :</h4>
                <input onChange={this.onInputChange} value={inputHere}/>
                <br/>
                <p>
                    output: {inputHere}
                </p>
            </div>
        )
    }
}
//map các state tu reducers
const mapStateToProps = state => ({
    example1: state.getIn(['mainReducer', 'example1']),
    output: state.getIn(['mainReducer', 'example1', 'output']),
});
//map các action tu action
const mapDispatchToProps = dispatch => {
    return {
        output: () => dispatch(output()),
        input: (text) => dispatch(input(text))
        // changeNumberBPassword: (payload) => dispatch(changeNumberBPassword(payload))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sum);
