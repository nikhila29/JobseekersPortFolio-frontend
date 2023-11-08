import { SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE } from "../actions/actionTypes";

const initialState = {
    user: null,
    loading: false,
    error: null
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case SIGNUP_USER: {
            return {
                ...state,
                user: action.payload,
                loading: true,
                error: null,
                
            }
        }
        case SIGNUP_USER_SUCCESS: {
            const data: any = action.payload.data
            // console.log('acttttt---', data)
            return {
                ...state,
                // error: data.error,
                loading: false,
                user: data
            };
        }
        case SIGNUP_USER_FAILURE: {
            const data: any = action.payload
            // console.log('sign up dddd--', data.response)
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: data.error,
            }
        }
        default: {
            return state;
        }
    }
}
