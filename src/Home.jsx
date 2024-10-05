import React, { useState } from "react";
import NavBar from "./navBar";

export default function Home() {
  let [count, setCount] = useState(0);
  let [friends, setFriends] = useState(["ahmed", "ali"]);
  let [user, setUser] = useState({ fName: "bog", age: 20 });
  let [username, setUserName] = useState("mody");
  function changeCount() {
    setCount(Math.round(Math.random() * 100));
  }

  return (
    //  <React.Fragment></React.Fragment>
    <>
      {/* binding { code js }  ===> wiriting code js inside jsx */}

      <h2 className= {count > 50 ? "bg-green-600" : "bg-red-600" }>Count  {count}</h2>
      <h3>the first friend is : {friends[0]}</h3>
      <h4>user {user.fName} </h4>
      <button
        onClick={ () => changeCount()}
        className="px-3 py-2 my-2 bg-slate-400 rounded-lg shadow-lg"
      >
        {" "}
        click
      </button>
      <NavBar />
    </>
  );
}
