import { Routes, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Admin from "./pages/Admin";
import Login from "./pages/Login/index";
import Metas from "./pages/Metas";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/metas" element={<Metas />} />

        </Routes>
      </Router>
    </>
  );
}
