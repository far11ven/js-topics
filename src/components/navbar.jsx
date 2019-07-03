import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark .navbar-fixed-top">
          <form className="form-inline">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <a href="/">
                    <img src="./favicon.png" className="app-logo" />
                  </a>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="js-topics"
                disabled
              />
            </div>
          </form>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
