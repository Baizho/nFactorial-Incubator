"use client";

import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react";
import PictureLoading from "../components/PictureLoading";

export default function PopularRecipes() {
  const APP_ID = "c93027cb";
  const APP_KEY = "ad2995f646edb46f760b9d725e0ec8d5";

  const [WindowWidth, setWidth] = useState(0);
  const [WindowHeight, setHeight] = useState(0);
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [offSet, SetOffSet] = useState(0);
  const [limit, setLimit] = useState(5);
  // I want to return a row of recipes taken for the page with pagination in place
  useEffect(() => {
    setLoading(false);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setLimit(Math.min((window.innerWidth / 200) | 0, 5));
    fetch(
      `https://api.edamam.com/search?q=popular&app_id=${APP_ID}&app_key=${APP_KEY}&from=${offSet}&to=${
        offSet + Math.min((window.innerWidth / 200) | 0, 5)
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.hits);
      });
  }, [offSet]);

  if (Loading === true) return <PictureLoading />;
  return (
    <>
      <div className="container">
        <div className="col d-flex gap-4" style={{ marginBottom: 20 }}>
          <button
            onClick={() => {
              SetOffSet(Math.max(0, offSet - limit));
            }}
            style={{ borderRadius: 10 }}
          >
            Go back
          </button>
          {data.map((item, index) => {
            return item.recipe.label.length <= 70 ? (
              <RecipeCard data={item.recipe} key={index}></RecipeCard>
            ) : null;
          })}
          <button
            onClick={() => {
              SetOffSet(offSet + limit);
            }}
            style={{ borderRadius: 10 }}
          >
            More Recipes
          </button>
        </div>
      </div>
    </>
  );
}
