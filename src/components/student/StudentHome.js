import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllTickets, getStudentTickets } from '../../actions/actions'

const StudentHome = ({tickets, studentTickets, getAllTickets, userID}) => {
    let name = localStorage.getItem('student')
    name = name.charAt(0).toUpperCase() + name.slice(1)

    useEffect(() => {
        getAllTickets()
        getStudentTickets(userID)
    }, [])
    

    return (
        <div className="welcome">
            <h1>Welcome back, {name}</h1>
            <div className="count-container">
                <h3>There are <span>{tickets.length}</span> tickets open</h3>
                <h3>You have 
                    <span> {studentTickets.length} </span> 
                    {studentTickets.length === 1 ? 'ticket' : 'tickets'} open</h3>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        tickets: state.tickets,
        studentTickets: state.studentTickets,
        userID: state.userID
    }
}
export default connect(mapStateToProps, {getAllTickets, getStudentTickets})(StudentHome);