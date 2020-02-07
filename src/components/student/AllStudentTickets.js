import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Ticket from '../Ticket';
import { getAllTickets } from '../../actions/actions';

const AllStudentTickets = (props) => {
    const [topic, setTopic] = useState({
        all: props.tickets,
        javascript: props.tickets.filter(ticket => ticket.request_category === 1),
        css: props.tickets.filter(ticket => ticket.request_category === 2),
        node: props.tickets.filter(ticket => ticket.request_category === 3),
        react: props.tickets.filter(ticket => ticket.request_category === 4),
        redux: props.tickets.filter(ticket => ticket.request_category === 5),
        json: props.tickets.filter(ticket => ticket.request_category === 6),
        python: props.tickets.filter(ticket => ticket.request_category === 7),
        git: props.tickets.filter(ticket => ticket.request_category === 8),
        postman: props.tickets.filter(ticket => ticket.request_category === 9),
        yarn: props.tickets.filter(ticket => ticket.request_category === 10),
        library: props.tickets.filter(ticket => ticket.request_category === 11),
        deployment: props.tickets.filter(ticket => ticket.request_category === 12),
    })
    const [currentTopic, setCurrentTicket] = useState(topic.all)

    useEffect(() => {
        props.getAllTickets();
        
    }, [])

    const buttons = []
    
    for(let key in topic) {

    buttons.push(<button onClick={() => setCurrentTicket(topic[key])}>{key}</button>) 

    }
    return (
        <div>
            {buttons}
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