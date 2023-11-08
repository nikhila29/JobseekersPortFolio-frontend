import { put, call, takeEvery } from "redux-saga/effects";
import { createUserAPI } from "../../apis/server";
import { ADDED_POST_FAILURE, ADDED_POST_SUCCESS, ADD_POST } from "../actions/actionTypes";
import { store } from "../store";

function* addPost(action: any): Generator<any> {
    // console.log('token---', store.getState().loginUser.user.token)
    console.log('action---')
    try {
        const postResponse = yield call(createUserAPI, action.payload, store.getState().loginUser.user.token);
        console.log('saga--', postResponse)
        yield put({ type: ADDED_POST_SUCCESS, payload: postResponse });
    } catch (err) {
        yield put({ type: ADDED_POST_FAILURE, payload: err });
        // console.log(err);
    }
}

export default function* addPostSaga(): Generator<any> {
    yield takeEvery(ADD_POST, addPost);
}