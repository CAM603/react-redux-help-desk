import React, { useState } from 'react';

const EditTicket = (props) => {
    const [ticket, setTicket] = useState(props.currentTicket)
    console.log('props from edit ticket', props)
    const handleChange = (event) => {
        setTicket({
            ...ticket,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submitted ticket', ticket)
        props.updateTicket(ticket)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="request_category"
                value={ticket.request_category}
                onChange={handleChange}
                placeholder="category"
                />
                <input
                type="text"
                name="request_title"
                value={ticket.request_title}
                onChange={handleChange}
                placeholder="title"
                />
                <input
                type="text"
                name="request_stepstaken"
                value={ticket.request_stepstaken}
                onChange={handleChange}
                placeholder="steps taken"
                />
                <input
                type="text"
                name="request_details"
                value={ticket.request_details}
                onChange={handleChange}
                placeholder="details"
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default EditTicket;