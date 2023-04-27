// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateJob from "./pages/CreateJob";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/create-job" element={<CreateJob />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
