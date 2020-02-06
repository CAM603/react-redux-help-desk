import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Ticket from '../Ticket';
import { getAllTickets } from '../../actions/actions';

const AllStudentTickets = (props) => {
    useEffect(() => {
        props.getAllTickets()
    }, [])

    return (
            <div className="ticket-container">
                {props.tickets.map(ticket => (
                    <Ticket
                    ticket={ticket}
                    />
                ))}
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tickets: state.tickets
    }
}

export default connect(mapStateToProps, {getAllTickets})(AllStudentTickets);