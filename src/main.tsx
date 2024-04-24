import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Layout from "./App";
import { buttonVariants } from "./components/ui/button";
import "./index.css";
import { NewLandingPage, OldLandingPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewLandingPage />,
    errorElement: (
      <section className="box py-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium md:font-bold text-balance">
          Nothing here so far.
        </h1>
        <div className="mt-10">
          <Link to="/" className={buttonVariants({ size: "lg" })}>
            Home
          </Link>
        </div>
      </section>
    ),
  },
  {
    path: "/old-landing-page",
    element: <OldLandingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
