import React, {useState} from 'react';
import { connect } from 'react-redux'

import { assignTicket, getHelperTickets }from '../actions/actions';

import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


const Ticket = ({ticket, helper, assignTicket}) => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    let topic;
    switch (ticket.request_category) {
        case 1:
            topic = "JavaScript";
            break;
        case 2:
            topic = "CSS";
            break;
        case 3:
            topic = "Node";
            break;
        case 4:
            topic = "React";
            break;
        case 5:
            topic = "Redux";
            break;
        case 6:
            topic = "JSON";
            break;
        case 7:
            topic = "Python";
            break;
        case 8:
            topic = "Git";
            break;
        case 9:
            topic = "Postman";
            break;
        case 10:
            topic = "Yarn";
            break;
        case 11:
            topic = "Library Installation";
            break;
        case 12:
            topic = "App Deployment";
    }
    const assign = (ticket) => {
        assignTicket(ticket)
        getHelperTickets()
    }
    return (
        <>
            <Card>
                <CardHeader tag="h3">
                    {topic}
                </CardHeader>
                <CardBody>
                    <CardTitle>
                        {ticket.request_title}
                    </CardTitle>
                    <CardText>
                    
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Button 
                    size='sm' 
                    color="info" 
                    onClick={toggle}>Details</Button>
                    {helper ? 
                    <Button
                    onClick={() => assign(ticket)}
                    size="sm">Assign</Button>
                    : null}
                </CardFooter>
            </Card>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader tag="h3" toggle={toggle}>{topic}</ModalHeader>
                <ModalBody>
                    <h4>{ticket.request_title}:</h4>
                    <p>{ticket.request_details}</p>
                    <h4>Steps Taken:</h4>
                    <p>{ticket.request_stepstaken}</p>
                </ModalBody>
                <ModalFooter>
                    <p>Date created: {ticket.request_date}</p>
                </ModalFooter>
            </Modal>
        </>
    )
}
const mapStateToProps = state => {
    return {
        helper: state.helper,
        id: state.userID
    }
}
export default connect(mapStateToProps, {assignTicket, getHelperTickets})(Ticket);