import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../Logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar(){ 
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
            <Navbar.Brand> <Link to="/"><img  id='logo' src={logo} width="180px" alt='logo react'/ ></Link></Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-center" style={{fontSize: 25}}>
            <Nav size="2">
                <div>
                    <Link to="/" className='btn btn-outline-warning' id='Links'>Catalogo</Link>
                    <Link to="/category/exoticos" className='btn btn-outline-warning' id='Links'>Exoticos</Link>
                    <Link to="/category/deportivos" className='btn btn-outline-warning' id='Links'>Deportivos</Link>
                    <Link to="/category/suv" className='btn btn-outline-warning' id='Links'>Suv</Link>
                </div>
            </Nav>
            </Navbar.Collapse> 
          <CartWidget /> 
        </Navbar>
    </>
    );
}

export default NavBar;