import React, { useState } from 'react';
import Form from './Form';
import { connect } from 'react-redux';

const Home = (props) => {
    const [role, setRole] = useState()

    const setStudent = () => {
        setRole('student')
    }
    const setHelper = () => {
        setRole('helper')
    }

    let display;

    if (role === 'student') {
        display = (
            <div>
                <p>Hello Student</p>
                <Form role="student"/>
            </div>
        )
    } else if (role === 'helper') {
        display = (
            <div>
                <p>Hello Helper</p>
                <Form role="helper"/>
            </div>
        )
    } else {
        display = <p>Choose your role</p>
    }   
    console.log(props.id)
    return (
        <div>
            <div>
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