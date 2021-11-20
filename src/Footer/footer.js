import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import {
  faFacebook,
  faTwitter,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="container">
        <p className="fs-3 row col-6 ps-3 text-light">Get in touch</p> <br />
        <div className="d-flex">
          <FontAwesomeIcon
            className="fs-3 row col-6 text-light ps-2"
            icon={faFacebook}
          />
          <span className="fs-5 row ps-5">mohamed@gmail.com</span>
        </div>
        <br />
        <div className="d-flex">
          <FontAwesomeIcon
            className="fs-3 row col-6 text-light ps-2"
            icon={faTwitter}
          />
          <span className="fs-5 row ps-5">mohamed@gmail.com</span>
        </div>
        <Button id="btn" variant="danger">
          Download Resume
        </Button>
        <div id="icons" className="row">
          <FontAwesomeIcon
            className="fs-1  col-6 text-light "
            icon={faFacebook}
          />{" "}
          <br />
          <FontAwesomeIcon
            className="fs-1  col-6 text-light "
            icon={faTwitter}
          />{" "}
          <br />
          <FontAwesomeIcon
            className="fs-1  col-6 text-light "
            icon={faYahoo}
          />{" "}
          <br />
        </div>
      </div>
    );
  }
}
