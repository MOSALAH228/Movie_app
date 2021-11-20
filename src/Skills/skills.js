import React from "react";
import "./skills.css";
import ProgressBar from "react-bootstrap/ProgressBar";

export default class Skills extends React.Component {
  render() {
    return (
      <>
        <br />
        <div id="skills" className="container">
          <h1 class="fs-1 text-center text-light p-2">Skills</h1>
          <p class="text-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, <br /> when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <div id="progress" className="d-flex">
            <span className="row col-4">
              <h4>HTML</h4>
              <h4>CSS</h4>
              <h4>JAVASCRIPT</h4>
              <h4>REACT</h4>
            </span>
            <div className=" col-8">
              <ProgressBar variant="success" now={40} /> <br />
              <ProgressBar variant="info" now={40} /> <br />
              <ProgressBar variant="warning" now={40} /> <br />
              <ProgressBar variant="danger" now={40} /> <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}
