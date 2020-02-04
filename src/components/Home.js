import React, { useState } from 'react';
import Form from './Form';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
    const [role, setRole] = useState()

    const setStudent = () => {
        setRole('student')
    }
    const setHelper = () => {
        setRole('helper')
    }
    const logout = () => {
        localStorage.removeItem('token')
    }

    let display;

    if (role === 'student') {
        display = (
            <div>
                <p>Hello Student</p>
                <Form {...props} role="student"/>
            </div>
        )
    } else if (role === 'helper') {
        display = (
            <div>
                <p>Hello Helper</p>
                <Form {...props} role="helper"/>
            </div>
        )
    } else {
        display = <p>Choose your role</p>
    }   
    
    return (
        <div>
            <div>
                <Link to="/dashboard">
                    <h3>Dashboard</h3>
                </Link>
                <p onClick={logout}>Log Out</p>
                <p>Are you a <span onClick={setStudent}>student</span> or a <span onClick={setHelper}>helper</span>?</p>
            </div>
            {display}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        id: state.userID
    }
}
export default connect(mapStateToProps, {})(Home);