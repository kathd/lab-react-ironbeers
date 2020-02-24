import React, { Component } from 'react';
import Header from "../components/Header";
import axios from "axios";

export default class OneBeer extends Component {

    state = {
        beer: {},
        APIEndpoint: `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`,
    }

    componentDidMount() {
        axios
        .get(this.state.APIEndpoint)
        .then(apiRes => {
            this.setState({beer: apiRes.data})
        })
        .catch(apiErr => console.error(apiErr))
        // console.log(this.props.match.params.id)

    }

    render() {
        return (
            <div>
                <Header />
                <div className="solo-container">
                        <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
                        <div className="solo-beer-info">
                            <h2>{this.state.beer.name}</h2>
                            <p>{this.state.beer.tagline}</p>
                            <p>{this.state.beer.first_brewed}</p>
                            <p>{this.state.beer.attenuation_level}</p>
                            <p>{this.state.beer.description}</p>
                            <p>{this.state.beer.contributed_by}</p>
                        </div>
                    </div>
            </div>
        )
    }
}


// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by