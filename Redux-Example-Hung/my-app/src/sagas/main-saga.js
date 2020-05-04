import {takeEvery, put, call} from "redux-saga/effects";
import * as types from '../constants/index';
import {checkDiscountProcessService,} from './service';

function* getApiList() {
    const payload = {testParam: 1};
    const result = yield call(checkDiscountProcessService, payload);
    const data = result.data;
    console.log('result:', data);
    // push data to reducer
    yield put({type: types.RECEIVED_DATA_LIST, payload: data});
}

function* mainSaga() {
    yield takeEvery(types.GET_API_LIST, getApiList);
}

export default mainSaga;
