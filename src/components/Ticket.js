import React, {useState} from 'react';
import { connect } from 'react-redux'

import { assignTicket, getHelperTickets }from '../actions/actions';


import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

var redux = require('.././images/Redux.png');
var react = require('.././images/React.png');
var css = require('.././images/Css.png');
var javascript = require('.././images/Javascript.png');
var node = require('.././images/NodeJs.png');
var python = require('.././images/python.png');
var git = require('.././images/Git.png');
var json = require('.././images/json.png');
var yarn = require('.././images/Yarn.png');
var heroku = require('.././images/Heroku.png');
var npm = require('.././images/Npm.png');


const Ticket = ({ticket, helper, assignTicket}) => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    let topic;
    let color;
    let font;
    let picture;
    switch (ticket.request_category) {
        case 1:
            topic = "JavaScript";
            // font = "#f0db4f";
            picture = javascript;
            break;
        case 2:
            topic = "CSS";
            font = "#264de4";
            // color = "#FFFFFF";
            picture = css;
            break;
        case 3:
            topic = "Node";
            color = "#3C873A";
            picture = node;
            break;
        case 4:
            topic = "React";
            font = "#61DBFB";
            picture = react;
            break;
        case 5:
            topic = "Redux";
            font = "#764abc";
            picture = redux;
            break;
        case 6:
            topic = "{JSON}";
            picture = json;
            break;
        case 7:
            topic = "Python";
            font = "#306998";
            // font = "#FFD43B";
            picture = python;
            break;
        case 8:
            topic = "Git";
            font = "#F1502F"
            // color = "3E2C00";
            picture = git;
            break;
        case 9:
            topic = "Postman";
            color = "#FFFFFF";
            font = "#EF5B25"
            break;
        case 10:
            topic = "Yarn";
            font = "#1F88B6";
            // color = "#FFFFFF";
            picture = yarn;
            break;
        case 11:
            topic = "Library Installation";
            font = "#CC0000";
            // color = "#FFFFFF";
            picture = npm;
            break;
        case 12:
            topic = "App Deployment";
            font = "black";
            // color = "#FFFFFF";
            picture = heroku;
    }
    const assign = (ticket) => {
        assignTicket(ticket)
        getHelperTickets()
    }
    return (
        <>
            <Card>
                <CardHeader tag="h3" style={{background: color, color: font}}>
                    <img style={{height: '50px'}} src={picture}/>
                    <span> {topic}</span>
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
        id: state.userID,
        helperTickets: state.helperTickets
    }
}
export default connect(mapStateToProps, {assignTicket, getHelperTickets})(Ticket);