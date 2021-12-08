import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css'


const Footer = () => (
    <Container fluid className="footer-style " style={{ top: "250px" }}>
        <div class="footer-basic">
            <footer>
                <div class="social">
                    <a href="#"><i class="icon ion-social-instagram" /></a>
                    <a href="#"> <i class="icon ion-social-snapchat" /></a>
                    <a href="#"><i class="icon ion-social-twitter" /></a>
                    <a href="#"><i class="icon ion-social-facebook" /></a>
                </div>

                <ul class="list-inline">
                    <li class="list-inline-item"><a href="#">Home</a></li>
                    <li class="list-inline-item"><a href="#">Services</a></li>
                    <li class="list-inline-item"><a href="#">About</a></li>
                    <li class="list-inline-item"><a href="#">Terms</a></li>
                    <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                </ul>
                
                <p class="copyright">Copyright © 2021 LuxTech</p>
            </footer>
        </div>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </Container>
)

export default Footer;