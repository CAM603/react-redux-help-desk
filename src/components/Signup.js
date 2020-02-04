import React, {useState} from 'react';
import { connect } from 'react-redux';

import { registerStudent, registerHelper } from '../actions/actions';

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

        if(props.role === 'student') {
            props.registerStudent(newUser)
        }
        if(props.role === 'helper') {
            props.registerHelper(newUser)
        }
        
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

export default connect(null, {registerStudent, registerHelper})(Signup);