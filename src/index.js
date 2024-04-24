import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import JobDisplayContainer, {
  loader as RootLoader,
} from "./components/JobDisplayContainer";
import { loader as jobDetailLoader } from "./pages/DetailPage";

import DetailPage from "./pages/DetailPage";

import LoginPage from "./pages/LoginPage";
import AuthProvider from "./auth/AuthProvider";
import AuthContext from "./auth/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,

    loader: RootLoader,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "jobs/:jobid",
        element: (
          <PrivateRoute>
            <DetailPage />
          </PrivateRoute>
        ),
        loader: jobDetailLoader,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
]);
function PrivateRoute({ children }) {
  const location = useLocation();
  const isAuthenticated = useContext(AuthContext); // just test
  return isAuthenticated.user ? (
    children
  ) : (
    <Navigate replace state={{ from: location }} to="/login" />
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
