// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/Layout";
import CreateJob from "./pages/createJob/CreateJob";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden h-full justify-start">
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/create-job" element={<CreateJob />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
