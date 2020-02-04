import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_STUDENT_START = "LOGIN_STUDENT_START";
export const LOGIN_STUDENT_SUCCESS = "LOGIN_STUDENT_SUCCESS";
export const LOGIN_STUDENT_FAILURE = "LOGIN_STUDENT_FAILURE";

export const REGISTER_STUDENT_START = "REGISTER_STUDENT_START";
export const REGISTER_STUDENT_SUCCESS = "REGISTER_STUDENT_SUCCESS";
export const REGISTER_STUDENT_FAILURE = "REGISTER_STUDENT_FAILURE";

export const GET_ALL_TICKETS_START = "GET_ALL_TICKETS_START"
export const GET_ALL_TICKETS_SUCCESS = "GET_ALL_TICKETS_SUCCESS"
export const GET_ALL_TICKETS_FAILURE = "GET_ALL_TICKETS_FAILURE"



export const loginStudent = credentials => dispatch => {
    dispatch({type: LOGIN_STUDENT_START });
    axios
        .post('https://devdeskdb.herokuapp.com/api/auth/students/login', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_STUDENT_SUCCESS, payload: res.data.studentid })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_STUDENT_FAILURE, payload: err.response.statusText })
        })
}

export const registerStudent = newStudent => dispatch => {
    dispatch({ type: REGISTER_STUDENT_START })
    axios
        .post('https://devdeskdb.herokuapp.com/api/auth/students/register', newStudent)
        .then(res => {
            console.log(res)
            dispatch({ type: REGISTER_STUDENT_SUCCESS, payload: res.data.id })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: REGISTER_STUDENT_FAILURE, payload: err.response.statusText })
        })
}

export const getAllTickets = () => dispatch => {
    dispatch({ type: GET_ALL_TICKETS_START });
    axiosWithAuth()
        .get('/requests')
        .then(res => {
            dispatch({ type: GET_ALL_TICKETS_SUCCESS, payload: res.data })
            console.log(res)
        })
        .catch(err => {
            dispatch({ type: GET_ALL_TICKETS_FAILURE })
            console.log(err)
        })
}