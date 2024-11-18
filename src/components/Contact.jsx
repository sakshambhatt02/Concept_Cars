import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-r from-black to-gray-900 text-white py-10">
      <div className="pt-[10vw] container mx-auto px-10">
        <h2 className="text-5xl md:text-6xl font-serif text-center mb-16 text-orange-500 tracking-wide">
          Get in Touch
        </h2>
        <div className="max-w-3xl mx-auto bg-black bg-opacity-50 backdrop-blur-lg rounded-xl shadow-2xl p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-lg mb-2 font-light">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-orange-500 transition-colors duration-300 text-white placeholder-gray-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg mb-2 font-light"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-orange-500 transition-colors duration-300 text-white placeholder-gray-500 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg mb-2 font-light"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-orange-500 transition-colors duration-300 text-white placeholder-gray-500 focus:outline-none resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-10 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
