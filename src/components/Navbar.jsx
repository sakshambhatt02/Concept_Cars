import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: "/Concept_Cars", label: "Home" },
    { to: "/content", label: "Content" },
    { to: "/contactUs", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 z-10 w-full transition-all duration-300 bg-black/80 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-[2rem] md:text-[2.5vw] text-orange-500 font-serif tracking-wider hover:text-orange-400 transition-colors duration-300"
        >
          CONCEPT CARS
        </Link>
        <div className="hidden md:flex gap-8 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-orange-500 transition-colors duration-300 uppercase text-sm tracking-widest ${
                location.pathname === link.to ? "text-orange-500" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="bg-black/90 backdrop-blur-md py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`block py-2 px-6 text-white hover:text-orange-500 transition-colors duration-300 uppercase text-sm tracking-widest ${
                  location.pathname === link.to ? "text-orange-500" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
