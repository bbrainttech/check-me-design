import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import App from "./App";
import { buttonVariants } from "./components/ui/button";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <section className="box py-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium md:font-bold text-balance">
          Nothing here so far.
        </h1>
        <div className="mt-10">

        <Link to="/" className={buttonVariants({})}>
          Home
        </Link>
        </div>
      </section>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
