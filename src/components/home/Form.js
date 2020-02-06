import React, {useState} from 'react';
import Login from '../forms/Login';
import Signup from '../forms/Signup';

import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';

const Form = (props) => {
    const [type, setType] = useState('login')
    return (
        <div className="login-container">
            {type === 'login' 
            ? <Login {...props} role={props.role}/> 
            : <Signup role={props.role}  setType={setType}/>}

            {type === 'login' 
            ? 
            <div className="login-footer">
                <p>Not signed up? <span onClick={() => setType('signup')}>Sign Up</span></p> 
            </div>
            : 
            <div className='login-footer'>
                <p>Already registered? <span onClick={() => setType('login')}>Log In</span></p>
                
            </div>
                }
        </div>
    )
}

export default Form;