import { GET_ALL_REGISTERED_USERS, GOT_ALL_REGISTERED_USERS_FAILURE, GOT_ALL_REGISTERED_USERS_SUCCESS } from "../actions/actionTypes";

const initialState: any = {
  users: [],
  loading: true,
  error: null
};

export default function getAllRegisteredUsers(state: any = initialState, action: any) {
  switch (action.type) {
    case GET_ALL_REGISTERED_USERS: {

      return {
        ...state,
        loading: true
      }
    }
    case GOT_ALL_REGISTERED_USERS_SUCCESS: {

      const data: any = action.payload.data.allUsers
      // console.log('all users---', action.payload)
      // const data: any = action
      // console.log(data,'data')
      return {
        ...state,
        users: data,
        loading: false
      };
    }

    case GOT_ALL_REGISTERED_USERS_FAILURE: {
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

