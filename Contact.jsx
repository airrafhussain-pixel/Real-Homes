import { motion } from "framer-motion";
import Footer from '../components/Footer';
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="">
      <Header />

      {/* Hero Section */}
      <div
        className="relative overflow-hidden lg:py-40 py-10 md:py-30 lg:px-0 md:px-10 px-5
          bg-[url('https://www.thetopvillas.com/blog/wp-content/uploads/2020/11/rsz_157658394535972bbfb9774708d83ff0ef_2-2.jpg')] 
          bg-cover bg-center 
          before:absolute before:inset-0 before:bg-[#1cb3ff83] before:bg-opacity-30"
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='heading-h1 lg:text-5xl relative z-10 text-center md:text-4xl text-4xl text-white'
        >
          Contact Us
        </motion.h1>
      </div>

      {/* Contact Form & Map */}
      <div className="max-w-6xl md:mb-20 mb-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:px-6 px-2 md:py-12">

        {/* Map Section */}
        <div className="w-full h-[300px] md:h-auto">
          <iframe
            title="Location Map"
            src="https://maps.google.com/maps?q=Bashundhara%20City%20Shopping%20Complex,%20Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full md:rounded-l-3xl rounded hover:shadow-md"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Form Section */}
        <form
          className="bg-[#1CB2FF] md:rounded-r-3xl rounded hover:shadow-md p-2 md:p-10 space-y-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-bold text-white">Let's talk...</h2>

          <div className="flex gap-3 lg:flex-row lg:justify-between flex-col">
            <div>
              <label htmlFor="name" className="text-white font-semibold text-sm">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0D6DFD]"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-white font-semibold text-sm">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0D6DFD]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="text-white font-semibold text-sm">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white text-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0D6DFD]"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-white font-semibold text-sm">
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-white text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0D6DFD]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1CB2FF] border text-white font-semibold py-3 rounded hover:shadow-lg transition-shadow duration-300 group flex justify-center items-center gap-2 text-sm hover:bg-white hover:text-[#041C33] px-5"
          >
            Submit Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate fill-current stroke-current text-white group-hover:text-[#041C33] transition-colors duration-300"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
              />
            </svg>
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
