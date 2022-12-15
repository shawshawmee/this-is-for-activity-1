import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Layout({ children }) {
    return (
        <div>
            <Navbar className="p-2 bg-success bg-gradient" variant="dark" fixed="top" expand="lg">
                <Container className="align-middle">
                    <img className="img-fluid d-block" style={{width: "50px", height: "50px"}} src="https://cdn.pixabay.com/photo/2016/03/30/18/58/greeting-1291329_960_720.png" to="/"></img>  
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 mx-auto gap-2">
                            <Link to="/"><Button className="border-0" variant="outline-light rounded-pill">Home</Button>{' '}</Link>
                            <Link to="/about"><Button className="border-0" variant="outline-light rounded-pill">About</Button>{' '}</Link>
                            <Link to="/contact"><Button className="border-0" variant="outline-light rounded-pill">Contact</Button>{' '}</Link>
                        </Nav>
                        <div className="d-flex gap-2">
                            <input type="email" className="form-control rounded-pill" placeholder="user@example.com"></input>
                            <Button className="rounded-pill" variant="danger">Subscribe</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
            <div className="bg-success bg-gradient text-light p-3 d-flex justify-content-center">
                <p>Developed by <strong>Charlie Abrigo</strong></p>
            </div>
        </div>

    );
}

export default Layout;