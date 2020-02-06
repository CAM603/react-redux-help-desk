import React, {useState} from 'react';
import { connect } from 'react-redux'

import { assignTicket, getHelperTickets }from '../actions/actions';

import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


const Ticket = ({ticket, helper, assignTicket}) => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    let topic;
    let color;
    let font;
    switch (ticket.request_category) {
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
    const assign = (ticket) => {
        assignTicket(ticket)
        getHelperTickets()
    }
    return (
        <>
            <Card>
                <CardHeader tag="h3" style={{background: color, color: font}}>
                    {topic}
                </CardHeader>
                <CardBody>
                    <CardTitle>
                        <h5>{ticket.request_title}</h5>
                    </CardTitle>
                    <CardText>
                    
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Button 
                    size='sm' 
                    color="secondary" 
                    onClick={toggle}>Details</Button>
                    {' '}
                    {helper ? 
                    <Button
                    onClick={() => assign(ticket)}
                    size="sm">Assign</Button>
                    : null}
                </CardFooter>
            </Card>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                style={{background: color, color: font}} 
                tag="h3" 
                toggle={toggle}>{topic}</ModalHeader>
                <ModalBody>
                    <h4>{ticket.request_title}</h4>
                    <p>{ticket.request_details}</p>
                    <h4>Steps Taken</h4>
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