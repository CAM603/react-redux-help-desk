import React, { useState } from 'react';
import classnames from 'classnames';
import { Nav, NavItem, NavLink } from 'reactstrap';

const StudentNav = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('student')
        props.history.push('/')
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink 
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { 
                        toggle('1');
                        props.setTab('home')
                        }}>
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { 
                        toggle('2');
                        props.setTab('all')
                        }}>
                        All Tickets
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                    className={classnames({ active: activeTab === '3' })}
                    onClick={() => { 
                        toggle('3'); 
                        props.setTab('mine')
                        }}>
                        My Tickets
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                    className={classnames({ active: activeTab === '4' })}
                    onClick={() => { 
                        toggle('4'); 
                        props.setTab('add')
                        }}>
                        Add Ticket
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={logout}>Log Out</NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default StudentNav;