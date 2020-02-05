import React, {useState} from 'react';
import Login from '../forms/Login';
import Signup from '../forms/Signup';

const Form = (props) => {
    const [type, setType] = useState('login')
    return (
        <div>
            {type === 'login' 
            ? <Login {...props} role={props.role}/> 
            : <Signup role={props.role}  setType={setType}/>}

            {type === 'login' 
            ? <p>Not signed up? <span onClick={() => setType('signup')}>Sign Up</span></p> 
            : <p>Already signed up? <span onClick={() => setType('login')}>Log In</span></p>}
        </div>
    )
}

export default Form;