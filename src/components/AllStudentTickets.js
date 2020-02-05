import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Ticket from './Ticket';
import { getAllTickets, editTicket } from '../actions/actions';

const AllStudentTickets = (props) => {
    useEffect(() => {
        props.getAllTickets()
    }, [])

    return (
        <div>
            {props.tickets.length < 1 ? <h1>Create a ticket</h1>
            :
            props.tickets.map(ticket => (
                <Ticket
                editable={false}
                ticket={ticket}
                />
            ))
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