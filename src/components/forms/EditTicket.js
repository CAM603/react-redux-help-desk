import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Label, Col } from 'reactstrap';
import { connect } from 'react-redux'



const EditTicket = (props) => {
    const [ticket, setTicket] = useState(props.currentTicket)
    
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
        props.updateTicket(ticket)
    }
    
    return (
        <div className="add-ticket-container">
            <div className="add-ticket">
                <Form onSubmit={handleSubmit}>
                    <FormGroup row>
                        <Label sm={2}>Category</Label>
                        <Col sm={10}>
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
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Title</Label>
                        <Col sm={10}>
                            <Input
                            type="text"
                            name="request_title"
                            value={ticket.request_title}
                            onChange={handleChange}
                            placeholder="title"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Steps Taken</Label>
                        <Col sm={10}>
                            <Input
                            type="textarea"
                            name="request_stepstaken"
                            value={ticket.request_stepstaken}
                            onChange={handleChange}
                            placeholder="What steps have you taken so far?"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Details</Label>
                        <Col sm={10}>
                            <Input
                            type="textarea"
                            name="request_details"
                            value={ticket.request_details}
                            onChange={handleChange}
                            placeholder="Describe your issue"
                            />
                        </Col>
                    </FormGroup>
                    <Button size="md" color="primary">Add</Button>
                </Form>
            </div>
        </div>
        )
    }
    const mapStateToProps = state => {
        return {
            id: state.userID
        }
    }
    export default connect(mapStateToProps)(EditTicket);
    // <div>
    //     <Form onSubmit={handleSubmit}>
    //         <FormGroup>
    //             <Label>Category</Label>
    //             <Input
    //             type="select"
    //             name="request_category"
    //             onChange={handleChange}>
    //                 <option>JavaScript</option>
    //                 <option>CSS</option>
    //                 <option>Node</option>
    //                 <option>React</option>
    //                 <option>Redux</option>
    //                 <option>JSON</option>
    //                 <option>Python</option>
    //                 <option>Git</option>
    //                 <option>Postman</option>
    //                 <option>Yarn</option>
    //                 <option>Library Installation</option>
    //                 <option>App Deployment</option>
    //             </Input>
    //         </FormGroup>
    //         <FormGroup>
    //             <Label>Title</Label>
    //             <Input
    //             type="text"
    //             name="request_title"
    //             value={ticket.request_title}
    //             onChange={handleChange}
    //             placeholder="title"
    //             />
    //         </FormGroup>
    //         <FormGroup>
    //             <Label>Steps Taken</Label>
    //             <Input
    //             type="textarea"
    //             name="request_stepstaken"
    //             value={ticket.request_stepstaken}
    //             onChange={handleChange}
    //             placeholder="steps taken"
    //             />
    //         </FormGroup>
    //         <FormGroup>
    //             <Label>Details</Label>
    //             <Input
    //             type="textarea"
    //             name="request_details"
    //             value={ticket.request_details}
    //             onChange={handleChange}
    //             placeholder="details"
    //             />
    //         </FormGroup>
    //         <Button>Update</Button>
    //     </Form>
    // </div>