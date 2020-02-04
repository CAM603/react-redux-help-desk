import React, {useState} from 'react';
import Login from './Login';
import Signup from './Signup';

const Form = (props) => {
    const [type, setType] = useState('login')
    return (
        <div>
            {type === 'login' 
            ? <p onClick={() => setType('signup')}>Not signed up? Sign Up</p> 
            : <p onClick={() => setType('login')}>Already signed up? Log In</p>}

            {type === 'login' 
            ? <Login role={props.role}/> 
            : <Signup role={props.role}  setType={setType}/>}
        </div>
    )
}

export default Form;