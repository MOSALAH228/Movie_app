import axiosInstance from "./config";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MoviesDetails() {
  const [details, setDetails] = useState({});
  const parmas = useParams();
  console.log(parmas);
  useEffect(() => {
    axiosInstance
      .get(`movie/${parmas.id}?api_key=83b9f7b48cb494babcab2428000abede`)
      .then((res) => {
        console.log(res);
        setDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1 className="text-center">Movie Details</h1>
      <Container className="w-50 h-50">
        <Card>
          <Card.Img
            variant="top"
            src={"https://image.tmdb.org/t/p/w500/" + details.poster_path}
          />
          <Card.Body>
            <Card.Title>{details.title}</Card.Title>
            <Card.Text>{details.overview}</Card.Text>
            <Link to="/">Go Back</Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
