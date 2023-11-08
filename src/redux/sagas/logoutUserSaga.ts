import {  put, call, takeEvery, takeLatest,all } from "redux-saga/effects";
import { LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE } from "../actions/actionTypes";
import { logoutAPI } from "../../apis/server";

function* logoutUser(): Generator<any> {
   
    try {
        const postsResponse = yield call(logoutAPI);
        // console.log('logout--',postsResponse);
        
        yield put({ type: LOGOUT_USER_SUCCESS, payload: postsResponse });
        
    } catch (err) {
        yield put({ type: LOGOUT_USER_FAILURE, payload: err });
        // console.log(err);
    }
}

function* watcherSaga(): Generator<any> {
    yield takeLatest(LOGOUT_USER, logoutUser);
}

export function* logoutSaga(): Generator<any> {
    yield all([watcherSaga()]);
}
