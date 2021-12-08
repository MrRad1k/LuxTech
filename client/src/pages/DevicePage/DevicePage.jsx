import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../../http/deviceAPI";
import './style.css'


const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-4 container-custom-style1">
            <Row>
                <Col md={4}>
                    <Image className="image-custom-style11 " src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
   
                <Col md={4} className="col-custom-style" >
                <h2 className="h2-custom-style ">{device.name}</h2>
                    <Card className="d-flex flex-column align-items-center justify-content-around card-custom-style">
                        <h3>{device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            
            <Row className="d-flex flex-column m-3 mt-5">
                <h1 className="mb-4">Характеристики</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;