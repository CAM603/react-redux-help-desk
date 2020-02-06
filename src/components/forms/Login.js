import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginStudent, loginHelper } from '../../actions/actions';

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
        setTimeout(() => {
            if(localStorage.getItem('token')) {
                props.history.push("/dashboard")
                setCredentials({username: '', password: ''})
            }
        }, 500)
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
                        {<p>{props.error}</p>}
                </FormGroup>
                <Button outline color="primary">Log in</Button>
            </Form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}
export default connect(mapStateToProps, {loginStudent, loginHelper})(Login);