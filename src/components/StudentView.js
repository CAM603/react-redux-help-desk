import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getAllTickets, editTicket } from '../actions/actions'
import AddTicket from './AddTicket';
import Ticket from './Ticket';
import EditTicket from './EditTicket';

const StudentView = (props) => {
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
        }
    )
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
            <h1>You are a student</h1>
            {props.tickets.length < 1 ? <p>Create a ticket</p>
            :
            props.tickets.map(ticket => (
                <Ticket
                category={ticket.request_category}
                date={ticket.request_date}
                title={ticket.request_title}
                details={ticket.request_details}
                stepstaken={ticket.request_stepstaken}
                id={ticket.id}
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
            <AddTicket/>
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        tickets: state.tickets,
        userID: state.userID
    }
}
export default connect(mapStateToProps, {getAllTickets, editTicket})(StudentView);