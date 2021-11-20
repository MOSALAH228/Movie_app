import React, { useEffect, useState } from "react";
import axiosInstance from "./config";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import { Card, Container, Row } from "react-bootstrap";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [moviesPerPage] = useState(5);

  useEffect(() => {
    axiosInstance
      .get("movie/popular", {
        params: {
          api_key: "83b9f7b48cb494babcab2428000abede",
        },
      })
      .then((res) => {
        console.log(res);
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastMovie = pageNumber * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginate = (pNumber) => setPageNumber(pNumber);

  return (
    <>
      <h1 className="text-center">Movies List</h1>
      <Container>
        <Row md={5} className="g-1">
          {currentMovies?.map((movie) => {
            return (
              <Card>
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                />
                <Card.Body>
                  <Link to={`/moviesDetails/${movie.id}`} key={movie.id}>
                    <Card.Title>{movie.title}</Card.Title>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={movies.length}
          paginate={paginate}
        />
      </Container>
    </>
  );
}
