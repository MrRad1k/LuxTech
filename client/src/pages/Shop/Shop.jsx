import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '../..';
import BrandBar from '../../components/BrandBar/BrandBar';
import DeviceList from '../../components/DeviceList/DeviceList';
import Pages from '../../components/Pages/Pages';
import TypeBar from '../../components/TypeBar/TypeBar';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';
import Footer from '../../components/Footer/Footer'
import Carousels from '../../components/Carousel/Carousels'
import './style.css'


const Shop = observer(() => {
    const { device } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 6).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 6).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <>
            <Carousels/>

            <Container>
                <Row className="mt-2">
                    <Col md={3}>
                        <BrandBar />
                    </Col>

                    <Col md={9}>
                        <TypeBar />
                        <DeviceList />
                        <Pages />
                    </Col>
                </Row>
            </Container>

            <div className="parallax-img" >
                <Footer />
            </div> 
        </>
    );
});

export default Shop;