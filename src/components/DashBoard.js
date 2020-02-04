import React from 'react'
import StudentView from './StudentView'
import HelperView from './HelperView'

import { connect } from 'react-redux';

const Dashboard = (props) => {
    console.log('Porps from dahboard', props)
    return (
        <div>
            <h1>You have made it to the dashboard!!!!</h1>
            <StudentView/>
            <HelperView/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        state: state
    }
}
export default connect(mapStateToProps, {})(Dashboard);