import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, Row} from "react-bootstrap";
import './style.css'


const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.types.map(type =>
                <Card
                    className="p-3 card-style123"
                    style={{borderBottom: type.id === device.selectedType.id ? '5px solid yellow' : '5px solid silver'}}
                    key={type.id}
                    onClick={() => device.setSelectedType(type)}
                >
                    {type.name}
                </Card>
            )}
        </Row>
    );
});

export default TypeBar;