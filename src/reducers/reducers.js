import {
    LOGIN_STUDENT_START,
    LOGIN_STUDENT_SUCCESS,
    LOGIN_STUDENT_FAILURE,
    REGISTER_STUDENT_START,
    REGISTER_STUDENT_SUCCESS,
    REGISTER_STUDENT_FAILURE,
    LOGIN_HELPER_START,
    LOGIN_HELPER_SUCCESS,
    LOGIN_HELPER_FAILURE,
    REGISTER_HELPER_START,
    REGISTER_HELPER_SUCCESS,
    REGISTER_HELPER_FAILURE,
    GET_ALL_TICKETS_START,
    GET_ALL_TICKETS_SUCCESS,
    GET_ALL_TICKETS_FAILURE,
    ADD_TICKET_START,
    ADD_TICKET_SUCCESS,
    ADD_TICKET_FAILURE,
    DELETE_TICKET_START,
    DELETE_TICKET_SUCCESS,
    DELETE_TICKET_FAILURE,
    EDIT_TICKET_START,
    EDIT_TICKET_SUCCESS,
    EDIT_TICKET_FAILURE
} from '../actions/actions';

const initialState = {
    userID: 0,
    student: false,
    helper: false,
    tickets: [],
    ticketsLoading: false,
    loginLoading: false,
    registerLoading: false,
    isAdding: false,
    isDeleting: false,
    isEditing: false,
    error: ''
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_STUDENT_START:
            return {
                ...state,
                loginLoading: true,
                helper: false
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
        case LOGIN_HELPER_START:
            return {
                ...state,
                loginLoading: true,
                student: false
            }
        case LOGIN_HELPER_SUCCESS:
            return {
                ...state,
                error: '',
                loginLoading: false,
                userID: action.payload,
                helper: true
            }
        case LOGIN_HELPER_FAILURE:
            return {
                ...state,
                loginLoading: false,
                error: action.payload,
                helper: false
            }
        case REGISTER_HELPER_START:
            return {
                ...state,
                registerLoading: true
            }
        case REGISTER_HELPER_SUCCESS:
            return {
                ...state,
                registerLoading: false,
                error: '',
                userID: action.payload,
                
            }
        case REGISTER_HELPER_FAILURE:
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
        case ADD_TICKET_START:
            return {
                ...state,
                isAdding: true
            }
        case ADD_TICKET_SUCCESS:
            return {
                ...state,
                isAdding: false,
                tickets: [...state.tickets, action.payload]
            }
        case ADD_TICKET_FAILURE:
            return {
                ...state,
                isAdding: false
            }
        case DELETE_TICKET_START:
            return {
                ...state,
                isDeleting: true
            }
        case DELETE_TICKET_SUCCESS:
            let filteredTickets = state.tickets.filter(ticket => ticket.id !== action.payload)
            return {
                ...state,
                isDeleting: false,
                tickets: filteredTickets
            }
        case DELETE_TICKET_FAILURE:
            return {
                ...state,
                isDeleting: false
            }
        case EDIT_TICKET_START:
            return {
                ...state,
                isEditing: true
            }
        case EDIT_TICKET_SUCCESS:
            let updatedTickets = state.tickets.map(ticket => ticket === action.payload ? action.payload : ticket)
            return {
                ...state,
                isEditing: false,
                tickets: updatedTickets
            }
        case EDIT_TICKET_FAILURE:
            return {
                ...state,
                isEditing: false
            }
        default:
            return state
    }
}