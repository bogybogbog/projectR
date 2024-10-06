import axios from "axios";
import React, { useEffect, useState } from "react";

export default function About() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    console.log(data.data);
    setProducts(data.data);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h1>About</h1>
      <div className="row">
        {products.length > 0 ? products.map((product) => (
          <div className="w-1/6">
            <div>
              <img src={product.imageCover} className="w-full" alt="" />
              <h2>{product.title}</h2>
            </div>
          </div>
        )):<div class="spinner"></div>}
      </div>
    </>
  );
}
