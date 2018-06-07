import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const iconsContainer = {
  fontSize: 60,
  textAlign: "center"
};
class App extends Component {
  icons = ["map-marker-alt", "taxi", "glass-martini"];
  renderIcons = () => {
    return this.icons.map(icon => {
      return (
        <i key={icon} style={{ margin: 10 }} className={`fa fa-${icon}`} />
      );
    });
  };
  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <h1>PLANS TONIGHT ?</h1>
        <div style={iconsContainer}>{this.renderIcons()}</div>
        <p>See which bars are hoppin' tonight and RSVP ahead of time!</p>
        <p>Remember: take a cab and drink responsibly.</p>
        <div>
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="WHERE YOU AT ?"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{backgroundColor: 'inital'}}
            />
            <div class="input-group-append">
              <span class="input-group-text btn">GO</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
