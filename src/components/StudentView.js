import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getAllTickets, editTicket } from '../actions/actions'
import AddTicket from './AddTicket';
import StudentNav from './StudentNav';
import AllStudentTickets from './AllStudentTickets';
import StudentTickets from './StudentTickets';

const StudentView = (props) => {
    const [tab, setTab] = useState('home')
    let name = localStorage.getItem('student')
    name = name.charAt(0).toUpperCase() + name.slice(1)
    
    let display;
    if(tab === 'home') {
        display = <h1>Welcome back, {name}</h1>
    }
    if(tab === 'all') {
        display = <AllStudentTickets />
    }
    if(tab === 'mine') {
        display = <StudentTickets/>
    }
    if(tab === 'add') {
        display = <AddTicket setTab={setTab}/>
    }
    return (
        <div>
            <StudentNav {...props} setTab={setTab}/>
            {display}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        tickets: state.tickets,
        userID: state.userID,
        student: state.user
    }
}
export default connect(mapStateToProps, {getAllTickets, editTicket})(StudentView);