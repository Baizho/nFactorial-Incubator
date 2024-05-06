import Header from "@/components/Header";
import Image from "next/image";

export default async function recipeHome({ params }) {
  const APP_ID = "c93027cb";
  const APP_KEY = "ad2995f646edb46f760b9d725e0ec8d5";

  const recipe_name = decodeURI(params.recipe_name);
  const data = await fetch(
    `https://api.edamam.com/search?q=${recipe_name}&app_id=${APP_ID}&app_key=${APP_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.hits[0].recipe;
    });
  // console.log(data.ingredients);
  return (
    <>
      <Header></Header>
      <div className="container text-center">
        <div className="row border">
          <div className="col-5">
            <Image
              src={data.image}
              alt={data.label}
              width={500}
              height={600}
            ></Image>
          </div>
          <div className="col-7">
            <h2>
              <b>Ingredients</b>
            </h2>
            {data.ingredients.map((item, index) => {
              return (
                <>
                  <p>
                    <b>{item.text}</b>
                  </p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
