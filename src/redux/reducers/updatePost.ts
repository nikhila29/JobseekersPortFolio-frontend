import { UPDATED_POST_FAILURE, UPDATED_POST_SUCCESS, UPDATE_POST } from "../actions/actionTypes";

const initialState = {
    user: null,
    loading: false,
    error: null
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case UPDATE_POST: {
            // console.log('update--', action.payload)
            return {
                ...state,
                user: action.payload,
                loading: true
            }
        }
        case UPDATED_POST_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        }
        case UPDATED_POST_FAILURE: {
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: action.payload.error,
            }
        }
        default: {
            return state ;
        }
    }
}
