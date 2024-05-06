"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import PictureLoading from "./PictureLoading";

export default function RecipeCard(props) {
  // a simple card design if I want to showcase a specific recipe
  const [WindowWidth, setWidth] = useState(0);
  const [WindowHeight, setHeight] = useState(0);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  if (Loading === true) return <PictureLoading></PictureLoading>;

  return (
    <>
      <div className="card" style={{ width: 200, height: 300 }}>
        <Image
          src={props.data.image}
          className="card-img-top"
          alt={props.data.label}
          width={100}
          height={150}
        />
        <div className="card-body" style={{ width: "100%", height: 80 }}>
          <h6 className="card-title">{props.data.label}</h6>
        </div>
        <div className="card-body" style={{ width: "100%" }}>
          <Link
            href={`../recipe/${props.data.label}`}
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}
