import React from "react";

export default function Child(props) {
  //   let { fNamee, salary, age } = props.userDetailes;
  let { id, fName, count, price, category, onSale } = props.products;

  return (
    <>
      {/* <div>
        Child age is {props.y} and count is {props.x}
      </div>
      <div>
        Child age is {age} and user name is {fNamee} salary {salary}
      </div> */}
      <div className="w-1/4 p-2">
        <div className="bg-slate-400 rounded-lg shadow-lg p-4 relative">
          <h4>name is : {fName}</h4>
          <h4>count is : {count}</h4>
          <h4>price is : {price}</h4>
          <h4>category is : {category}</h4>
          {/* {onSale ? <div className=" absolute top-0 right-2 bg-red-600 p-2 text-white rounded-md">sale</div>: null }  or ===>*/}
          {onSale && (
            <div className=" absolute top-0 right-2 bg-red-600 p-2 text-white rounded-md">
              sale
            </div>
          )}
          <button
            onClick={() => props.delete(id)}
            className="bg-red-700 my-2 w-full p-2 text-white rounded-lg"
          >
            Delete
          </button>
          <button
            onClick={() => props.update(props.index)}
            className="bg-yellow-500 my-2 w-full p-2 text-white rounded-lg"
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}
