import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_STUDENT_START = "LOGIN_STUDENT_START";
export const LOGIN_STUDENT_SUCCESS = "LOGIN_STUDENT_SUCCESS";
export const LOGIN_STUDENT_FAILURE = "LOGIN_STUDENT_FAILURE";

export const REGISTER_STUDENT_START = "REGISTER_STUDENT_START";
export const REGISTER_STUDENT_SUCCESS = "REGISTER_STUDENT_SUCCESS";
export const REGISTER_STUDENT_FAILURE = "REGISTER_STUDENT_FAILURE";

export const LOGIN_HELPER_START = "LOGIN_HELPER_START";
export const LOGIN_HELPER_SUCCESS = "LOGIN_HELPER_SUCCESS";
export const LOGIN_HELPER_FAILURE = "LOGIN_HELPER_FAILURE";

export const REGISTER_HELPER_START = "REGISTER_HELPER_START";
export const REGISTER_HELPER_SUCCESS = "REGISTER_HELPER_SUCCESS";
export const REGISTER_HELPER_FAILURE = "REGISTER_HELPER_FAILURE";

export const GET_ALL_TICKETS_START = "GET_ALL_TICKETS_START";
export const GET_ALL_TICKETS_SUCCESS = "GET_ALL_TICKETS_SUCCESS";
export const GET_ALL_TICKETS_FAILURE = "GET_ALL_TICKETS_FAILURE";

export const ADD_TICKET_START = "ADD_TICKET_START";
export const ADD_TICKET_SUCCESS = "ADD_TICKET_SUCCESS";
export const ADD_TICKET_FAILURE = "ADD_TICKET_FAILURE";

export const DELETE_TICKET_START = "DELETE_TICKET_START";
export const DELETE_TICKET_SUCCESS = "DELETE_TICKET_SUCCESS";
export const DELETE_TICKET_FAILURE = "DELETE_TICKET_FAILURE";

export const EDIT_TICKET_START = "EDIT_TICKET_START";
export const EDIT_TICKET_SUCCESS = "EDIT_TICKET_SUCCESS";
export const EDIT_TICKET_FAILURE = "EDIT_TICKET_FAILURE";

// STUDENTS
export const loginStudent = credentials => dispatch => {
    dispatch({type: LOGIN_STUDENT_START });
    axios
        .post('https://devdeskdb.herokuapp.com/api/auth/students/login', credentials)
        .then(res => {
            console.log('Login success', res)
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
            dispatch({ type: REGISTER_STUDENT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: REGISTER_STUDENT_FAILURE, payload: err.response.statusText })
        })
}

export const addTicket = (ticket) => dispatch => {
    dispatch({ type: ADD_TICKET_START })
    axiosWithAuth()
    .post('/requests', ticket)
    .then(res => {
        console.log(res)
        dispatch({ type: ADD_TICKET_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: ADD_TICKET_FAILURE })
    })
}

export const deleteTicket = id => dispatch => {
    dispatch({ type: DELETE_TICKET_START })
    axiosWithAuth()
    .delete(`/requests/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: DELETE_TICKET_SUCCESS, payload: id })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: DELETE_TICKET_FAILURE })
    })
}

export const editTicket = (ticket) => dispatch => {
    dispatch({ type: EDIT_TICKET_START });
    axiosWithAuth()
    .put(`/requests/${ticket.id}`, ticket)
    .then(res => {
        dispatch({ type: EDIT_TICKET_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: EDIT_TICKET_FAILURE })
    })
}

// HELPERS
export const loginHelper = credentials => dispatch => {
    dispatch({type: LOGIN_HELPER_START });
    axios
        .post('https://devdeskdb.herokuapp.com/api/auth/helpers/login', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_HELPER_SUCCESS, payload: res.data.helperid })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: LOGIN_HELPER_FAILURE, payload: err.response.statusText })
        })
}

export const registerHelper = newHelper => dispatch => {
    dispatch({ type: REGISTER_HELPER_START })
    axios
        .post('https://devdeskdb.herokuapp.com/api/auth/helpers/register', newHelper)
        .then(res => {
            console.log(res)
            dispatch({ type: REGISTER_HELPER_SUCCESS, payload: res.data.id })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: REGISTER_HELPER_FAILURE, payload: err.response.statusText })
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