import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllTickets } from '../actions/actions'
import AddTicket from './AddTicket';

const StudentView = (props) => {
    
    useEffect(() => {
        props.getAllTickets()
    }, [])

    return (
        <div>
            <h1>You are a student</h1>
            {props.tickets.length < 1 ? <p>Create a ticket</p>
            :
            props.tickets.map(ticket => <p>You made a ticket</p>)
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