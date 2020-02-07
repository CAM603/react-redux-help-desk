import React from 'react'
import { connect } from 'react-redux';

const StudentHome = ({tickets, studentTickets}) => {
    let name = localStorage.getItem('student')
    name = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <div className="welcome">
            <h1>Welcome back, {name}</h1>
            <h2>There are {tickets.length} tickets open</h2>
            <h2>You have {studentTickets.length} tickets open</h2>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        tickets: state.tickets,
        studentTickets: state.studentTickets
    }
}
export default connect(mapStateToProps, {})(StudentHome);