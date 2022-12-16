import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    const activeLink = "bg-danger shadow rounded-pill";
    const normalLink = "";

    return (
        <Navbar className="container-fluid bg-success bg-gradient" variant="dark" sticky="top" expand="lg">
            <Container>
                <p className="text-white d-none d-lg-block">sabaw</p>
                <img className="img-fluid d-block ms-2" style={{ width: "40px", height: "40px" }} src="https://cdn.pixabay.com/photo/2022/03/29/15/26/cat-7099597_960_720.png" to="/"></img>
                <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0 gap-2">
                        <NavLink to="/" className={({ isActive }) => (isActive ? activeLink: normalLink)}><Button className="border-0" variant="outline-transparent text-white">Home</Button>{' '}</NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink: normalLink)}><Button className="border-0" variant="outline-transparent text-white">About</Button>{' '}</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? activeLink: normalLink)}><Button className="border-0" variant="outline-transparent text-white">Contact</Button>{' '}</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;