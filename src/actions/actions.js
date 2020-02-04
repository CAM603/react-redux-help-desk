import axios from 'axios';

export const LOGIN_STUDENT_START = "LOGIN_STUDENT_START";
export const LOGIN_STUDENT_SUCCESS = "LOGIN_STUDENT_SUCCESS";
export const LOGIN_STUDENT_FAILURE = "LOGIN_STUDENT_FAILURE";

export const REGISTER_STUDENT_START = "REGISTER_STUDENT_START";
export const REGISTER_STUDENT_SUCCESS = "REGISTER_STUDENT_SUCCESS";
export const REGISTER_STUDENT_FAILURE = "REGISTER_STUDENT_FAILURE";


export const loginStudent = credentials => dispatch => {
    dispatch({type: LOGIN_STUDENT_START });
    axios
        .post('https://devdeskdb.herokuapp.com/api/auth/students/login', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_STUDENT_SUCCESS})
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
            dispatch({ type: REGISTER_STUDENT_SUCCESS })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: REGISTER_STUDENT_FAILURE, payload: err.response.statusText })
        })
}