import React, {useState} from 'react';
import Login from '../forms/Login';
import Signup from '../forms/Signup';

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
                <p>Not registered?{' '}
                    <span className="link" onClick={() => setType('signup')}>Register</span>
                </p> 
            </div>
            : 
            <div className='login-footer'>
                <p>Already registered?{' '} 
                    <span className="link" onClick={() => setType('login')}>Log In</span>
                </p>
            </div>
                }
        </div>
    )
}

export default Form;