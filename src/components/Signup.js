import React, {useState} from 'react';
import { connect } from 'react-redux';

import { registerStudent } from '../actions/actions';

const Signup = (props) => {
    const [newUser, setNewUser] = useState({
        username: '',
        password: ''
    })
    const handleChange = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })
    }
    const signup = (event) => {
        event.preventDefault()
        props.registerStudent(newUser)
        setNewUser({username: '', password: ''})
        props.setType('login')
    }
    return (
        <div>
            <form onSubmit={signup}>
                <input 
                type="text"
                name="email"
                placeholder="email"
                />
                <input 
                type="text"
                name="username"
                placeholder="username"
                value={newUser.username}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="password"
                placeholder="password"
                value={newUser.password}
                onChange={handleChange}
                />
                <button>Register</button>
            </form>
        </div>
    )
}

export default connect(null, {registerStudent})(Signup);