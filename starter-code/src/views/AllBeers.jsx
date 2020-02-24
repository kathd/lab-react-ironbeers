import React, { Component } from 'react';
import axios from "axios";

import Header from '../components/Header';
import BeerList from "../components/BeerList";
import SearchBeer from "../components/SearchBeer"

export default class AllBeers extends Component {

    state = {
        beers: [],
        APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers",
        newSearch: ""
    };

    handleSearch = e => {
        this.setState({newSearch: e.target.value})
    }

    filterBeers = () => {
        axios
        .get()
    }

    componentDidMount() {
        axios
        .get(this.state.APIEndpoint)
        .then(apiRes => {
            this.setState({beers: apiRes.data})
        })
        .catch(apiErr => console.error(apiErr));
    }

    render() {
        return (
            <div className="pages">
                <Header />
                <SearchBeer
                    inputSearch={this.state.newSearch}
                    handleSearch={this.handleSearch}
                />
                <BeerList
                    beers={this.state.beers}
                />
            </div>
        )
    }
}
