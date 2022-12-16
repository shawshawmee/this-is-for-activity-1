import "./Home.css";

function NavBar() {
    return (
        <Navbar className="bg-dark bg-gradient" variant="dark" sticky="top" expand="lg">
            <Container>
                <p className="text-white d-none d-lg-block">sabaw</p>
                <img className="img-fluid d-block ms-2" style={{ width: "40px", height: "40px" }} src="https://cdn.pixabay.com/photo/2022/03/29/15/26/cat-7099597_960_720.png" to="/"></img>
                <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0 gap-2">
                        <NavLink to="/"><Button className="border-0 navbar" variant="outline-light rounded-pill">Home</Button>{' '}</NavLink>
                        <NavLink to="/about"><Button className="border-0 navbar" variant="outline-light rounded-pill">About</Button>{' '}</NavLink>
                        <NavLink to="/contact"><Button className="border-0 navbar" variant="outline-light rounded-pill">Contact</Button>{' '}</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;