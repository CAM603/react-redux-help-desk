import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTicket } from '../../actions/actions';

import { Form, FormGroup, Input, Button, Label } from 'reactstrap';

const AddTicket = (props) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = `${mm}/${dd}/${yyyy}`;

    const [ticket, setTicket] = useState({
        request_category: 1, 
        request_title: '',
        request_stepstaken: '',
        request_details: '', 
        request_date: today, 
        creatorId: props.userID
    })

    const handleChange = (event) => {
        event.persist()
        let value = event.target.value
        if (event.target.name === 'request_category') {
            switch(value) {
                case "JavaScript":
                    value = 1;
                    break;
                case "CSS":
                    value = 2;
                    break;
                case "Node":
                    value = 3;
                    break;
                case "React":
                    value = 4;
                    break;
                case "Redux":
                    value = 5;
                    break;
                case "JSON":
                    value = 6;
                    break;
                case "Python":
                    value = 7;
                    break;
                case "Git":
                    value = 8;
                    break;
                case "Postman":
                    value = 9;
                    break;
                case "Yarn":
                    value = 10;
                    break;
                case "Library Installation":
                    value = 11;
                    break;
                case "App Deployment":
                    value = 12;
            }
            value = parseInt(value)
            
        }
        setTicket({
            ...ticket,
            [event.target.name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addTicket(ticket)
        setTicket({
            request_category: 1, 
            request_title: '',
            request_stepstaken: '',
            request_details: '', 
            request_date: today, 
            creatorId: props.userID
        })
        props.setTab('mine')
    }
    
    console.log(ticket)
    return (
        
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Category</Label>
                    <Input
                    type="select"
                    name="request_category"
                    onChange={handleChange}>
                        <option>JavaScript</option>
                        <option>CSS</option>
                        <option>Node</option>
                        <option>React</option>
                        <option>Redux</option>
                        <option>JSON</option>
                        <option>Python</option>
                        <option>Git</option>
                        <option>Postman</option>
                        <option>Yarn</option>
                        <option>Library Installation</option>
                        <option>App Deployment</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Title</Label>
                    <Input
                    type="text"
                    name="request_title"
                    value={ticket.request_title}
                    onChange={handleChange}
                    placeholder="title"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Steps Taken</Label>
                    <Input
                    type="text"
                    name="request_stepstaken"
                    value={ticket.request_stepstaken}
                    onChange={handleChange}
                    placeholder="steps taken"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Details</Label>
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
        
    )
}
const mapStateToProps = (state) => {
    return {
        userID: state.userID
    }
}
export default connect(mapStateToProps, {addTicket})(AddTicket);