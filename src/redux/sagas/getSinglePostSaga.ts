import {  put, call, takeEvery, takeLatest,all } from "redux-saga/effects";
import { GET_SINGLE_POST, GOT_SINGLE_POST_SUCCESS, GOT_SINGLE_POST_FAILURE } from "../actions/actionTypes";
import { getSinglePostAPI } from "../../apis/server";
import { store } from "../store";

function* fetchPosts(): Generator<any> {
    // console.log('getsinglepostsaga token----',store.getState().loginUser.user.token)
    try {
        const postsResponse = yield getSinglePostAPI(store.getState().loginUser.user.token);
    //    console.log('single post---',postsResponse)
        yield put({ type: GOT_SINGLE_POST_SUCCESS, payload: postsResponse });
        
    } catch (err) {
        yield put({ type: GOT_SINGLE_POST_FAILURE, payload: err });
        // console.log(err);
    }
}

// function* fetchPosts(): Generator<any> {
   
//     try {
//         const postsResponse = yield call(getUsersAPI);
//         console.log('getpostsaga--', postsResponse);
        
//         yield put({ type: GOT_POSTS_SUCCESS, payload: postsResponse });
        
//     } catch (err) {
//         yield put({ type: GOT_POSTS_FAILURE, payload: err });
//         console.log(err);
//     }
// }

function* watcherSaga(): Generator<any> {
    yield takeLatest(GET_SINGLE_POST, fetchPosts);
}

export function* getPostsSaga(): Generator<any> {
    yield all([watcherSaga()]);
}
