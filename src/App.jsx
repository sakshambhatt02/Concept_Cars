import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Content from "./components/Content";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div className="bg-black w-full min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/content" element={<Content />}></Route>
            <Route path="/contactUs" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}
