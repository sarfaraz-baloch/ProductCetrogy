import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
// import Card from './Card'

function Home() {
  const [Product, setProduct] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Categories, setCategories] = useState([]);
  const [isChosen, SetisChosen] = useState("All");

  useEffect(() => {
    const Url =
      isChosen === "All" ? "https://dummyjson.com/products" : isChosen;
    console.log(Url);

    axios
      .get(Url)
      .then((res) => {
        //  console.log(res.data.products);
        setProduct(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error ===>", err);
      });
  }, [isChosen]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        // console.log(res.data);
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error ===>", err);
      });
  }, []);

  // console.log('Categories==>',Categories);
  return (
    <div className="w-full ">
      {Loading ? (
        <h1>Loading......</h1>
      ) : (
        <>
          <div className="flex flex-wrap gap-4 mx-2 mt-2 shadow">
            <div
              key={"All"}
              onClick={() => SetisChosen("All")}
              className={`${
                isChosen === "All"
                  ? "bg-purple-600 border-gray-50 text-white"
                  : "bg-white text-black"
              } border-2 border-purple-600 p-2 cursor-pointer font-semibold rounded-lg  text-xl hover:bg-black hover:text-white`}
            >
              <h1>All</h1>
            </div>
            {Categories.map((item) => {
              return (
                <div
                  key={item.slug}
                  onClick={() => SetisChosen(item.url)}
                  className={`${
                    isChosen === item.url
                      ? "bg-purple-600 border-gray-50 text-white"
                      : "bg-white text-black"
                  } border-2 border-purple-600 p-2 cursor-pointer font-semibold rounded-lg  text-xl hover:bg-black hover:text-white`}
                >
                  <h1>{item.name}</h1>
                </div>
              );
            })}
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {Product.map((item) => {
                  return <Card item={item} key={item.id} />;
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Home;
