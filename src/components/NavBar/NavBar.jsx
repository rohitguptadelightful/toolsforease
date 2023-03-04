import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.png';
import LogoDark from '../../assets/logo_dark.png';
import { MdOutlineOpenInNew } from 'react-icons/md'

function NavBar(props) {
  return (
    <Navbar bg={props.bg} expand={props.expand} variant={props.bg} sticky="top">
      <Container >
        <Navbar.Brand href="/"><img src={props.bg === "dark" ? LogoDark : Logo} alt="ToolsForEase" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/WebApps">WebApps</Nav.Link>
            <Nav.Link href="#APIs">APIs</Nav.Link>
            <Nav.Link href="https://rkgservice.com" target="blank">RKGService<MdOutlineOpenInNew /></Nav.Link>
            <Nav.Link href="https://blog.toolsforease.com" target="blank">Blog<MdOutlineOpenInNew /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;