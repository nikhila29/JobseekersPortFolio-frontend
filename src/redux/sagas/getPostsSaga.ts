import {  put, call, takeEvery, takeLatest,all } from "redux-saga/effects";
import { GET_POSTS, GOT_POSTS_FAILURE, GOT_POSTS_SUCCESS } from "../actions/actionTypes";
import { getUsersAPI } from "../../apis/server";
import { store } from "../store";

function* fetchPosts(): Generator<any> {
    // console.log('getpostsaga token----',store.getState().loginUser.user.token)
    try {
        const postsResponse = yield getUsersAPI(store.getState().loginUser.user.token);
       console.log('get post sagaa--',postsResponse)
        yield put({ type: GOT_POSTS_SUCCESS, payload: postsResponse });
        
    } catch (err) {
        yield put({ type: GOT_POSTS_FAILURE, payload: err });
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
    yield takeLatest(GET_POSTS, fetchPosts);
}

export function* getPostsSaga(): Generator<any> {
    yield all([watcherSaga()]);
}
