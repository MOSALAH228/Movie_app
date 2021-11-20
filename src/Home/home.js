import React from "react";
import "./home.css";
import image from "../assets/portfolio2.jpg";
import Button from "react-bootstrap/Button";
import logo from "../assets/1.jpg";
import jsPDF from "jspdf";

export default class Home extends React.Component {
  download = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(logo, "PNG", 65, 20, 500, 400);

    doc.save("Resume.pdf");
  };
  render() {
    return (
      <>
        <div id="home" className="container">
          <div className="row">
            <img src={image} class="col-3 img-fluid" alt="" />
            <h1 class="fs-1 text-center p-2">Mohamed Salah</h1>
            <h5 class="color-primary text-danger text-center">
              FrontEnd Developer
            </h5>
          </div>

          <div className="container d-flex">
            <h1 class="col-2">About me</h1>
            <p class="col-10 p-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with
            </p>
          </div>
          <Button
            onClick={this.download}
            id="bn"
            className="d-flex"
            variant="primary"
          >
            Download Resume
          </Button>
          <br />
        </div>
      </>
    );
  }
}
