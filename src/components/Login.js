import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginStudent, loginHelper } from '../actions/actions';

import { Form, FormGroup, Input, Button } from 'reactstrap';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const login = (event) => {
        event.preventDefault()
        // if statement to determine if student or helper
        if(props.role === 'student' && !localStorage.getItem('token')) {
            props.loginStudent(credentials)
        }
        if(props.role === 'helper' && !localStorage.getItem('token')) {
            props.loginHelper(credentials)
        }
        setCredentials({username: '', password: ''})
        setTimeout(() => {
            props.history.push("/dashboard")
        }, 1000)
    }
    
    return (
        <div>
            <Form onSubmit={login}>
                <FormGroup>
                        <Input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={credentials.username}
                        onChange={handleChange}
                        />
                </FormGroup>
                <FormGroup>
                        <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={credentials.password}
                        onChange={handleChange}
                        />
                </FormGroup>
                <Button>Log in</Button>
            </Form>
        </div>
    )
}

export default connect(null, {loginStudent, loginHelper})(Login);