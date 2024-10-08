import React, { useEffect, useState } from "react";

export default function Home() {
  let [count, setCount] = useState(0);
  let [friends, setFriends] = useState(["ahmed", "ali"]);
  let [user, setUser] = useState({ fName: "bog", age: 20 });
  let [username, setUserName] = useState("mody");
  function changeCount() {
    setCount(Math.round(Math.random() * 100));
  }
  function changeCount() {
    setCount(Math.floor(Math.random() * 10));
  }
  useEffect(() => {
    // ! Component did mount
    // let x = setInterval(() => {
    //   console.log("hi");
    // }, 1000);
    // console.log("Component did mount");
    return () => {
      // ! Component will unMount
      // console.log("Component will unMount");
      // clearInterval(x);
    };
  }, []);
  useEffect(() => {
    // ! Component did update
    if (count == 0) {
      // that condition cuz useEffect works immediately (set the condition with an its initial value)
      return;
    }
    console.log("counter has been changed");
  }, [count]); // this array can take more than one  ===> [count, userName, ....]
  // useEffect(()=>{}) // ! this will work every render or every change 
  return (
    //  <React.Fragment></React.Fragment>
    <>
      {/* binding { code js }  ===> wiriting code js inside jsx

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
      <NavBar /> */}
      <div>{count}</div>
      <button
        onClick={() => changeCount()}
        className="bg-slate-500 py-2 px-3 rounded-lg m-3"
      >
        change count
      </button>
    </>
  );
}
