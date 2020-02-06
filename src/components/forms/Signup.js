import React, {useState} from 'react';
import { connect } from 'react-redux';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { registerStudent, registerHelper } from '../../actions/actions';

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
            <Form onSubmit={signup}>
                <FormGroup>
                    <Input 
                    type="text"
                    name="email"
                    placeholder="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                    type="text"
                    name="username"
                    placeholder="username"
                    value={newUser.username}
                    onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                    type="text"
                    name="password"
                    placeholder="password"
                    value={newUser.password}
                    onChange={handleChange}
                    />
                </FormGroup>
                <Button outline color="primary">Register</Button>
            </Form>
        </div>
    )
}

export default connect(null, {registerStudent, registerHelper})(Signup);