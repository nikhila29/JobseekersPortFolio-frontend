import { ADDED_POST_FAILURE, ADDED_POST_SUCCESS, ADD_POST } from "../actions/actionTypes";


const initialState = {
    user: null,
    loading: false,
    error: null
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                user: action.payload,
                loading: true
            }
        }
        case ADDED_POST_SUCCESS: {
            console.log('accc--', action.payload)
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        }
        case ADDED_POST_FAILURE: {
            const data: any = action?.payload?.response?.data
            // console.log('addd', data?.errMsg)
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: data,
            }
        }
        default: {
            return state;
        }
    }
}
