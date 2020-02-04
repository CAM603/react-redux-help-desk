import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTicket } from '../actions/actions';

const AddTicket = (props) => {
    const [ticket, setTicket] = useState({
        request_category: '', 
        request_title: '',
        request_stepstaken: '',
        request_details: '', 
        request_date: Date.now(), 
        creatorId: props.userID
    })

    const handleChange = (event) => {
        setTicket({
            ...ticket,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addTicket(ticket)
        setTicket({
            request_category: '', 
            request_title: '',
            request_stepstaken: '',
            request_details: '', 
            request_date: Date.now(), 
            creatorId: props.userID
        })
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
const mapStateToProps = (state) => {
    return {
        userID: state.userID
    }
}
export default connect(mapStateToProps, {addTicket})(AddTicket);