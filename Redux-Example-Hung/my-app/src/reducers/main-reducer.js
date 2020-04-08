import {fromJS} from 'immutable';
import * as types from '../constants/index';

const defaultState = fromJS({
    example1: {
        input: "",
        output: ""
    }
});

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.INPUT:
            return state.setIn(['example1', 'input'], action.text);
        case types.OUTPUT:
            const input = state.getIn(['example1', 'input']);
            return state.setIn(['example1', 'output'], input);
        default:
            return state;
    }
};

export default mainReducer;
