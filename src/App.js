import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FilterView } from "./features/filter/FilterView";
import { PostsView } from "./features/posts/PostsView";
import { NavView } from "./features/nav/NavView";

function App() {
  return (
    <Router>
      <NavView />
      <FilterView />
      <Routes>
        <Route path="/" element={<PostsView />} />
        <Route path="r/popular" element={<PostsView />} />
        <Route path="r/popular/hot" element={<PostsView />} />
        <Route path="r/popular/new" element={<PostsView />} />
        <Route path="r/popular/top" element={<PostsView />} />
        <Route path="r/popular/rising" element={<PostsView />} />
      </Routes>
    </Router>
  );
}

export default App;
