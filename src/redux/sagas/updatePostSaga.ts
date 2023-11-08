import { put, call, takeEvery } from "redux-saga/effects";
import { UPDATED_POST_FAILURE, UPDATED_POST_SUCCESS, UPDATE_POST } from "../actions/actionTypes";
import { updateUserAPI } from "../../apis/server";
import { store } from "../store";


// function* updatePost(action: any): Generator<any> {

//     try {
//         const postResponse = yield call(updateUserAPI, action.payload, );
//         yield put({ type: UPDATED_POST_SUCCESS, payload: postResponse });
//     } catch (err) {
//         yield put({ type: UPDATED_POST_FAILURE, payload: err });
//         console.log(err);
//     }
// }


function* updatePost(action: any): Generator<any> {
    // console.log('updatepostsaga----',store.getState().loginUser.user.token, action)
    try {
        const postResponse = yield call(updateUserAPI, action.payload, store.getState().loginUser.user.token);
        yield put({ type: UPDATED_POST_SUCCESS, payload: postResponse });
    } catch (err) {
        yield put({ type: UPDATED_POST_FAILURE, payload: err });
        // console.log(err);
    }
}

export default function* updatePostSaga(): Generator<any> {
    yield takeEvery(UPDATE_POST, updatePost);
}