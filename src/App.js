import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Chats from "./pages/Chat/Chats";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { allRoutes } from "./routes/routes";

function App() {
  <>
    <Routes>
      {
        allRoutes.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} element={<route.component />} />
          )
        }
        )
      }
    </Routes>
  </>
}

export default App;
