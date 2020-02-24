import React from 'react';
import { Link } from "react-router-dom";

export default function BeerList({beers}) {
    return (
        beers ? (
            <div>
                {beers.map((beer,i) => (
                    <div className="beer-container" key={i}>
                        <img src={beer.image_url} alt={beer.name}/>
                        <div className="beer-info">
                            <h2>{beer.name}</h2>
                            <p>{beer.tagline}</p>
                            <p><b>Created by:</b> {beer.contributed_by}</p>
                            <Link to={`/beers/${beer._id}`}>Read more...</Link>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <p>No beers yet...</p>
        )
    )
}



// import React, { Component } from 'react';
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default class BeerList extends Component {

//     state = {
//         beers: [],
//         APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers",
//         newSearch: ""
//     };

//     handleSearch = e => {
//         this.setState({newSearch: e.target.value})
//     }

//     componentDidMount() {
//         axios
//         .get(this.state.APIEndpoint)
//         .then(apiRes => {
//             this.setState({beers: apiRes.data})
//         })
//         .catch(apiErr => console.error(apiErr));
//     }

//     render() {
//         return this.state.beers ? (
//             <div>
//                 {this.state.beers.map((beer,i) => (
//                     <div className="beer-container" key={i}>
//                         <img src={beer.image_url} alt={beer.name}/>
//                         <div className="beer-info">
//                             <h2>{beer.name}</h2>
//                             <p>{beer.tagline}</p>
//                             <p><b>Created by:</b> {beer.contributed_by}</p>
//                             <Link to={`/beers/${beer._id}`}>Read more...</Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         ) : (
//             <p>No beers yet...</p>
//         )
//     }
// }
