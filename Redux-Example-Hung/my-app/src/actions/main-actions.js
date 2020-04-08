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

export function getApiList() {
    return {
        type: types.GET_API_LIST
    }
}