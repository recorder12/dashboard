import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import People from "./pages/People";
import Person from "./pages/Person";
import Requests from "./pages/Requests";
import ProtectedRoute from "./pages/ProtectedRoute";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      {
        path: "/people",
        element: (
          // <ProtectedRoute>
          <People />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/people/:id",
        element: (
          // <ProtectedRoute>
          <Person />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/requests",
        element: (
          // <ProtectedRoute>
          <Requests />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/calendar",
        element: (
          // <ProtectedRoute>
          <Calendar />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          // <ProtectedRoute>
          <Settings />
          // </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
