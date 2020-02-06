import React, { useState } from 'react';
import { connect } from 'react-redux'

import { deleteTicket } from '../../actions/actions'

import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const HelperTicket = (props) => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);
    
    const deleteTicket = (ticketID) => {
        props.deleteTicket(ticketID)
    }
    let topic;
    let color;
    let font;
    switch (props.ticket.request_category) {
        case 1:
            topic = "JavaScript";
            color = "#f0db4f";
            break;
        case 2:
            topic = "CSS";
            color = "#264de4";
            font = "#FFFFFF"
            break;
        case 3:
            topic = "Node";
            color = "#3C873A"
            break;
        case 4:
            topic = "React";
            color = "#61DBFB"
            break;
        case 5:
            topic = "Redux";
            color = "#764abc"
            break;
        case 6:
            topic = "{JSON}";
            break;
        case 7:
            topic = "Python";
            color = "#306998";
            font = "#FFD43B"
            break;
        case 8:
            topic = "Git";
            color = "#F1502F"
            font = "3E2C00"
            break;
        case 9:
            topic = "Postman";
            color = "#FFFFFF";
            font = "#EF5B25"
            break;
        case 10:
            topic = "Yarn";
            color = "#1F88B6";
            font = "#FFFFFF"
            break;
        case 11:
            topic = "Library Installation";
            color = "#CC0000";
            font = "#FFFFFF"
            break;
        case 12:
            topic = "App Deployment";
            color = "black";
            font = "#FFFFFF";
    }
    
    return (
        <>
        <Card>
            <CardHeader tag="h3" style={{background: color, color: font}}>
                {topic}
            </CardHeader>
            <CardBody>
                <CardTitle>
                    <h4>{props.ticket.request_title}</h4>
                    <p>{props.ticket.request_details}</p>
                    <h4>Steps Taken</h4>
                    <p>{props.ticket.request_stepstaken}</p>
                </CardTitle>
            </CardBody>
            <CardFooter>
                <Button
                size="sm"
                color="danger"
                onClick={() => deleteTicket(props.ticket.id)}>Delete</Button>
            </CardFooter>
        </Card>
    </>
    )
}
const mapStateToProps = (state) => {
    return {
        state: state
    }
}
export default connect(mapStateToProps, {deleteTicket})(HelperTicket);
