import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Ticket from './Ticket';
import EditTicket from './EditTicket';
import { getAllTickets, editTicket } from '../actions/actions';

const AllStudentTickets = (props) => {
    const [editing, setEditing] = useState(false)
    const initialTicket = useState({
        id: '',
        request_title: '',
        request_stepstaken: '',
        request_category: '',
        request_date: '', 
        request_details: '',
        creatorId: '', 
        helperId: '',
        resolved: ''
    })
    const [currentTicket, setCurrentTicket] = useState(initialTicket)

    useEffect(() => {
        props.getAllTickets()
    }, [])

    const editHandler = (ticket) => {
        setEditing(true)
        setCurrentTicket({
            id: ticket.id,
            request_title: ticket.request_title,
            request_stepstaken: ticket.request_stepstaken,
            request_category: ticket.request_category,
            request_date: ticket.request_date, 
            request_details: ticket.request_details,
            creatorId: ticket.creatorId, 
            helperId: ticket.helperId,
            resolved: ticket.resolved
        })
    }
    const updateTicket = (updatedTicket) => {
        setEditing(false)
        console.log('updated', updatedTicket)
        props.editTicket(updatedTicket)
        props.getAllTickets()
    }

    return (
        <div>
            {props.tickets.length < 1 ? <h1>Create a ticket</h1>
            :
            props.tickets.map(ticket => (
                <Ticket
                editHandler={editHandler}
                ticket={ticket}
                />
            ))
            }
            {editing 
            ? 
            <EditTicket
            editing={editing}
            setEditing={setEditing}
            currentTicket={currentTicket}
            updateTicket={updateTicket}
            />
            :
            null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tickets: state.tickets
    }
}

export default connect(mapStateToProps, {getAllTickets, editTicket})(AllStudentTickets);