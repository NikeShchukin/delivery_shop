import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error)
  return (
    <>
        <h1>Ooops!</h1>
        <p>Something wrong!</p>
        <p>{error.statusText} {error.status}</p>
        <NavLink to="/">Go Home</NavLink>
    </>
  )
}

export default ErrorPage;
