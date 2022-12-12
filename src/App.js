import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { FilterView } from "./features/filter/FilterView";
import { PostsView } from "./features/posts/PostsView";
import { NavView } from "./features/nav/NavView";
import { LeftSideBarView } from "./features/leftSideBar/LeftSideBarView";

function App() {
  return (
    <Router>
      <NavView />
      <FilterView />
      <div className="mainContainer">
        <LeftSideBarView />
        <Routes>
          <Route path="/" element={<PostsView />} />
          <Route path="r/popular" element={<PostsView />} />
          <Route path="r/popular/hot" element={<PostsView />} />
          <Route path="r/popular/new" element={<PostsView />} />
          <Route path="r/popular/top" element={<PostsView />} />
          <Route path="r/popular/rising" element={<PostsView />} />
          <Route path="r/popular/rising" element={<PostsView />} />
          <Route path="r/AskReddit" element={<PostsView />} />
          <Route path="r/funny" element={<PostsView />} />
          <Route path="r/worldnews" element={<PostsView />} />
          <Route path="r/politics" element={<PostsView />} />
          <Route path="r/sports" element={<PostsView />} />
          <Route path="r/memes" element={<PostsView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
