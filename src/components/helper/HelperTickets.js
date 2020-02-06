import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getHelperTickets, editTicket } from '../../actions/actions'
import HelperTicket from './HelperTicket';


const HelperTickets = (props) => {
    return (
        <div className="ticket-container">
            
            {props.helperTickets.map(ticket => (
                <HelperTicket ticket={ticket} />
            ))
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        helperTickets: state.helperTickets,
        id: state.userID
    }
}
export default connect(mapStateToProps, {getHelperTickets})(HelperTickets);