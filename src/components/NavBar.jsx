import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.svg';

function NavBar(){ 
    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
            <Navbar.Brand> <img src={logo} width="60px" height="60px" /> STORE </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-center" style={{fontSize: 20}}>
            <Nav size="2">
                <Nav.Link href="productos">Productos</Nav.Link>
                <Nav.Link href="productos">Contacto</Nav.Link>
                <Nav.Link href="productos">Carrito</Nav.Link>
            </Nav> 
            </Navbar.Collapse>

           

        </Navbar>
    );
}

export default NavBar;