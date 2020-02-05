import React, {useState} from 'react';

import { Toast, ToastBody, ToastHeader, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const Ticket = ({ticket}) => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    let topic;
    switch (ticket.request_category) {
        case 1:
            topic = "JavaScript";
            break;
        case 2:
            topic = "CSS";
            break;
        case 3:
            topic = "Node";
            break;
        case 4:
            topic = "React";
            break;
        case 5:
            topic = "Redux";
            break;
        case 6:
            topic = "JSON";
            break;
        case 7:
            topic = "Python";
            break;
        case 8:
            topic = "Git";
            break;
        case 9:
            topic = "Postman";
            break;
        case 10:
            topic = "Yarn";
            break;
        case 11:
            topic = "Library Installation";
            break;
        case 12:
            topic = "App Deployment";
    }

    return (
        <Toast>
            <ToastHeader icon="success">
                {ticket.request_date,' '}{topic}
            </ToastHeader>
            <ToastBody>
                {ticket.request_title}
            </ToastBody>
            <Button size='sm' color="info" onClick={toggle}>Info</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{topic}</ModalHeader>
                <ModalBody>
                    <h3>{ticket.request_title}</h3>
                    <p>{ticket.request_details}</p>
                </ModalBody>
                <ModalFooter>
                    <h3>Steps Taken</h3>
                    <p>{ticket.request_stepstaken}</p>
                </ModalFooter>
            </Modal>
        </Toast>
    )
}

export default Ticket;