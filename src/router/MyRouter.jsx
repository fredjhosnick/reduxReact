import React from "react";
import { Route, Routes } from "react-router-dom";
import List from "../components/List";
import Manager from "../components/Manager";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/candidates" element={<List />} />
      <Route path="/manager" element={<Manager />} />
      <Route path="*" element={<List />} />
    </Routes>
  );
};

export default MyRouter;
