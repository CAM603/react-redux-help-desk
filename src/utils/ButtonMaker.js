import React, { useState } from 'react';
import { connect } from 'react-redux';

const ButtonMaker = (props) => {
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
    
    
    const buttons = [];

    for(let key in topic) {

        buttons.push(
            <button style={{
                padding: ".25rem .5rem",
                fontSize: ".875rem",
                lineHeight: "1.5",
                borderRadius: ".2rem",
                color: "white",
                background: "black",
                width: '100px'
            }} onClick={() => props.setCurrentTicket(topic[key])}>{key}</button>
        ) 
    }

    return (
        <>
            {buttons}
            {/* {buttons.map(button => button)} */}
        </>
    )
}
const mapStateToProps = state => {
    return {
        tickets: state.tickets
    }
}
export default connect(mapStateToProps)(ButtonMaker);