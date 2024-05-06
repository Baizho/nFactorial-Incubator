"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import PictureLoading from "@/components/PictureLoading";
import RecipeCard from "@/components/RecipeCard";

export default function Favourite() {
  const [List, setList] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (Loading === true) return <PictureLoading></PictureLoading>;
  console.log(List);
  return (
    <>
      <Header></Header>
      <div className="row text-center">
        <b>
          Your Favourite Recipes (Decided to add this feature in maybe 10
          years....)
        </b>
      </div>
      {List.map((item, index) => {
        return <RecipeCard data={item} key={index}></RecipeCard>;
      })}
    </>
  );
}
