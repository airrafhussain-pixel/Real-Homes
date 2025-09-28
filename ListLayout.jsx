import { motion } from "framer-motion";
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart, FaSearch, FaSearchPlus } from "react-icons/fa";
import { VscTriangleRight, VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { MdCompareArrows } from 'react-icons/md';
import { Link } from "react-router-dom";

const ListLayout = () => {

  const [filters, setFilters] = useState({
    status: "Any",
    location: "All Locations",
    type: "All Types",
  });

  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdowns = [
    {
      label: "Property Status",
      name: "status",
      type: "custom",
      options: ["Any", "For Sale", "For Rent"],
    },
    {
      label: "Location",
      name: "location",
      type: "custom",
      options: ["All Locations", "Karachi", "Lahore", "Islamabad"],
    },
    {
      label: "Property Type",
      name: "type",
      type: "custom",
      options: [
        "All Types",
        { group: "Commercial", items: ["Office", "Shop"] },
        {
          group: "Residential",
          items: [
            "Apartment",
            "Apartment Building",
            "Condominium",
            "Single Family",
            "Villa",
          ],
        },
      ],
    },
  ];

  const handleSelect = (name, value) => {
    setFilters({ ...filters, [name]: value });
    setOpenDropdown(null);
  };

  const Posts = [
    {
      id: 1,
      title: "Home in Merrick Way",
      price: 540000,
      date: "2024-08-01",
      beds: { count: 4 },
      baths: { count: 2 },
      sqft: { count: 3600 },
      sale: "Trendy",
      camera: "5",
      video: "3",
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      id: 2,
      title: "Villa in Coral Gables",
      price: 825000,
      beds: { count: 4 },
      baths: { count: 2 },
      sqft: { count: 3600 },
      sale: "Trendy",
      camera: "6",
      video: "4",
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },
    {
      id: 3,
      title: "Villa on Hollywood Boulevard",
      price: 740000,
      beds: { count: 4 },
      baths: { count: 2 },
      sqft: { count: 3600 },
      sale: "Trendy",
      camera: "5",
      video: "3",
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      id: 4,
      title: "Traditional Food Restaurant",
      price: 2600,
      beds: { count: 4 },
      baths: { count: 2 },
      sqft: { count: 3600 },
      sale: "Trendy",
      camera: "6",
      video: "4",
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },
    {
      id: 5,
      title: "Villa on Grand Avenue",
      price: 4750,
      beds: { count: 4 },
      baths: { count: 2 },
      sqft: { count: 3600 },
      sale: "Trendy",
      camera: "3",
      video: "2",
      image: "https://i.pinimg.com/originals/60/f6/e7/60f6e7b8d5a74d59b16f29ad5764d952.jpg",
    },
    {
      id: 6,
      title: "Luxury Penthouse in Downtown",
      price: 1200000,
      beds: { count: 4 },
      baths: { count: 2 },
      sqft: { count: 3600 },
      sale: "Trendy",
      camera: "3",
      video: "2",
      image: "https://i.pinimg.com/originals/60/f6/e7/60f6e7b8d5a74d59b16f29ad5764d952.jpg",
    },
  ];

  return (
    <>
      <Header />

      {/* Filters */}
      <div className="filter-container p-4 flex gap-4">
        {dropdowns.map((dropdown, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === dropdown.name ? null : dropdown.name)}
              className="border p-2 rounded flex items-center justify-between w-40"
            >
              {filters[dropdown.name]}
              <VscTriangleDown className="ml-2" />
            </button>

            {openDropdown === dropdown.name && (
              <div className="absolute top-full left-0 bg-white border mt-1 w-full shadow-lg z-10">
                {dropdown.options.map((option, idx) => (
                  typeof option === "string" ? (
                    <div
                      key={idx}
                      onClick={() => handleSelect(dropdown.name, option)}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {option}
                    </div>
                  ) : (
                    <div key={idx} className="p-2">
                      <strong>{option.group}</strong>
                      {option.items.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => handleSelect(dropdown.name, item)}
                          className="pl-4 p-1 hover:bg-gray-100 cursor-pointer"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Posts */}
      <div className="posts-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {Posts.map(post => (
          <motion.div
            key={post.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg">{post.title}</h2>
              <p className="text-blue-600 font-semibold">${post.price.toLocaleString()}</p>
              <div className="flex justify-between mt-2 text-gray-600">
                <span>{post.beds.count} Beds</span>
                <span>{post.baths.count} Baths</span>
                <span>{post.sqft.count} sqft</span>
              </div>
              <div className="mt-2 flex gap-4 text-gray-500 text-sm">
                <span>Camera: {post.camera}</span>
                <span>Video: {post.video}</span>
                <span>Sale: {post.sale}</span>
              </div>
              <Link to={`/property/${post.id}`} className="block mt-3 text-center text-white bg-blue-600 p-2 rounded hover:bg-blue-700">View Details</Link>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ListLayout;
