import { motion } from "framer-motion";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaHeart, FaSearch, FaSearchPlus, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";
import { VscTriangleRight, VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { MdCompareArrows } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SubmitButton from "../components/SubmitButton";

import 'swiper/css';
import 'swiper/css/autoplay';

const agents = [
  {
    name: "Nathan James",
    phone: "+1-234-456-7893",
    email: "robot@inspirythemes.com",
    listed: 4,
    watsap: "+1-222-333-4433",
    image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-1-1-300x300.jpg",
  },
  {
    name: "Melissa William",
    phone: "+1-234-456-7892",
    email: "robot@inspirythemes.com",
    listed: 4,
    watsap: "+1-222-333-4433",
    image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1-300x300.jpg",
  },
  {
    name: "Alice Brian",
    phone: "+1-234-456-7891",
    email: "robot@inspirythemes.com",
    listed: 3,
    watsap: "+1-222-333-4433",
    image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-6.jpg",
  },
  {
    name: "John David",
    phone: "+1-234-456-7890",
    email: "robot@inspirythemes.com",
    listed: 5,
    watsap: "+1-222-333-4433",
    image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2.jpg",
  },
];

const AgentDetail = () => {
  const { id } = useParams();
  const agent = agents[parseInt(id, 10)];

  const [filters, setFilters] = useState({
    status: "Any",
    location: "All Locations",
    type: "All Types",
  });

  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdowns = [
    { label: "Property Status", name: "status", type: "custom", options: ["Any", "For Sale", "For Rent"] },
    { label: "Location", name: "location", type: "custom", options: ["All Locations", "Karachi", "Lahore", "Islamabad"] },
    { 
      label: "Property Type", 
      name: "type", 
      type: "custom", 
      options: [
        "All Types",
        { group: "Commercial", items: ["Office", "Shop"] },
        { group: "Residential", items: ["Apartment", "Apartment Building", "Condominium", "Single Family", "Villa"] },
      ] 
    },
  ];

  const handleSelect = (name, value) => {
    setFilters({ ...filters, [name]: value });
    setOpenDropdown(null);
  };

  const randomListed = Math.floor(Math.random() * 6) + 1;

  // Example posts array (truncated for brevity)
  const Posts = [
    {
      id: 1,
      title: "Modern Villa Dubai",
      price: 950000,
      beds: { count: 4, icon: <svg className="w-6 h-6 fill-[#ADBDC6]" /> },
      baths: { count: 2, icon: <svg className="w-6 h-6 fill-[#ADBDC6]" /> },
      sqft: { count: 3600, icon: <svg className="w-6 h-6 fill-[#ADBDC6]" /> },
      sale: "Trendy",
      camera: "5",
      video: "3",
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      id: 2,
      title: "Luxury Home in Clifton",
      price: 1250000,
      beds: { count: 4, icon: <svg className="w-6 h-6 fill-[#ADBDC6]" /> },
      baths: { count: 2, icon: <svg className="w-6 h-6 fill-[#ADBDC6]" /> },
      sqft: { count: 3600, icon: <svg className="w-6 h-6 fill-[#ADBDC6]" /> },
      sale: "Trendy",
      camera: "6",
      video: "4",
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },
    // Add more properties as needed...
  ];

  return (
    <>
      <Header />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <section className="agent-detail">
          <img src={agent.image} alt={agent.name} className="rounded-full w-32 h-32 mx-auto" />
          <h1 className="text-3xl font-bold text-center mt-4">{agent.name}</h1>
          <p className="text-center">{agent.email}</p>
          <p className="text-center">{agent.phone}</p>
          <p className="text-center">Listed Properties: {agent.listed}</p>
        </section>

        <section className="filters mt-8">
          {dropdowns.map((dropdown) => (
            <div key={dropdown.name} className="dropdown mb-4">
              <label>{dropdown.label}</label>
              <div className="dropdown-select" onClick={() => setOpenDropdown(dropdown.name)}>
                {filters[dropdown.name]}
                {openDropdown === dropdown.name ? <VscTriangleUp /> : <VscTriangleDown />}
              </div>
              {openDropdown === dropdown.name && (
                <ul className="dropdown-options">
                  {dropdown.options.map((option, idx) => (
                    typeof option === "string" ? (
                      <li key={idx} onClick={() => handleSelect(dropdown.name, option)}>{option}</li>
                    ) : (
                      <li key={idx}>
                        <strong>{option.group}</strong>
                        <ul>
                          {option.items.map((item, i) => (
                            <li key={i} onClick={() => handleSelect(dropdown.name, item)}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    )
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section className="posts mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Posts.map((post) => (
            <div key={post.id} className="group relative border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="font-bold text-lg">{post.title}</h2>
                <p className="text-blue-600 font-semibold">${post.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </section>
      </motion.div>

      <Footer />
    </>
  );
};

export default AgentDetail;
