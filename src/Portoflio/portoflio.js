import React from "react";

export default class Portoflio extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row col-2">
          <p className="fs-2">Protoflio</p>
        </div>

        <div className="d-flex">
          <div className="row col-3 bg-danger ms-5">
            <p>Lorem1</p>
          </div>

          <div className="row col-3 bg-secondary ms-5">
            <p>Lorem2</p>
          </div>

          <div className="row col-3 bg-danger ms-5">
            <p>Lorem3</p>
          </div>
        </div>
        <br />
        <div className="d-flex">
          <div className="row col-3 bg-danger ms-5">
            <p>Lorem1</p>
          </div>

          <div className="row col-3 bg-secondary ms-5">
            <p>Lorem2</p>
          </div>

          <div className="row col-3 bg-danger ms-5">
            <p>Lorem3</p>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
