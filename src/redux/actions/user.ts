import {
    GET_POSTS,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST,
    GOT_POSTS_SUCCESS,
    GOT_POSTS_FAILURE,
    ADDED_POST_SUCCESS,
    ADDED_POST_FAILURE,
    UPDATED_POST_SUCCESS,
    UPDATED_POST_FAILURE,
    DELETED_POST_SUCCESS,
    DELETED_POST_FAILURE,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    GET_SINGLE_POST,
    GOT_SINGLE_POST_SUCCESS,
    GOT_SINGLE_POST_FAILURE,
    GET_ALL_REGISTERED_USERS,
    GOT_ALL_REGISTERED_USERS_FAILURE,
    GOT_ALL_REGISTERED_USERS_SUCCESS
} from "./actionTypes";

//signup action
export const signupUser = (data: any) => {
    // console.log('action signup data--',data);
    
    return {
        type: SIGNUP_USER,
        payload: data
    }
}

export const signupUserSuccess = (data: any) => {
    // console.log('action signup data--',data);
    return {
        type: SIGNUP_USER_SUCCESS,
        payload: data
    }
}


export const signupUserFailure = (data: any) => {
    return {
        type: SIGNUP_USER_FAILURE,
        payload: data
    }
}

//Login Action
export const loginUser = (data: any) => {
    // console.log('dataaaa--',data)
    return {
        type: LOGIN_USER,
        payload: data
    }
}

export const loginUserSuccess = (data: any) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: data
    }
}

export const loginUserFailure = (data: any) => {
    return {
        type: LOGIN_USER_FAILURE,
        payload: data
    }
}

//Logout action
export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
        // payload: data
    }
}

export const logoutUserSuccess = () => {
    return {
        type: LOGOUT_USER_SUCCESS,
        // payload: data
    }
}

export const logoutUserFailure = (data: any) => {
    return {
        type: LOGOUT_USER_FAILURE,
        payload: data
    }

}

// Get All Registered Users
export const getAllRegisteredUsers = () => {
  
    return {
        type: GET_ALL_REGISTERED_USERS,
    };
};

export const gotAllRegisteredUsersSuccess = (data: any) => {
    // console.log('dataaa--', data);
    
    return {
        type: GOT_ALL_REGISTERED_USERS_SUCCESS, payload: data
    };
};

export const gotAllRegisteredUsersFailure = (data: any) => {
    return {
        type: GOT_ALL_REGISTERED_USERS_FAILURE, payload: data
    };
};

//GetPosts action

export const getPosts = () => {
  
    return {
        type: GET_POSTS,
    };
};

export const gotPostsSuccess = (data: any) => {

    return {
        type: GOT_POSTS_SUCCESS, payload: data
    };
};

export const gotPostsFailure = (data: any) => {
    return {
        type: GOT_POSTS_FAILURE, payload: data
    };
};

//Get single post action
export const getSinglePost = () => {
  
    return {
        type: GET_SINGLE_POST,
    };
};

export const getSinglePostSuccess = (data: any) => {
    return {
        type: GOT_SINGLE_POST_SUCCESS, payload: data
    };
};

export const getSinglePostFailure = (data: any) => {
    return {
        type: GOT_SINGLE_POST_FAILURE, payload: data
    };
};

//addpost action
export const addPost = (data: any) => {
    // console.log('datttaa--', data);
    return {
        type: ADD_POST, payload: data
    };
};

export const addedPostSuccess = (data: any) => {
    return {
        type: ADDED_POST_SUCCESS, payload: data
    }
}

export const addedPostFailure = (data: any) => {
    return {
        type: ADDED_POST_FAILURE, payload: data
    }
}

//update post action
export const updatePost = (data: any) => {
    return {
        type: UPDATE_POST, payload: data
    };
};

export const updatedPostSuccess = (data: any) => {
    return {
        type: UPDATED_POST_SUCCESS, payload: data
    }
}

export const updatedPostFailure = (data:any) => {
    return {
        type: UPDATED_POST_FAILURE, payload: data
    }
}

//delete post action
export const deletePost = (_id: any) => {
    // console.log("dddd_id--", _id);
    
    return {
        type: DELETE_POST, payload: _id
    };
};

export const deletedPostSuccess = (_id: number) => {
    return {
        type: DELETED_POST_SUCCESS, payload: _id
    }
}

export const deletedPostFailure = (_id: number) => {
    return {
        type: DELETED_POST_FAILURE, payload: _id
    }
}