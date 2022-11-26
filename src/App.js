import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { FilterView } from "./features/filter/FilterView";
import { PostsView } from "./features/posts/PostsView";

function App() {
  return (
    <Router>
      <FilterView />
      <Routes>
        <Route path="/" element={<Navigate to="popular/hot" />} />
        <Route path="popular/hot" element={<PostsView />} />
        <Route path="popular/new" element={<PostsView />} />
        <Route path="popular/top" element={<PostsView />} />
        <Route path="popular/rising" element={<PostsView />} />
      </Routes>
    </Router>
  );
}

export default App;
