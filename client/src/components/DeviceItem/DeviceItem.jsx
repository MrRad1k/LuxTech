import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../../utils/consts";
import './style.css'


const DeviceItem = ({device}) => {
    const history = useHistory()
    
    return (
        <Col md={4} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card className="stylecard" style={{cursor: 'pointer',}} >
                <div className="div-custom-style">{device.name}</div> 
                <Image className="image-custom-style" src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="div-custom-style">{ device.price} руб.</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;