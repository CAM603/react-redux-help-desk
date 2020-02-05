import React from 'react'
import StudentView from './StudentView'
import HelperView from './HelperView'

import { connect } from 'react-redux';

const Dashboard = (props) => {
    let student = localStorage.getItem('student');
    let helper = localStorage.getItem('helper')
    return (
        <div>
            {student ? <StudentView {...props}/> : null}
            {helper ? <HelperView/> : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state,
        student: state.student,
        helper: state.helper
    }
}
export default connect(mapStateToProps, {})(Dashboard);