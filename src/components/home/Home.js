import React, { useState } from 'react';
import Form from './Form';

import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';

const Home = (props) => {
    const [role, setRole] = useState()

    const setStudent = () => {
        setRole('student')
    }
    const setHelper = () => {
        setRole('helper')
    }

    let display;
    let greeting;

    if (role === 'student') {
        display = <Form {...props} role="student"/>
        
        greeting = <h2>Welcome Student!</h2>

    } else if (role === 'helper') {
        display = <Form {...props} role="helper"/>
        
        greeting = <h2>Welcome Helper!</h2>
        
    } else {
        display = <h2>Stop waiting for help</h2>;
        
    }   
    
    return (
        <Container>
            <Jumbotron>
                <h1>Hello, welcome to the best help app!</h1>
                <hr/>
                <h2>Are you the student or helper?</h2>
            <Row>
                <Col>
                    <Button color="primary" size="lg" onClick={setStudent}>student</Button>
                </Col>
                <Col>
                    <Button color="success" size="lg" onClick={setHelper}>helper</Button>
                </Col>
            </Row>
            </Jumbotron>
            <Row>
                <Col>
                    {greeting}
                </Col>
            </Row>
            <Row>
                <Col>
                    {display}
                </Col>
            </Row>
        </Container>
    )
}

export default Home;