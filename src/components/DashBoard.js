import React from 'react'
import StudentView from './student/StudentView'
import HelperView from './helper/HelperView'

const Dashboard = (props) => {
    let student = localStorage.getItem('student');
    let helper = localStorage.getItem('helper')
    return (
        <div>
            {student ? <StudentView {...props}/> : null}
            {helper ? <HelperView {...props}/> : null}
        </div>
    )
}

export default Dashboard;