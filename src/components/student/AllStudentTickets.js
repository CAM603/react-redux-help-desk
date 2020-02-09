import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Ticket from '../Ticket';
import { getAllTickets } from '../../actions/actions';
import ButtonMaker from '../../utils/ButtonMaker';

const AllStudentTickets = (props) => {
    const [currentTopic, setCurrentTicket] = useState(props.tickets);
    
    const chronicTickets = currentTopic.sort((a,b) => new Date(a.request_date) - new Date(b.request_date))

    const chronicTickets2 = chronicTickets.slice().reverse()
    const [sorted, setSorted] = useState(chronicTickets)

    const reverseByDate = () => {
        sorted === chronicTickets ? setSorted(chronicTickets2) : setSorted(chronicTickets)
    }

    useEffect(() => {
        props.getAllTickets();
        
    }, [])
    
    return ( 
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around', padding: '10px'}}>
                <ButtonMaker setCurrentTicket={setCurrentTicket}/>
                <button onClick={reverseByDate}>Filter Date</button>
            </div>
            <div className="ticket-container">
                {sorted.map(ticket => (
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