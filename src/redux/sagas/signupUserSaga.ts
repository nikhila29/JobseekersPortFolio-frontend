import { put, call, takeEvery } from "redux-saga/effects";
import { signupAPI } from "../../apis/server";
import { SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE } from "../actions/actionTypes";

function* signupUser(action: any): Generator<any> {
	// const {navigate} = action.payload;
	const { navigate, ...formData} = action.payload;
// console.log('navigate:', navigate);
	try {
		const postResponse: any = yield call(signupAPI, formData);
		if(postResponse.data.successMessage) {
			yield put({ type: SIGNUP_USER_SUCCESS, payload: postResponse });
			navigate('/login');
		} else  {
			yield put({ type: SIGNUP_USER_SUCCESS, payload: postResponse });
		}
		
	} catch (err) {
		yield put({ type: SIGNUP_USER_FAILURE, payload: err });
		console.log(err);
	}
}

export default function* signupUserSaga(): Generator<any> {
	yield takeEvery(SIGNUP_USER, signupUser);
}