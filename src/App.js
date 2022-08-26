import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { allRoutes } from "./routes/routes";

function App() {
  return (
    <Routes>
      {
        allRoutes.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} element={<route.component />} />
          )
        })
      }
    </Routes>
  )
}

export default App;
