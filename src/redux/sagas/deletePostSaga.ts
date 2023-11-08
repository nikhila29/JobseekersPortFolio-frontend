import { put, call, takeEvery } from "redux-saga/effects";
import { DELETED_POST_FAILURE, DELETED_POST_SUCCESS, DELETE_POST } from "../actions/actionTypes";
import { deleteUserByIdAPI } from "../../apis/server";
import { store } from "../store";


function* deletePost(action: any): Generator<any> {
    // console.log('deeeeee---',action);
    

    try {
        const postResponse = yield call(deleteUserByIdAPI, action.payload, store.getState().loginUser.user.token);
        console.log('delete sagaaaa' , postResponse)
        yield put({ type: DELETED_POST_SUCCESS, payload: postResponse });
    } catch (err) {
        yield put({ type: DELETED_POST_FAILURE, payload: err });
        console.log(err);
    }
}

export default function* deletePostSaga(): Generator<any> {
    yield takeEvery(DELETE_POST, deletePost);
}
