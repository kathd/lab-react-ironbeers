import React, { Component } from "react";
import axios from "axios";
import Header from "../components/Header";

export default class NewBeer extends Component {
  state = {
    beer: {}
  };

  updateState = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ beer: { ...this.state.beer, [name]: value } });
    // changing the state of this.state.beer by adding key(name)-value elements
  };

  formSubmit = e => {
    e.preventDefault();

    const beer = this.state.beer;

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
      .then(apiRes => {
          console.log(apiRes.data)
          this.props.history.push("/")
        // this.setState({ beer: apiRes.data });

      })
      .catch(apiErr => console.error(apiErr));
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        
        <form
          className="form"
          onChange={this.updateState}
          onSubmit={this.formSubmit}
        >
          <div className="form-content">
            <div>
              <label htmlFor="name">Name
              <input id="name" type="text" name="name" className="input" />
              </label>
            </div>

            <div>
              <label htmlFor="tagline">Tagline
              <input
                id="tagline"
                type="text"
                name="tagline"
                className="input"
              />
              </label>
            </div>

            <div>
              <label htmlFor="description">Description
              <textarea
                id="description"
                name="description"
                className="input"
              ></textarea>
              </label>
            </div>

            <div>
              <label htmlFor="first_brewed">First Brewed
              <input
                id="first_brewed"
                type="text"
                name="first_brewed"
                className="input"
              />
              </label>
            </div>

            <div>
              <label htmlFor="brewers_tips">Brewers Tips
              <input
                id="brewers_tips"
                type="text"
                name="brewers_tips"
                className="input"
              />
              </label>
            </div>

            <div>
              <label htmlFor="attenuation_level">Attenuation Level
              <input
                id="attenuation_level"
                type="number"
                name="attenuation_level"
                className="input"
              />
              </label>
            </div>

            <div>
              <label htmlFor="contributed_by">Contributed By
              <input
                id="contributed_by"
                type="text"
                name="contributed_by"
                className="input"
              />
              </label>
            </div>

            <button className="btn">ADD NEW</button>
          </div>
        </form>
      </div>
    );
  }
}
