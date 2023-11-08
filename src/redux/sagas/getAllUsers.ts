import {  put, call, takeEvery, takeLatest,all } from "redux-saga/effects";
import { GET_ALL_REGISTERED_USERS, GOT_ALL_REGISTERED_USERS_FAILURE, GOT_ALL_REGISTERED_USERS_SUCCESS } from "../actions/actionTypes";
import { getAllRegisteredUsers } from "../../apis/server";
import { store } from "../store";

function* fetchAllUsers(): Generator<any> {
    // console.log('getAllUserssaga token----',store.getState().loginUser.user.token)
    try {
        const postsResponse = yield getAllRegisteredUsers(store.getState().loginUser.user.token);
    //    console.log(postsResponse)
        yield put({ type: GOT_ALL_REGISTERED_USERS_SUCCESS, payload: postsResponse });
        
    } catch (err) {
        yield put({ type: GOT_ALL_REGISTERED_USERS_FAILURE, payload: err });
        // console.log(err);
    }
}

// function* fetchPosts(): Generator<any> {
   
//     try {
//         const postsResponse = yield call(getAllRegisteredUsers);
//         console.log('getpostsaga--', postsResponse);
        
//         yield put({ type: GOT_ALL_REGISTERED_USERS_SUCCESS, payload: postsResponse });
        
//     } catch (err) {
//         yield put({ type: GOT_ALL_REGISTERED_USERS_FAILURE, payload: err });
//         console.log(err);
//     }
// }

function* watcherSaga(): Generator<any> {
    yield takeLatest(GET_ALL_REGISTERED_USERS, fetchAllUsers);
}

export function* getAllRegisteredUsersSaga(): Generator<any> {
    yield all([watcherSaga()]);
}
