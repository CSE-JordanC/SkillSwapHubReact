import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/Global.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import News from "./pages/News";
import ViewSkill from "./pages/ViewSkill";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="news" element={<News />} />
          <Route path="viewskills" element={<ViewSkill />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);