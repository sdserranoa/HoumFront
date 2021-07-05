import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Navmenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light">
                    <Navbar.Brand href="/">PokeApp</Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="justify-content-center">
                        <Nav.Link href="/">Pokemon</Nav.Link>
                        <Nav.Link href="/items">Items</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navmenu;