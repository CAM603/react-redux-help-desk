import React from 'react';
import { connect } from 'react-redux'

import { deleteTicket } from '../actions/actions'

import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap'

const Ticket = (props) => {
    
    const deleteTicket = (ticketID) => {
        props.deleteTicket(ticketID)
    }
    
    return (
        <Toast>
            <ToastHeader>
                topic here
            </ToastHeader>
            <ToastBody>
                {props.ticket.request_title}
            </ToastBody>
        <Button 
        size="sm" 
        color="info" 
        onClick={() => props.editHandler(props.ticket)}>edit</Button>
            {' '}
        <Button 
        size="sm" 
        color="danger" 
        onClick={() => deleteTicket(props.ticket.id)}>Delete</Button>
        </Toast>
    )
}
const mapStateToProps = (state) => {
    return {
        state: state
    }
}
export default connect(mapStateToProps, {deleteTicket})(Ticket);