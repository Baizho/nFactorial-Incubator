import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import MainPagePicture from "../components/MainPagePicture";
import PopularRecipes from "../components/PopularRecipes";
import Header from "@/components/Header";

export default function Home() {
  // if (Loading === true) {
  //   return (
  //     <>
  //       <h1 className='center'>Loading...</h1>
  //     </>
  //   )
  // }

  return (
    <>
      <Header></Header>
      <div className="container text-center">
        <div className="d-flex justify-content-center">
          <MainPagePicture />
        </div>
      </div>
      <h3 className="container" style={{ marginTop: 40, font: "" }}>
        <b>Popular Recipes</b>
      </h3>
      <PopularRecipes />
    </>
  );
}
