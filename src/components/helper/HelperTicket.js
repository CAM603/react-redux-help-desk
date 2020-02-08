import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import { deleteTicket } from '../../actions/actions';


import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, Button, CardText } from 'reactstrap'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { cardSwitch } from '../../utils/cardSwitch';

const HelperTicket = ({ticket, deleteTicket}) => {
    const [student, setStudent] = useState({})
    
    useEffect(() => {
        axiosWithAuth()
        .get(`students/${ticket.creatorId}`)
        .then(res => setStudent(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (ticketID) => {
        deleteTicket(ticketID)
    }
    // Proper card topic styles
    let style = cardSwitch(ticket)

    return (
        <>
        <Card>
            <CardHeader tag="h3" style={{background: style.color, color: style.font}}>
                <img style={{height: '50px'}} src={style.picture}/>
                <span> {style.topic}</span>
            </CardHeader>
            <CardBody>
                <CardTitle>
                    <h4>{ticket.request_title}</h4>
                    <p>{ticket.request_details}</p>
                    <h4>Steps Taken</h4>
                    <p>{ticket.request_stepstaken}</p>
                </CardTitle>
                <CardText>
                    <h5>Student</h5>
                    <p>{student.username}</p>
                    <h5>Email</h5>
                    <p>{student.email}</p>
                </CardText>
            </CardBody>
            <CardFooter>
                <Button
                size="sm"
                color="danger"
                onClick={() => handleDelete(ticket.id)}>Mark Solved</Button>
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
