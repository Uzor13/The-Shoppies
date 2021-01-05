import React, {useState} from "react";

//Bootstrap
import Alert from "react-bootstrap/cjs/Alert";

const NominationsAlert = () => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert className='d-flex' timeout={300} variant="success" onClose={() => setShow(false)} dismissible>
                <div>
                    <i className="fa fa-trophy fa-4x mr-3" style={{color: '#FDCC0D'}} aria-hidden="true"/>
                </div>
                <div>
                    <Alert.Heading>What a Milestone</Alert.Heading>
                    <p>
                        You've just nominated five movies, keep it up!
                    </p>
                </div>
            </Alert>
        );
    } else {
        return null;
    }
}

export default NominationsAlert;