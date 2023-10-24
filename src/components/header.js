import { Nav, Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand ><h4>Hemanth pusarla </h4></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav className="ms-auto">
                            <Link to="" className="link">Home</Link>
                            <Link to="/about" className="link">About</Link>
                            <Link to="/projects" className="link">Projects</Link>
                            <Link to="/contact" className="link" >Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;