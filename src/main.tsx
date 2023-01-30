import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages";
import Characters from "./pages/characters";
import Detail from "./pages/characters/detail";
import Students from "./pages/students";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/detail/:name" element={<Detail />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
