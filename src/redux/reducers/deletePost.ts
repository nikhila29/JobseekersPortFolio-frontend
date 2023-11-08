import { DELETED_POST_FAILURE, DELETED_POST_SUCCESS, DELETE_POST } from "../actions/actionTypes";

const initialState = {
    user: null,
    loading: false,
    error: null
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case DELETE_POST: {
            // console.log('delete post--',action);
            
            return {
                ...state,
                // user: action.payload,
                loading: true
            }
        }
        case DELETED_POST_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        }
        case DELETED_POST_FAILURE: {
            return {
                ...state,
                user: action.payload,
                error: action.payload.error,
            }
        }
        default: {
            return state ;
        }
    }
}
