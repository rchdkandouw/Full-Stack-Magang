import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ListComment from "./pages/ListComment";
import EditComment from "./pages/EditComment";

function App() {
  return (
    <body className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/list/comments" element={<ListComment />} />
          <Route path="/edit/comments/:id" element={<EditComment />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
