import {fromJS} from 'immutable';
import * as types from '../constants/index';
import {getApiList, inputName} from "../actions/main-actions";
import {number} from "prop-types";

const defaultState = fromJS({
    example1: {
        input: "",
        output: "",
        listData: [],
        editItemIndex: -1,
        editItem: {},
        newId:'',
        newName:'',
        newAge:'',
        newSalary:''
    }
});

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.INPUT_NAME:
            return state.setIn(['example1', 'inputName'], action.text);
        case types.INPUT_SALARY:
            return state.setIn(['example1', 'inputSalary'], parseInt(action.payload));
        case types.INPUT_AGE:
            return state.setIn(['example1', 'inputAge'], parseInt(action.payload));
        case types.ADD_SUCCESS:
            const employee_name = state.getIn(['example1', 'inputName']);
            console.log('show name:', employee_name)
            const employee_salary = state.getIn(['example1', 'inputSalary']);
            console.log('show salary:', employee_salary)
            const employee_age = state.getIn(['example1', 'inputAge']);
            console.log('show age:', employee_age);
            let initList = state.getIn(['example1', 'listData']);
            initList.push({id: (initList.length + 1).toString(), employee_age, employee_name, employee_salary})
            return state.setIn(['example1', 'listData'], Array.from(initList));

        case types.INPUT:
            return state.setIn(['example1', 'input'], action.text);
        case types.OUTPUT:
            const input = state.getIn(['example1', 'input']);
            return state.setIn(['example1', 'output'], input);

        case types.RECEIVED_DATA_LIST:
            console.log('received:', action);
            return state.setIn(['example1', 'listData'], action.payload);

        case types.GET_DETAILS:
            let updateList = state.getIn(['example1', 'listData'])
            let index = 0;
            for (let i = 0; i < updateList.length; i++) {
                if (updateList[i].id === action.id) {
                    index = i;
                }
            }
            const detailItem = updateList[index];
            console.log('item:', detailItem);
            const newId = detailItem.id
            const newName = detailItem.employee_name
            const newSalary = detailItem.employee_salary
            const newAge = detailItem.employee_age
            return state.setIn(['example1', 'editItem'], detailItem).setIn(['example1', 'editItemIndex'], index).setIn(['example1', 'newId'], newId).setIn(['example1', 'newName'], newName).setIn(['example1', 'newSalary'], newSalary).setIn(['example1', 'newAge'], newAge);
        case types.SAVE:
            const id = state.getIn(['example1', 'newId']);
            const name = state.getIn(['example1', 'newName']);
            const salary = state.getIn(['example1', 'newSalary']);
            const age = state.getIn(['example1', 'newAge']);
            let item = {
                id: id,
                name: name,
                salary:salary,
                age: age
            };
            console.log('newItem:', item)
            let saveList = state.getIn(['example1', 'listData'])
            let index1 = state.getIn(['example1', 'editItemIndex'])
            console.log('index1:', index1)
            if(saveList[index1].id === id){
                saveList.splice(index1, 1,item);
            }else{
                saveList.push(item);
            }
            return state.setIn(['example1', 'listData'], Array.from(saveList));
        case types.INPUT_UPDATE_ID:
            return state.setIn(['example1', 'newId'],action.text);
        case types.INPUT_UPDATE_NAME:
            return state.setIn(['example1', 'newName'],action.text);
        case types.INPUT_UPDATE_SALARY:
            return state.setIn(['example1', 'newSalary'],action.text);
        case types.INPUT_UPDATE_AGE:
            return state.setIn(['example1', 'newAge'],action.text);

        case types.DELETE_SUCCESS:
            let listArr = state.getIn(['example1', 'listData']);
            listArr.splice(action.id, 1);
            console.log("after change");
            console.log(listArr);
            return state.setIn(['example1', 'listData'], Array.from(listArr));

        default:
            return state;
    }
};

export default mainReducer;
