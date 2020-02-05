import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTicket } from '../actions/actions';

import { Form, FormGroup, Input, Button } from 'reactstrap';

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
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                    type="text"
                    name="request_category"
                    value={ticket.request_category}
                    onChange={handleChange}
                    placeholder="category"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    type="text"
                    name="request_title"
                    value={ticket.request_title}
                    onChange={handleChange}
                    placeholder="title"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    type="text"
                    name="request_stepstaken"
                    value={ticket.request_stepstaken}
                    onChange={handleChange}
                    placeholder="steps taken"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    type="text"
                    name="request_details"
                    value={ticket.request_details}
                    onChange={handleChange}
                    placeholder="details"
                    />
                </FormGroup>
                <Button>Add</Button>
            </Form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        userID: state.userID
    }
}
export default connect(mapStateToProps, {addTicket})(AddTicket);