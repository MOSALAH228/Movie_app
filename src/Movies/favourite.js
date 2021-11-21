import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosLoader from "../Navbar/conf";
import { ChangeLanguage } from "../Store/actions/action";

export default function Favourites() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axiosLoader
      .get("/everything", {
        params: {
          q: "react",
        },
      })
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {articles?.map((article) => {
          return (
            <div class="col" key={article.publishedAt}>
              <div class="card">
                <img src={article.urlToImage} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">{article.author}</p>
                  <h5 class="card-title">{article.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
