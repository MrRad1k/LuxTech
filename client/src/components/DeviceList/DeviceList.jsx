import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import DeviceItem from "../DeviceItem/DeviceItem";
import './style.css'


const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex row-cust-style">
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
});

export default DeviceList;