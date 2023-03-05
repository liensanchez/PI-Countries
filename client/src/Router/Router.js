import {Routes, Route} from "react-router-dom";
import React from 'react'
import Home from "../Views/Home/Home";
import Index from "../Views/Index/Index";

function Router() {
  return (
    <Routes>
      <Route
        path="/home"
        element={<Home />} />
      <Route
        path="/index"
        element={<Index/>} />
    </Routes>
  )
}

export default Router