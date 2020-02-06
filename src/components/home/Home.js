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
        display = null;
        
    }   
    
    return (
        <Container style={{textAlign: 'center'}}>
            <Jumbotron>
                <h1>Hello, welcome to the best help app!</h1>
                <hr/>
                <h2>Are you a student or teacher?</h2>
            <div className='role-container'>
                
                    <span onClick={setStudent} className="role">🧑‍💻</span>
                    {/* <Button color="primary" size="lg" onClick={setStudent}>student</Button> */}
                
                    <span onClick={setHelper} className="role">🧑‍🏫</span>
                    {/* <Button color="success" size="lg" onClick={setHelper}>helper</Button> */}
                
            </div>
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