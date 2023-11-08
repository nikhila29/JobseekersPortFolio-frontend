import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000'

interface Register {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface Login {
    email: string;
    password: string;
}

interface Users {
    _id: any,
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    createdAt: any;
    updatedAt: any;
}

// export const getAllRegisteredUsers = async() =>  axios.get(`/all/registered-users`)
export const getAllRegisteredUsers = async(token: string) => await axios.get(`/all/registered-users`, {headers: {
    Authorization: `${token}`
}})
export const signupAPI = async (user: Register) => axios.post(`/register`, user)
// console.log('server--', signupAPI);


export const loginAPI = async (user: Login) => axios.post(`/login`, user)

export const logoutAPI = async () => axios.get(`/logout`)

export const getUsersAPI = async (token: string) => await axios.get('/user/list', {headers: {
    Authorization: `${token}`
}})
// export const getUsersAPI = async () => await axios.get('/user/list')


export const getSinglePostAPI = async (token: string) => await axios.get('/user/:id', {headers: {
    Authorization: `${token}`
}})


// export const createUserAPI = async (user: any) => axios.post(`/user/add`, user)
export const createUserAPI = async (user: any, token: string) => axios.post(`/user/add`, user, {
    headers: {
    Authorization: `${token}`
}})

// export const updateUserAPI = async (user: { id: number }) => axios.put(`/user/${user.id}`, user)
export const updateUserAPI = async ( user: { _id: any } ,token: string) => axios.put(`/user/${user._id}`,  user, {
    headers: {
    Authorization: `${token}`
}})


// export const deleteUserByIdAPI = async (id: number) => axios.delete(`/user/delete/${id}`)
export const deleteUserByIdAPI = async ( _id: any ,token: string) => axios.delete(`/user/delete/${_id}`,{
    headers: {
    Authorization: `${token}`
}})