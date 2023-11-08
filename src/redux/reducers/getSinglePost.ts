import { GET_SINGLE_POST, GOT_SINGLE_POST_SUCCESS, GOT_SINGLE_POST_FAILURE } from "../actions/actionTypes";

const initialState: any = {
  users: [],
  loading: true,
  error: null
};

export default function getPosts(state: any = initialState, action: any) {
  switch (action.type) {
    case GET_SINGLE_POST: {

      return {
        ...state,
        loading: true
      }
    }
    case GOT_SINGLE_POST_SUCCESS: {

      // const data: any = action.payload.data.users
      const data: any = action.payload.data
      // console.log(data,'data')
      return {
        ...state,
        users: data,
        loading: false
      };
    }

    case GOT_SINGLE_POST_FAILURE: {
      return {
        ...state,
        users: action.payload,
        error: action.payload.error,
        loading: false
      }
    }
    default: {
      return state;
    }
  }
}

