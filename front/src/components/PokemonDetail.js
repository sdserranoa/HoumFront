import React, { Component } from 'react';
import { Button, Modal, Row, Col, ButtonGroup, Table } from 'react-bootstrap';
import { RiSwordFill, RiHeartFill, RiShieldFill, RiSwordLine, RiShieldLine } from 'react-icons/ri';
import { GiRunningShoe, GiWeight } from 'react-icons/gi'
import { FaRulerVertical } from 'react-icons/fa'
import { CgPokemon } from 'react-icons/cg'

class PokemonDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            image: "front_default",
            info: "info",
            moves: []
        }

        this.handleClose = this.handleClose.bind(this)
    }

    handleImageChange(image) {
        this.setState({ image: image })
    }

    handleInfoChange(info) {
        if (info === 'moves') {
            this.loadMovesInfo()
        }
        this.setState({ info: info })
    }

    handleClose() {
        this.setState({
            image: "front_default",
            info: "info"
        })
        this.props.close()
    }

    loadMovesInfo(callback) {
        let movesArr = []
        let requests = this.props.pokemon.moves.map((item) => {
            return new Promise(resolve=> {
                fetch(item.move.url, {
                    method: 'GET'
                }).then(res => {
                    return res.json()
                }).then(moveInfo => {
                    movesArr.push(moveInfo)
                    resolve()
                })
            })
        })
        Promise.all(requests).then(() => {
            console.log(movesArr);
            this.setState({ moves: movesArr })
        })
    }

    renderImage() {
        if (this.state.image === "front_default") {
            return this.props.pokemon.sprites.front_default
        } else if (this.state.image === "front_female") {
            return this.props.pokemon.sprites.front_female
        } else if (this.state.image === "front_shiny") {
            return this.props.pokemon.sprites.front_shiny
        } else if (this.state.image === "front_shiny_female") {
            return this.props.pokemon.sprites.front_shiny_female
        }
    }

    renderImageButton() {
        var child = []
        if (this.props.pokemon.sprites.front_default !== null) {
            child.push(<Button variant="outline-orng" key={1} onClick={() => this.handleImageChange("front_default")}>Default</Button>)
        }
        if (this.props.pokemon.sprites.front_shiny !== null) {
            child.push(<Button variant="outline-orng" key={2} onClick={() => this.handleImageChange("front_shiny")}>Shiny</Button>)
        }
        if (this.props.pokemon.sprites.front_female !== null) {
            child.push(<Button variant="outline-orng" key={3} onClick={() => this.handleImageChange("front_female")}>Female</Button>)
        }
        if (this.props.pokemon.sprites.front_shiny_female !== null) {
            child.push(<Button variant="outline-orng" key={4} onClick={() => this.handleImageChange("front_shiny_female")}>Female Shiny</Button>)
        }
        let html = React.createElement("div", { className: "btn-group" }, child)
        return html
    }

    renderInfo() {
        if (this.state.info === "info") {
            return <div>
                <Row style={{ justifyContent: 'center' }}>
                    <h3>INFO</h3>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <h4><GiWeight className="mx-4 my-2" />Weight: {this.props.pokemon.weight / 10} kg</h4>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4><FaRulerVertical className="mx-4 my-2" />Height: {this.props.pokemon.height / 10} m</h4>
                    </Col>
                </Row>
                <Row>
                    {this.props.pokemon.types.map((i, k) => {
                        return (
                            <Col key={k} xs={12} md={6}>
                                <h4><CgPokemon className="mx-4 my-2" />Type{k}: {i.type.name}</h4>
                            </Col>
                        )
                    })}
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    <h3>STATS</h3>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <h4><RiHeartFill className="mx-4 my-2" />Hp: {this.props.pokemon.stats[1].base_stat}</h4>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4><GiRunningShoe className="mx-4 my-2" />Speed: {this.props.pokemon.stats[5].base_stat}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <h4><RiSwordFill className="mx-4 my-2" />Atk: {this.props.pokemon.stats[1].base_stat}</h4>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4><RiShieldFill className="mx-4 my-2" />Def: {this.props.pokemon.stats[1].base_stat}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <h4><RiSwordLine className="mx-4 my-2" />SP Atk:{this.props.pokemon.stats[1].base_stat}</h4>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4><RiShieldLine className="mx-4 my-2" />SP Def:{this.props.pokemon.stats[1].base_stat}</h4>
                    </Col>
                </Row>
            </div>
        } else if (this.state.info === "moves") {
            return <div>
                <Row>
                    <Col>
                        <Table hover size="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>pp</th>
                                    <th>Accuracy</th>
                                    <th>Damage Class</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.moves.map((i, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>{i.name}</td>
                                            <td>{i.pp}</td>
                                            <td>{i.accuracy}</td>
                                            <td>{i.damage_class.name}</td>
                                            <td>{i.type.name}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        }
    }

    render() {
        //console.log(this.props);
        return (
            <div>
                <Modal show={this.props.show} onHide={this.handleClose} dialogClassName="my-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.pokemon.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ alignContent: 'center' }}>
                        <Row>
                            <Col xs={12} md={5}>
                                <Row className="mb-4">
                                    <Col style={{ textAlign: 'center' }}>
                                        {this.renderImageButton()}
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col style={{ textAlign: 'center' }}>
                                        <img style={{
                                            borderColor: 'darkgray',
                                            borderWidth: '1px',
                                            borderStyle: 'solid',
                                            borderRadius: '30px'
                                        }}
                                            src={this.renderImage()}
                                            alt=""
                                            width='60%'></img>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={7}>
                                <Row className="mb-4">
                                    <Col style={{ textAlign: 'center' }}>
                                        <ButtonGroup>
                                            <Button variant="outline-orng" onClick={() => this.handleInfoChange("info")}>Info</Button>
                                            <Button variant="outline-orng" onClick={() => this.handleInfoChange("moves")}>Moves</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                                {this.renderInfo()}
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default PokemonDetail;