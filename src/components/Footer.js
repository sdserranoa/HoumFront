import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div className="mt-5" style={{ backgroundColor: 'gray', color: 'white' }}>
                <Row className="p-3">
                    <Col xs={12} md={6}>
                        <Row>
                            <Col xs={12} md={6} style={{ textAlign: 'center' }}>
                                <h1>PokeApp</h1>
                            </Col>
                            <Col xs={12} md={6}></Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row>
                            <Col xs={12} md={6} style={{ textAlign: 'center' }}>
                                Prueba tecnica frontend HOUM
                            </Col>
                            <Col xs={12} md={6} style={{ textAlign: 'center' }}>
                                Autor: Santiago Serrano A
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;