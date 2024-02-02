import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="Menu">
            <>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#posts" as={Link} to='/post'>posts</Nav.Link>
                                <Nav.Link href="#comments" as={Link} to='/comment'>comments</Nav.Link>
                                <Nav.Link href="#albums" as={Link} to='/album'>albums</Nav.Link>
                                <Nav.Link href="#photots" as={Link} to='/photo'>photos</Nav.Link>
                                <Nav.Link href="#todos" as={Link} to='/todos'>todos</Nav.Link>
                                <Nav.Link href="#users" as={Link} to='/users'>users</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
}

export default Menu;