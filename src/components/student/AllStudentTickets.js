import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Ticket from '../Ticket';
import { getAllTickets } from '../../actions/actions';
import ButtonMaker from '../../utils/ButtonMaker';

const AllStudentTickets = (props) => {
    const [currentTopic, setCurrentTicket] = useState(props.tickets)

    useEffect(() => {
        props.getAllTickets();
        
    }, [])

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around', padding: '10px'}}>
                <ButtonMaker setCurrentTicket={setCurrentTicket}/>
            </div>
            <div className="ticket-container">
                {currentTopic.map(ticket => (
                    <Ticket
                    key={ticket.id}
                    ticket={ticket}
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tickets: state.tickets
    }
}

export default connect(mapStateToProps, {getAllTickets})(AllStudentTickets);