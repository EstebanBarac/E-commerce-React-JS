import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.svg';
import CartWidget from './CartWidget/CartWidget';

function NavBar(){ 
    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
            <Navbar.Brand> <img src={logo} width="60px" height="60px" alt='logo react'/> STORE </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-center" style={{fontSize: 25}}>
            <Nav size="2">
                <Nav.Link href="productos">Productos</Nav.Link>
                <Nav.Link href="productos">Contacto</Nav.Link>
            </Nav>
            </Navbar.Collapse>

            <CartWidget items={3}/> 

        </Navbar>
    );
}

export default NavBar;