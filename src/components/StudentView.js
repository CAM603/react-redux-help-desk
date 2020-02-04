import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllTickets } from '../actions/actions'

const StudentView = (props) => {
    
    useEffect(() => {
        props.getAllTickets()
    }, [])

    return (
        <div>
            <h1>You are a student</h1>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        tickets: state.tickets
    }
}
export default connect(mapStateToProps, {getAllTickets})(StudentView);