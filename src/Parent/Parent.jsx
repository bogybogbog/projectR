import React, { useState } from "react";
import Child from "../Child/Child";

export default function Parent() {
  const [count, setCount] = useState(6);
  const [age, setAge] = useState(21);
  const [user, setUser] = useState({fNamee: "ahmed", age: 21, salary: 5000})
  const [products, setsroducts] = useState([
    {id: 12, fName: "samsung", onSale: true , price: 5000, category: "mobile", count: 5},
    {id: 11, fName: "lenovo", onSale: false , price: 5000, category: "mobile", count: 5},
    {id: 13, fName: "lg", onSale: false , price: 5000, category: "mobile", count: 5},
    {id: 14, fName: "iphone", onSale: true , price: 5000, category: "mobile", count: 5},
    {id: 15, fName: "nokia", onSale: false , price: 5000, category: "mobile", count: 5},
    {id: 17, fName: "toshiba", onSale: true , price: 5000, category: "mobile", count: 5},
    {id: 18, fName: "toshiba", onSale: true , price: 5000, category: "mobile", count: 5},
    {id: 19, fName: "toshiba", onSale: false , price: 5000, category: "mobile", count: 5},
  ])
  // ! if u want to update anything ===> 1- take clone, 2- update, 3- set the state
  function deleteProduct(productId){  
    let myProducts = structuredClone(products)
    let newProducts = myProducts.filter((product)=> product.id !== productId )
    setsroducts(newProducts)
  }
  function updateProduct(index){
    console.log(index);
    let myProducts = structuredClone(products)
    myProducts[index].count += 1
    setsroducts(myProducts)
  }
  return (
    <>
      {/* <h1>Parent component </h1> */}
      {/* <Child x={count} y={age} userDetailes = {user} /> */}
      <div className="container mx-auto">
        <div className="row">
         {products.map((number, i) => <Child key = {number.id} index = {i} products = {number} delete =  {deleteProduct} update = {updateProduct} /> ) }
        {/* <Child products = {products[0]}/>
        <Child products = {products[1]}/>
        <Child products = {products[2]}/>
        <Child products = {products[3]}/>
        <Child products = {products[4]}/> sale: true ,
        <Child products = {products[5]}/> */}
        </div>
      </div>
    </>
  );
}
