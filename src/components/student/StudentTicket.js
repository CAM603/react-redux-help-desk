import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import { deleteTicket } from '../../actions/actions';
import { cardSwitch } from '../../utils/cardSwitch';

import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Button } from 'reactstrap'
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const StudentTicket = ({ticket, deleteTicket, editHandler}) => {
    const [helper, setHelper] = useState({})

    useEffect(() => {
        if(!ticket.helperId) {
            setHelper({
                name: 'Not assigned',
                email: 'N/A'
            })
        }
        if(ticket.helperId) {
            axiosWithAuth()
            .get(`helpers/${ticket.helperId}`)
            .then(res => setHelper(res.data))
            .catch(err => console.log(err))
        }
    }, [])
    
    const handleDelete = (ticketID) => {
        deleteTicket(ticketID)
    }
    // Proper card topic styles
    let style = cardSwitch(ticket)
    console.log('HERE',ticket)
    return (
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
                </CardText>
            </CardBody>
            <CardFooter>
                <h5>Teacher</h5>
                <p>{helper.name}</p>
                <h5>Email</h5>
                <p>{helper.email}</p>
                <Button 
                size="md" 
                color="secondary" 
                onClick={() => editHandler(ticket)}>edit</Button>
                    {' '}
                <Button 
                size="md" 
                color="danger" 
                onClick={() => handleDelete(ticket.id)}>Delete</Button>
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

