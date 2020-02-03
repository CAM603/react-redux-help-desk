import React, { useState } from 'react';

const Login = () => {
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

    const login = () => {
        
        setCredentials({username: '', password: ''})
    }

    return (
        <div>
            <form>
                <input
                type="text"
                name="username"
                placeholder="username"
                onChange={handleChange}
                />
                <input
                type="password"
                name="name"
                onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;