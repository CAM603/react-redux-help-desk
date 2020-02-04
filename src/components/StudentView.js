import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllTickets } from '../actions/actions'
import AddTicket from './AddTicket';
import Ticket from './Ticket';

const StudentView = (props) => {
    
    useEffect(() => {
        props.getAllTickets()
    }, [])

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
                />
            ))
            }
            <AddTicket/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        tickets: state.tickets
    }
}
export default connect(mapStateToProps, {getAllTickets})(StudentView);