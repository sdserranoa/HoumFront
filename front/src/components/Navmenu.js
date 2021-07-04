import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Navmenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light">
                    <Navbar.Brand href="#home">PokeApp</Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="justify-content-center">
                        <Nav.Link href="#home">Pokemon</Nav.Link>
                        <Nav.Link href="#Items">Items</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navmenu;