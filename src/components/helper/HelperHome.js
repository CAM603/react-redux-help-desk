import React from 'react'
import { connect } from 'react-redux';

const HelperHome = ({tickets, helperTickets}) => {
    let name = localStorage.getItem('helper')
    name = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <div className="welcome">
            <h1>Welcome back, {name}</h1>
            <div className="count-container">
                <h3>There are <span>{tickets.length}</span> tickets open</h3>
                <h3>You have <span>{helperTickets.length}</span> tickets open</h3>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        tickets: state.tickets,
        helperTickets: state.helperTickets
    }
}
export default connect(mapStateToProps, {})(HelperHome);