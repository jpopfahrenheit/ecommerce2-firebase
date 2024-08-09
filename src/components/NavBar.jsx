import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import { CartWidget } from "./CartWidget";
import { Logo } from "./Logo";

export const NavBar = () => (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Logo />
                <Navbar.Brand as={NavLink} to="/">Zapatillas Center</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/categoria/Deportiva">Deportivas</Nav.Link>
                    <Nav.Link as={NavLink} to="/categoria/Urbana">Urbanas</Nav.Link>
                    <Nav.Link as={NavLink} to="/genero/Hombre">Hombres</Nav.Link>
                    <Nav.Link as={NavLink} to="/genero/Mujer">Mujeres</Nav.Link>
                    <Nav.Link as={NavLink} to="/categoria/Niño">Niños</Nav.Link>
                    <Nav.Link as={NavLink} to="/categoria/Niña">Niñas</Nav.Link>
                </Nav>
            </Container>
            <CartWidget />
        </Navbar>
    </>
);