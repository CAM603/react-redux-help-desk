import React, { useState } from 'react';
import HelperNav from './HelperNav';
import AllHelperTickets from './AllHelperTickets';

const HelperView = (props) => {
    const [tab, setTab] = useState('home')
    let name = localStorage.getItem('helper')
    name = name.charAt(0).toUpperCase() + name.slice(1)

    let display;
    if(tab === 'home') {
        display = <h1>Welcome back, {name}</h1>
    }
    if(tab === 'all') {
        
        display = <AllHelperTickets/>
    }
    if(tab === 'mine') {
        // display = <HelperTickets/>
        display = <p>Tickets assigned to this helper</p>
    }
    if(tab === 'add') {
        display = <p>idk if I need this</p>
    }

    return (
        <div>
            <HelperNav {...props} setTab={setTab}/>
            {display}
        </div>
    )
}

export default HelperView;