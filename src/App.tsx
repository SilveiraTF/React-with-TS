import React from "react";
import { Route, Routes } from "react-router-dom";
import GitHubPage from "./pages/GitHubPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="github" element={<GitHubPage />} />
      </Routes>
    </>
  );
}

export default App;
