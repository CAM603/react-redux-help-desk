import {
    LOGIN_STUDENT_START,
    LOGIN_STUDENT_SUCCESS,
    LOGIN_STUDENT_FAILURE,
    REGISTER_STUDENT_START,
    REGISTER_STUDENT_SUCCESS,
    REGISTER_STUDENT_FAILURE,
    GET_ALL_TICKETS_START,
    GET_ALL_TICKETS_SUCCESS,
    GET_ALL_TICKETS_FAILURE
} from '../actions/actions';

const initialState = {
    userID: 0,
    student: false,
    helper: false,
    tickets: [],
    ticketsLoading: false,
    loginLoading: false,
    registerLoading: false,
    error: ''
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_STUDENT_START:
            return {
                ...state,
                loginLoading: true
            }
        case LOGIN_STUDENT_SUCCESS:
            return {
                ...state,
                error: '',
                loginLoading: false,
                userID: action.payload,
                student: true
            }
        case LOGIN_STUDENT_FAILURE:
            return {
                ...state,
                loginLoading: false,
                error: action.payload,
                student: false
            }
        case REGISTER_STUDENT_START:
            return {
                ...state,
                registerLoading: true
            }
        case REGISTER_STUDENT_SUCCESS:
            return {
                ...state,
                registerLoading: false,
                error: '',
                userID: action.payload,
                
            }
        case REGISTER_STUDENT_FAILURE:
            return {
                ...state,
                registerLoading: false,
                error: action.payload,
                
            }
        case GET_ALL_TICKETS_START:
            return {
                ...state,
                ticketsLoading: true,
                error: ''
            }
        case GET_ALL_TICKETS_SUCCESS:
            return {
                ...state,
                ticketsLoading: false,
                tickets: action.payload
            }
        case GET_ALL_TICKETS_FAILURE:
            return {
                ...state,
                ticketsLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}