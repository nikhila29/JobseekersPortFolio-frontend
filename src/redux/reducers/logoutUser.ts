import {
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
} from "../actions/actionTypes";

const initialState = {
    user: null,
    loading: false,
    error: null
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case LOGOUT_USER: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case LOGOUT_USER_SUCCESS: {
            // console.log('logoutstate---', state);
            
            return {
                ...state,
                // user: null,
                loading: false,
                // error: null
            };
        }
        case LOGOUT_USER_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }
        default: {
            return state;
        }
    }
}