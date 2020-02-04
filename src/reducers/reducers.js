import {
    LOGIN_STUDENT_START,
    LOGIN_STUDENT_SUCCESS,
    LOGIN_STUDENT_FAILURE,
    REGISTER_STUDENT_START,
    REGISTER_STUDENT_SUCCESS,
    REGISTER_STUDENT_FAILURE
} from '../actions/actions';

const initialState = {
    loginLoading: false,
    loginError: '',
    registerLoading: false,
    registerError: ''
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
                loginLoading: false
            }
        case LOGIN_STUDENT_FAILURE:
            return {
                ...state,
                loginLoading: false,
                loginError: action.payload
            }
        case REGISTER_STUDENT_START:
            return {
                ...state,
                registerLoading: true
            }
        case REGISTER_STUDENT_SUCCESS:
            return {
                ...state,
                registerLoading: false
            }
        case REGISTER_STUDENT_FAILURE:
            return {
                ...state,
                registerLoading: false,
                registerError: action.payload
            }
        default:
            return state
    }
}