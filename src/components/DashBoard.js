import React from 'react'
import StudentView from './StudentView'
import HelperView from './HelperView'

import { connect } from 'react-redux';

const Dashboard = (props) => {
    console.log('Porps from dahboard', props)
    return (
        <div>
            <h1>You have made it to the dashboard!!!!</h1>
            {props.student ? <StudentView/> : null}
            {props.helper ? <HelperView/> : null}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        student: state.student,
        helper: state.helper
    }
}
export default connect(mapStateToProps, {})(Dashboard);