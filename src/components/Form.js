import React, {useState} from 'react';
import Login from './Login';
import Signup from './Signup';

const Form = (props) => {
    const [type, setType] = useState('login')
    return (
        <div>
            {type === 'login' 
            ? <p onClick={() => setType('signup')}>Sign Up</p> 
            : <p onClick={() => setType('login')}>Log In</p>}

            {type === 'login' 
            ? <Login role={props.role}/> 
            : <Signup role={props.role}/>}
        </div>
    )
}

export default Form;