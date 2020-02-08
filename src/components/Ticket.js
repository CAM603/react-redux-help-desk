import React, {useState} from 'react';
import { connect } from 'react-redux'

import { assignTicket, getHelperTickets }from '../actions/actions';
import { cardSwitch } from '../utils/cardSwitch';

import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const Ticket = ({ticket, helper, assignTicket}) => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    // Proper card topic styles
    let style = cardSwitch(ticket)
    
    const assign = (ticket) => {
        assignTicket(ticket)
        getHelperTickets()
    }
    return (
        <>
            <Card>
                <CardHeader tag="h3" style={{background: style.color, color: style.font}}>
                    <img style={{height: '50px'}} src={style.picture}/>
                    <span> {style.topic}</span>
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
                    outline color="primary"
                    onClick={() => assign(ticket)}
                    size="sm">Help Student</Button>
                    : null}
                    <span> {ticket.request_date}</span>
                </CardFooter>
            </Card>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                style={{background: style.color, color: style.font}} 
                tag="h3" 
                toggle={toggle}>
                    <img style={{height: '50px'}} src={style.picture}/>
                    <span> {style.topic}</span>
                </ModalHeader>
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
        id: state.userID,
        helperTickets: state.helperTickets
    }
}
export default connect(mapStateToProps, {assignTicket, getHelperTickets})(Ticket);