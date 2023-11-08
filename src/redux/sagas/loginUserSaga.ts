import { put, call, takeEvery } from "redux-saga/effects";
import { loginAPI } from "../../apis/server";
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../actions/actionTypes";

function* loginUser(action: any): Generator<any> {
      const {navigate, ...formData } = action.payload
    
    try {
        const postResponse: any = yield call(loginAPI, formData);
        // console.log('saggaaa---',postResponse.data.token);
        if(postResponse.data.token) {
            // console.log('login sagaaa--', postResponse.data.user.role)
            yield put({ type: LOGIN_USER_SUCCESS, payload: postResponse });
            if(postResponse?.data?.user?.role === 'recruiter'){
                navigate('/dashboard');
            } else if(postResponse?.data?.user?.role === 'employee'){
                navigate('/grid');
            }
            
        } else  {
            yield put({ type: LOGIN_USER_FAILURE, payload: "Something went wrong" });
        }
    } catch (err) {
        yield put({ type: LOGIN_USER_FAILURE, payload: err });
        // console.log(err);
    }
}

export default function* loginUserSaga(): Generator<any> {
    yield takeEvery(LOGIN_USER, loginUser);
}