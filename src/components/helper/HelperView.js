import React, { useState } from 'react';
import HelperNav from './HelperNav';
import AllHelperTickets from './AllHelperTickets';
import HelperTickets from './HelperTickets';

const HelperView = (props) => {
    const [tab, setTab] = useState('home')
    let name = localStorage.getItem('helper')
    name = name.charAt(0).toUpperCase() + name.slice(1)

    let display;
    if(tab === 'home') {
        display = (
            <div className="welcome">
                <h1>Welcome back, {name}</h1>
            </div>
        )
    }
    if(tab === 'all') {
        
        display = <AllHelperTickets/>
    }
    if(tab === 'mine') {
    
        display = <HelperTickets />
    }

    return (
        <div>
            <HelperNav {...props} setTab={setTab}/>
            {display}
        </div>
    )
}

export default HelperView;