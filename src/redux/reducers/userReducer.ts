import { combineReducers } from "redux";

import addPost from "./addPost";
import getPosts from "./getPosts";
import updatePost from "./updatePost";
import deletePost from "./deletePost";
import signupUser from "./signupUser";
import loginUser from "./loginUser";
import logoutUser from "./logoutUser";
import getAllRegisteredUsers from "./allRegisteredUsers";

export default combineReducers({
    signupUser,
    loginUser,
    logoutUser,
    getAllRegisteredUsers,
    addPost,
    getPosts,
    updatePost,
    deletePost
});

