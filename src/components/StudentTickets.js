import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getStudentTickets } from '../actions/actions'
import Ticket from './Ticket';

const StudentTickets = (props) => {

    useEffect(() => {
        props.getStudentTickets(props.id)
    }, [])
    console.log(props.id)
    return (
        <div>
            {!props.studentTickets ? <h1>You have no tickets</h1>
            :
            props.studentTickets.map(ticket => (
                <Ticket ticket={ticket}/>
            ))
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
export default connect(mapStateToProps, {getStudentTickets})(StudentTickets);