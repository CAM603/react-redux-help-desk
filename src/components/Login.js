import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginStudent, loginHelper } from '../actions/actions';

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
        if(props.role === 'student') {
            props.loginStudent(credentials)
        }
        if(props.role === 'helper') {
            props.loginHelper(credentials)
        }
        setCredentials({username: '', password: ''})
        setTimeout(() => {
            props.history.push("/dashboard")
        }, 1000)
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

export default connect(null, {loginStudent, loginHelper})(Login);