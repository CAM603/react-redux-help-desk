import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getStudentTickets, editTicket } from '../../actions/actions'
import StudentTicket from './StudentTicket';
import EditTicket from '../forms/EditTicket';
import '../.././App.css'

const StudentTickets = (props) => {
    const [editing, setEditing] = useState(false)
    const initialTicket = useState({
        id: '',
        request_title: '',
        request_stepstaken: '',
        request_category: 1,
        request_date: '', 
        request_details: '',
        creatorId: '', 
        helperId: '',
        resolved: ''
    })
    const [currentTicket, setCurrentTicket] = useState(initialTicket)

    useEffect(() => {
        props.getStudentTickets(props.id)
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
        
        props.editTicket(updatedTicket)
        props.getStudentTickets(props.id)
    }
    
    return (
        <div className="ticket-container">
            {!props.studentTickets.length < 1 ? <h1>You have no tickets</h1>
            :
            props.studentTickets.map(ticket => (
                <StudentTicket
                editHandler={editHandler}
                ticket={ticket}/>
            ))
            }
            {editing 
            ?
            <div className="modalz">
                <EditTicket
                editing={editing}
                setEditing={setEditing}
                currentTicket={currentTicket}
                updateTicket={updateTicket}
                />
            </div>
            :
            null
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        studentTickets: state.studentTickets,
        id: state.userID
    }
}
export default connect(mapStateToProps, {getStudentTickets, editTicket})(StudentTickets);