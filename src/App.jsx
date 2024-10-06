import { useState } from "react";
import "./App.css";
import About from "./About";
import Home from "./Home";
import Parent from "./Parent/Parent";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import NotFound from "./NotFound/NotFound";
let x = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/projectR/home", element: <Home /> },
      { path: "/projectR/about", element: <About /> },
      { path: "/projectR/parent", element: <Parent /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
