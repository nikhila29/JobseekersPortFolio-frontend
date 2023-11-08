import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../actions/actionTypes";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case LOGIN_USER: {
            // console.log('token--', action)
            return {
                ...state,
                user: action.payload,
                loading: true,
                // token: action.payload.data.token
            }
        }
        case LOGIN_USER_SUCCESS: {
            const data: any = action.payload.data
            // console.log('acttttt---', action)
            return {
                ...state,
                user: data,
                loading: false,
            };
        }
        case LOGIN_USER_FAILURE: {
            const data: any = action.payload.response
            // console.log('dddd--', data)
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: data.error,
            }
        }
        default: {
            return  state 
        }
    }
}
