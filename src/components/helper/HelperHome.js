import React from 'react'
import { connect } from 'react-redux';

const HelperHome = ({tickets, studentTickets}) => {
    let name = localStorage.getItem('helper')
    name = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <div className="welcome">
            <h1>Welcome back, {name}</h1>
            <div className="count-container">
                <h3>There are <span>{tickets.length}</span> tickets open</h3>
                <h3>You have <span>{studentTickets.length}</span> tickets open</h3>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        tickets: state.tickets,
        studentTickets: state.studentTickets
    }
}
export default connect(mapStateToProps, {})(HelperHome);