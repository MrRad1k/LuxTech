import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/banner/Banner1.png'
import banner2 from '../../assets/banner/Banner2.png'
import banner3 from '../../assets/banner/Banner3.png'
import './style.css'


class Carousels extends Component {
    render() {
        return (
            <Carousel indicators={false} interval={5000} pause={false} className="carousel-custom-style">
                <Carousel.Item>
                    <img src={banner1} className="img-fon" alt="fon1" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={banner2} className="img-fon" alt="fon1" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={banner3} className="img-fon" alt="fon1" />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Carousels;