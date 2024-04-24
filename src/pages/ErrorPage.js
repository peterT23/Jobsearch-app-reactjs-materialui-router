import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      style={{
        width: "30%",
        height: "100vh",
        paddingTop: "45vh",
        margin: "auto",
      }}
    >
      <h1>Oops!</h1>
      <h4>Sorry, an unpected error has occurred</h4>
      <p style={{ marginTop: "50px" }}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
