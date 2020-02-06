import React from 'react';
import { connect } from 'react-redux'

import { deleteTicket } from '../../actions/actions'

import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Button } from 'reactstrap'

const StudentTicket = (props) => {
    
    const deleteTicket = (ticketID) => {
        props.deleteTicket(ticketID)
    }
    let topic;
    switch (props.ticket.request_category) {
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
    return (
        <Card>
            <CardHeader tag="h3">
                {topic}
            </CardHeader>
            <CardBody>
                <CardTitle>
                    {props.ticket.request_title}
                </CardTitle>
            </CardBody>
            <CardFooter>
                <Button 
                size="sm" 
                color="info" 
                onClick={() => {props.editHandler(props.ticket)}}>edit</Button>
                    {' '}
                <Button 
                size="sm" 
                color="danger" 
                onClick={() => deleteTicket(props.ticket.id)}>Delete</Button>
            </CardFooter>
        </Card>
    )
}
const mapStateToProps = (state) => {
    return {
        state: state
    }
}
export default connect(mapStateToProps, {deleteTicket})(StudentTicket);

