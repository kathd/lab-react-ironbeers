import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

export default function Home() {
    return (
        <div className="pages">
            <div>
                <Link to="/beers">
                <img src="/images/beers.png" alt="beers"/>
                <h1>All Beers</h1>
                <p>Since beer is one of the most consumed drinks between Ironhackers,
                our mission here is to create an app to showcase some of the best-handcrafted beers,
                but not just that - to save some as well so the rest of Ironhack community is informed. </p>
                </Link>
            </div>
            <div>
                <Link to="/random-beer">
                <img src="/images/random-beer.png" alt="random-beers"/>
                <h1>Random Beer</h1>
                <p>Since beer is one of the most consumed drinks between Ironhackers,
                our mission here is to create an app to showcase some of the best-handcrafted beers,
                but not just that - to save some as well so the rest of Ironhack community is informed. </p>
                </Link>
            </div>
            <div>
                <Link to="/new-beer">
                <img src="/images/new-beer.png" alt="new-beer"/>
                <h1>New Beer</h1>
                <p>Since beer is one of the most consumed drinks between Ironhackers,
                our mission here is to create an app to showcase some of the best-handcrafted beers,
                but not just that - to save some as well so the rest of Ironhack community is informed. </p>
                </Link>
            </div>
        </div>
    )
}
