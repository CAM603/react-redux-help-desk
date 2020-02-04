import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginStudent } from '../actions/actions';

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
        props.loginStudent(credentials)
        setCredentials({username: '', password: ''})
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                type="text"
                name="username"
                placeholder="username"
                value={credentials.username}
                onChange={handleChange}
                />
                <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default connect(null, {loginStudent})(Login);