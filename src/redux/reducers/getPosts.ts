import { GET_POSTS, GOT_POSTS_FAILURE, GOT_POSTS_SUCCESS } from "../actions/actionTypes";

const initialState: any = {
  users: [],
  loading: true,
  error: null
};

export default function getPosts(state: any = initialState, action: any) {
  switch (action.type) {
    case GET_POSTS: {

      return {
        ...state,
        loading: true
      }
    }
    case GOT_POSTS_SUCCESS: {

      // const data: any = action.payload.data.users
      const data: any = action.payload.data
      console.log(data,'data')
      return {
        ...state,
        users: data,
        loading: false
      };
    }

    case GOT_POSTS_FAILURE: {
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

