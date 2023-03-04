import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.png';
import LogoDark from '../../assets/logo_dark.png';

function Footer(props) {
    const currentYear = new Date().getFullYear();
  return (
    <Navbar bg={props.bg} expand={props.expand} variant={props.bg} className='justify-content-center'>
      <Container className='d-flex flex-sm-row flex-column'>
        <Navbar.Brand href="/"><img src={props.bg === "dark" ? LogoDark : Logo} alt="ToolsForEase" /></Navbar.Brand>
          <Nav className='m-auto'>
            <Nav.Link className="text-center" href="#">Disclaimer</Nav.Link>
            <Nav.Link className="text-center" href="#WebApps">Terms</Nav.Link>
            <Nav.Link className="text-center" href="#APIs">Privacy Policy</Nav.Link>
          </Nav>
          <Navbar.Text className='justify-content-center'>Rohit Kumar Gupta © {currentYear}</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;