import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getAllTickets, editTicket } from '../../actions/actions'
import AddTicket from '../forms/AddTicket';
import StudentNav from './StudentNav';
import AllStudentTickets from './AllStudentTickets';
import StudentTickets from './StudentTickets';
import StudentHome from './StudentHome';

const StudentView = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [tab, setTab] = useState('home')
    
    let display;
    if(tab === 'home') {
        display = <StudentHome/>
    }
    if(tab === 'all') {
        display = <AllStudentTickets />
    }
    if(tab === 'mine') {
        display = <StudentTickets/>
    }
    if(tab === 'add') {
        display = <AddTicket setTab={setTab} setActiveTab={setActiveTab}/>
    }
    return (
        <div>
            <StudentNav {...props} setTab={setTab} activeTab={activeTab} setActiveTab={setActiveTab}/>
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