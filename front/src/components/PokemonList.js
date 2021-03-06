import React, { Component } from 'react';
import {
    Spinner,
    Card, Button,
    Col,
    Row,
    Dropdown,
    DropdownButton,
    ButtonGroup,
    InputGroup,
    FormControl,
    Form
} from 'react-bootstrap';
import PokemonDetail from './PokemonDetail';

class PokemonList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            totalPokemon: 0,
            pokemonList: [],
            showSpinner: true,
            nextPage: "",
            typesList: [],
            showLoadMoreSpinner: false,
            showLoadAllSpinner: false,
            showDetail: false,
            pokemonDetailInfo: {
                abilities: [],
                base_experience: 0,
                forms: [],
                game_indices: [],
                height: 0,
                held_items: [],
                id: 0,
                is_default: true,
                location_area_encounters: "",
                moves: [],
                name: "",
                order: 0,
                past_types: [],
                species: {},
                sprites: { front_default: "" },
                stats: [
                    {
                        base_stat: 0
                    },
                    {
                        base_stat: 0
                    },
                    {
                        base_stat: 0
                    },
                    {
                        base_stat: 0
                    },
                    {
                        base_stat: 0
                    },
                    {
                        base_stat: 0
                    }
                ],
                types: [],
                weight: 0,
                searchTerm: "",
                showClearSearch: false
            }
        }

        this.loadMore = this.loadMore.bind(this)
        this.loadAll = this.loadAll.bind(this)
        this.showDetail = this.showDetail.bind(this)
        this.closeDetail = this.closeDetail.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
        this.handleClearSearch = this.handleClearSearch.bind(this)
    }

    componentDidMount() {

        fetch(process.env.REACT_APP_API_URL + "pokemon", {
            method: 'GET'
        }).then(res => {
            return res.json()
        }).then(data => {
            this.setState({ nextPage: data.next, totalPokemon: data.count })
            this.loadPokemonInfo(data.results)
        }).catch(err => {
            console.log(err)
        })

        fetch(process.env.REACT_APP_API_URL + "type/?limit=100", {
            method: 'GET'
        }).then(res => {
            return res.json()
        }).then(data => {
            let list = data.results
            let arr = []
            list.forEach(t => {
                arr.push(t.name)
            });
            this.setState({ typesList: arr })
        }).catch(err => {
            console.log(err)
        })

        /* fetch("https://pokeapi.co/api/v2/pokemon/1", {
            method: 'GET'
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err)
        }) */
    }

    onSearchChange(e) {
        this.setState({ searchTerm: e.target.value })
    }

    loadPokemonInfo(data) {
        let pokeArr = []
        let requests = data.map((item) => {
            return new Promise(resolve => {
                fetch(item.url, {
                    method: 'GET'
                }).then(res => {
                    return res.json()
                }).then(pokemonInfo => {
                    pokeArr.push(pokemonInfo)
                    resolve()
                }).catch(err => {
                    console.log(err)
                })
            })
        })
        Promise.all(requests).then(() => {
            let aux = this.state.pokemonList
            pokeArr = aux.concat(pokeArr)
            this.setState({ pokemonList: pokeArr, showSpinner: false, showLoadMoreSpinner: false })
        })
    }

    loadMore() {
        this.setState({ showLoadMoreSpinner: true }, () => {
            fetch(this.state.nextPage, {
                method: 'GET'
            }).then(res => {
                return res.json()
            }).then(data => {
                this.setState({ nextPage: data.next })
                this.loadPokemonInfo(data.results)
            }).catch(err => {
                console.log(err)
            })
        })
    }

    loadAll() {
        this.setState({ showLoadAllSpinner: true }, () => {
            fetch(process.env.REACT_APP_API_URL + "pokemon/?limit=" + this.state.totalPokemon, {
                method: 'GET'
            }).then(res => {
                return res.json()
            }).then(data => {
                this.setState({ nextPage: data.next, totalPokemon: data.count })
                this.loadPokemonFilterInfo(data.results)
            }).catch(err => {
                console.log(err)
            })
        })
    }

    filter(filter, filterType) {
        fetch(process.env.REACT_APP_API_URL + filterType + "/" + filter, {
            method: 'GET'
        }).then(res => {
            return res.json()
        }).then(data => {
            this.setState({ nextPage: null })
            let aux = []
            data.pokemon.forEach(p => {
                aux.push({ url: p.pokemon.url })
            })
            this.loadPokemonFilterInfo(aux)
        }).catch(err => {
            console.log(err)
        })
    }

    handleSearch(e) {
        console.log(this.state.searchTerm);
        if (this.state.searchTerm) {
            e.preventDefault();
            this.setState({ showLoadAllSpinner: true }, () => {
                fetch(process.env.REACT_APP_API_URL + "pokemon/?limit=" + this.state.totalPokemon, {
                    method: 'GET'
                }).then(res => {
                    return res.json()
                }).then(data => {
                    this.setState({ nextPage: data.next, totalPokemon: data.count, showClearSearch: true })
                    let aux = [];
                    aux = data.results
                    let res = aux.filter(x => x.name.includes(this.state.searchTerm))
                    this.loadPokemonFilterInfo(res)
                }).catch(err => {
                    console.log(err)
                })
            })
        }
    }

    loadPokemonFilterInfo(data, callback) {
        let pokeArr = []
        this.setState({ showSpinner: true }, () => {
            let requests = data.map((item) => {
                return new Promise(resolve => {
                    fetch(item.url, {
                        method: 'GET'
                    }).then(res => {
                        return res.json()
                    }).then(pokemonInfo => {
                        pokeArr.push(pokemonInfo)
                        resolve()
                    }).catch(err => {
                        console.log(err)
                    })
                })
            })
            Promise.all(requests).then(() => {
                this.setState({ pokemonList: pokeArr, showSpinner: false, showLoadAllSpinner: false }, () => {
                    if (callback) {
                        callback()
                    }
                })
            })
        })

    }

    showDetail(info) {
        this.setState({ showDetail: true, pokemonDetailInfo: info })
    }

    closeDetail() {
        this.setState({
            showDetail: false,
            pokemonDetailInfo: {
                abilities: [],
                base_experience: 0,
                forms: [],
                game_indices: [],
                height: 0,
                held_items: [],
                id: 0,
                is_default: true,
                location_area_encounters: "",
                moves: [],
                name: "",
                order: 0,
                past_types: [],
                species: {},
                sprites: { front_default: "" },
                stats: [
                    {
                        base_stat: 0
                    },
                    {
                        base_stat: 0
                    },
                    {
                        base_stat: 0
                    },
                    {
                        base_stat: 0
                    },
                    {
                        base_stat: 0
                    },
                    {
                        base_stat: 0
                    }
                ],
                types: [],
                weight: 0
            }
        })
    }

    handleClearSearch() {
        window.location.reload()
    }

    renderLoadMore() {
        if (this.state.nextPage === null) {
            return <div></div>
        }

        if (this.state.showLoadMoreSpinner) {
            return <Button variant="outline-orng" onClick={this.loadMore}>
                <Spinner size="sm" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Button>
        } else {
            return <Button variant="outline-orng" onClick={this.loadMore}>
                See more
            </Button>
        }
    }

    renderLoadAll() {

        if (this.state.nextPage === null) {
            return <div></div>
        }

        if (this.state.showLoadAllSpinner) {
            return <Button variant="outline-orng" onClick={this.loadAll}>
                <Spinner size="sm" animation="border" role="status">
                    <span className="sr-only">Cargando...</span>
                </Spinner>
            </Button>
        } else {
            return <Button variant="outline-orng" onClick={this.loadAll}>
                See All
            </Button>
        }
    }

    renderPokemon() {
        if (this.state.showSpinner) {
            return <div className="spinner-container mt-5">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Cargando...</span>
                </Spinner>
            </div>
        } else {
            return <div>
                <Row className="mx-5">
                    {this.state.pokemonList.map((i, k) => {
                        return (
                            <Col xs={12} sm={6} md={3} xl={2} xxl={2} key={k}>
                                <Card className="my-3">
                                    <Card.Img variant="top" src={i.sprites.front_default} />
                                    <Card.Body>
                                        <Card.Title>{i.name}</Card.Title>
                                        <div className="p-3 mb-3" style={{
                                            border: 'solid',
                                            borderWidth: '1px',
                                            borderColor: 'lightgray',
                                            borderRadius: '15px'
                                        }}>
                                            <Row className="p-2">
                                                {i.types.map((j, l) => {
                                                    return (
                                                        <Col key={l}>{j.type.name}</Col>
                                                    )
                                                })}
                                            </Row>
                                            <Row className="p-2">
                                                <Col>{i.height / 10} m</Col>
                                                <Col>{i.weight / 10} kg</Col>
                                            </Row>

                                        </div>

                                        <Button variant="orng" onClick={() => this.showDetail(i)}>Details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                <Row className="m-3" style={{ justifyContent: 'center' }}>
                    <ButtonGroup>
                        {this.renderLoadMore()}
                        {this.renderLoadAll()}
                    </ButtonGroup>

                </Row>
            </div>
        }
    }

    renderClearSearch() {
        if (this.state.showClearSearch) {
            console.log("entra", this.state.searchTerm);
            return <Button variant='danger' onClick={this.handleClearSearch}>X</Button>
        } else {
            return <div></div>
        }
    }

    renderFilters() {
        return <Row className="mt-3">
            <Col xs={1}></Col>
            <Col xs={10}>
                <Form onSubmit={this.handleSearch} noValidate>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Button variant='outline-orng' type='submit'>
                                Filter
                            </Button>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Search..."
                            aria-label="Search"
                            onChange={this.onSearchChange}
                        />
                        {this.renderClearSearch()}

                        <DropdownButton variant='outline-orng' className="ml-4" id="dropdown-basic-button" title="Type">
                            {this.state.typesList.map((i, k) => {
                                return (
                                    <Dropdown.Item key={k} onClick={() => this.filter(i, "type")}>{i}</Dropdown.Item>
                                )
                            })}
                        </DropdownButton>
                    </InputGroup>
                </Form>
            </Col>
            <Col xs={1}></Col>
        </Row>
    }

    render() {
        return (
            <div>
                <PokemonDetail show={this.state.showDetail} pokemon={this.state.pokemonDetailInfo} close={this.closeDetail} />
                {this.renderFilters()}
                {this.renderPokemon()}
            </div>
        );
    }
}

export default PokemonList;