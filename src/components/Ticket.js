import React from 'react';
import { connect } from 'react-redux'

import { deleteTicket } from '../actions/actions'

const Ticket = (props) => {
    
    const deleteTicket = (ticketID) => {
        props.deleteTicket(ticketID)
    }
    
    return (
        <div>
            <p>{props.category}</p>
            <p>{props.date}</p>
            <p>{props.title}</p>
            <p>{props.details}</p>
            <p>{props.stepstaken}</p>
            <button onClick={() => deleteTicket(props.id)}>Delete</button>
            <button onClick={() => props.editHandler(props.ticket)}>edit</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        state: state
    }
}
export default connect(mapStateToProps, {deleteTicket})(Ticket);