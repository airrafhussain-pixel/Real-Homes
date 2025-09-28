// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import ListLayout from "./pages/ListLayout";
import ListLayoutDetail from "./pages/ListLayoutDetail";
import Agent from "./pages/Agent";
import AgentDetail from "./pages/AgentDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Show loader on every page refresh
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100); // adjust time if needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Routes>
        {/* Home pages */}
        <Route path="/" element={<Home />} />
        <Route path="/list-layout" element={<ListLayout />} />
        <Route path="/list-layout/:id" element={<ListLayoutDetail />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/agent/:id" element={<AgentDetail />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
