import { all } from "redux-saga/effects";
import addPostSaga from "./addPostSaga";
import updatePostSaga from "./updatePostSaga";
import deletePostSaga from "./deletePostSaga";
import { getPostsSaga } from "./getPostsSaga";
import signupUserSaga from "./signupUserSaga";
import loginUserSaga from "./loginUserSaga";
import { logoutSaga } from "./logoutUserSaga";
import { getAllRegisteredUsersSaga } from "./getAllUsers";


export default function* rootSaga(): Generator<any> {
    // console.log('root saga');
    
    yield all([
        signupUserSaga(),
        loginUserSaga(),
        logoutSaga(),
        getAllRegisteredUsersSaga(),
        addPostSaga(),
        updatePostSaga(),
        deletePostSaga(),
        getPostsSaga()
    ])
}