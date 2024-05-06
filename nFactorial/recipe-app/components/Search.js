"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Search() {
  const APP_ID = "c93027cb";
  const APP_KEY = "ad2995f646edb46f760b9d725e0ec8d5";

  const [results, setResults] = useState([]);
  const [text, setText] = useState("");
  const [offSet, SetOffSet] = useState(0);
  const [limit, setLimit] = useState(100);
  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${text}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${offSet}&to=${
        offSet + limit
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.hits);
        setResults(data.hits);
      });
  }, [text]);

  const handleSearch = (text) => {
    setText(text);
  };
  return (
    <>
      <input
        className="d-flex"
        style={{ marginRight: 10, borderRadius: 5, border: 8 }}
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <div
        className="row d-flex"
        style={{
          left: "74%",
          top: "80%",
          position: "absolute",
          overflowX: "hidden",
          overflowY: "auto",
          height: "500px",
          width: "400px",
        }}
      >
        {results.map((item, index) => {
          //   console.log(item.recipe.label);
          return (
            <Link
              className="col-12 border"
              marginRight={10}
              href={`../recipe/${item.recipe.label}`}
              key={index}
              style={{ backgroundColor: "whitesmoke" }}
            >
              <p>{item.recipe.label}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
