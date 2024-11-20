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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-black w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/Concept_Cars/" element={<Landing />} />
          <Route path="/Concept_Cars/content" element={<Content />} />
          <Route path="/Concept_Cars/contactUs" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
