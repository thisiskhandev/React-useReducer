import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import "./styles.css";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <h1 className="text-center mb-5"> Home</h1>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route
          path="/about"
          element={
            <>
              <h1>About Page</h1>
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>Error Not Found 404</h1>
            </>
          }
        />
      </Routes>
    </React.Fragment>
  );
}
