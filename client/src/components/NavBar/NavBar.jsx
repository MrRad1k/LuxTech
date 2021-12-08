import React, { useContext } from 'react';
import { Context } from "../../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { Button, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useHistory } from 'react-router-dom'
import logo from '../../assets/navbar/logo.png'
import profile from '../../assets/navbar/Profile.png'
import './style.css'


const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="white" variant="dark">
            <Container>
                <NavLink className="navlink-custom-style" to={SHOP_ROUTE}><img src={logo} /></NavLink>
                {user.isAuth ?
                    <Nav className="nav-custom-style">
                        <Button
                            style={{ marginRight: "20px" }}
                            variant={"outline-dark"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button

                            variant={"outline-dark"}
                            onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="nav-custom-style">
                        <img src={profile} onClick={() => history.push(LOGIN_ROUTE)} />
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;