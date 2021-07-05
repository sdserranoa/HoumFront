import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";


class ItemsList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nextPage: "",
            count: 0,
            items: [],
            allLoaded: false
        }
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + "item", {
            method: 'GET'
        }).then(res => {
            return res.json()
        }).then(data => {
            this.setState({ count: data.count }, () => {
                fetch(process.env.REACT_APP_API_URL + "item/?limit="+this.state.count, {
                    method: 'GET'
                }).then(res => {
                    return res.json()
                }).then(data => {
                    this.loadItemsInfo(data.results)
                }).catch(err => {
                    console.log(err)
                })
            })
        }).catch(err => {
            console.log(err)
        })


    }

    loadItemsInfo(data) {
        let pokeArr = []
        let requests = data.map((item) => {
            return new Promise(resolve => {
                fetch(item.url, {
                    method: 'GET'
                }).then(res => {
                    return res.json()
                }).then(pokemonInfo => {
                    console.log(pokemonInfo)
                    let aux = {
                        name: pokemonInfo.name,
                        cost: pokemonInfo.cost,
                        category: pokemonInfo.category.name,
                        fling_power: pokemonInfo.fling_power,
                        effect_entries: pokemonInfo.effect_entries[0].effect
                    }
                    pokeArr.push(aux)
                    resolve()
                }).catch(err => {
                    console.log(err)
                })
            })
        })
        Promise.all(requests).then(() => {
            let aux = this.state.items
            pokeArr = aux.concat(pokeArr)
            this.setState({ items: pokeArr })
        })
    }

    render() {

        const columns = [
            {
                name: "name",
                label: "Nombre",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "cost",
                label: "Costo",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "category",
                label: "Categoría",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "fling_power",
                label: "Fling Power",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "effect_entries",
                label: "Effect",
                options: {
                    filter: false,
                    sort: false,
                }
            },
        ];

        return (
            <div className="m-5">
                <MUIDataTable
                    title={"Items List"}
                    data={this.state.items}
                    columns={columns}
                    options={{
                        filterType: 'dropdown',
                        count: this.state.count,
                        print: false,
                        download: false,
                        selectableRows: false,
                    }}
                />
            </div>
        );
    }
}

export default ItemsList;