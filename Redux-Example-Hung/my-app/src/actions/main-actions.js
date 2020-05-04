import * as types from '../constants';

export function output() {
    return {
        type: types.OUTPUT
    }
}

export function input(text) {
    return {
        type: types.INPUT,
        text
    }
}
export function inputName(text) {
    return {
        type: types.INPUT_NAME,
        text
    }
}export function inputSalary( payload) {
    return {
        type: types.INPUT_SALARY,
        payload
    }
}
export function inputAge( payload) {
    return {
        type: types.INPUT_AGE,
        payload
    }
}
export function addSuccess(id){
    return {
        type: types.ADD_SUCCESS,
        id
    }
}
export function deleteSuccess(id){
    return {
        type: types.DELETE_SUCCESS,
        id
    }
}
export function getDetails(id){
    return {
        type: types.GET_DETAILS,
        id
    }
}
export function getApiList() {
    return {
        type: types.GET_API_LIST
    }
}
export function inputUpdateId(text) {
    return {
        type: types.INPUT_UPDATE_ID,
        text
    }
}
export function inputUpdateName(text) {
    return {
        type: types.INPUT_UPDATE_NAME,
        text
    }
}export function inputUpdateSalary(text) {
    return {
        type: types.INPUT_UPDATE_SALARY,
        text
    }
}
export function inputUpdateAge(text) {
    return {
        type: types.INPUT_UPDATE_AGE,
        text
    }
}
export function save(id){
    return {
        type: types.SAVE,
        id
    }
}
