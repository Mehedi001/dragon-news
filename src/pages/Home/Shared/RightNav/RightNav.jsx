import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/Fa';
import QZone from "../QZone/QZone";

import bg from '../../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className="mb-2" variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            <div className="mt-4">
                <h4>Find US On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                    
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img className="img-fluid w-100 mt-4" src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;