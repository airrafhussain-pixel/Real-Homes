import { motion } from "framer-motion";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaVideo, FaHeart } from "react-icons/fa";
import { VscTriangleRight } from "react-icons/vsc";
import { MdCompareArrows } from 'react-icons/md';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const blogPosts = [
    {
      title: "The Role of Physical Therapy in Recovery",
      format: "Image Post Format",
      text: "Ride the iconic Route 66, conquer the Himalayas, explore Australia's Great Ocean Road, cruise Italy's Amalfi Coast, and experience the thrill of Patagonia's open roads!",
      img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/blog-image-2-1-1240x720.jpg",
    },
    {
      title: "The Power of Volunteers in Patient Recovery",
      format: "Image Post Format",
      text: "Lorem ipsum placeholder text for volunteers' impact in recovery.",
      img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/blog-image-3-1.jpg",
    },
    {
      title: "Villa in Dubai Adventure",
      format: "Video Post Format",
      text: "Lorem ipsum text describing Dubai villas and their luxury features.",
      img: "https://meditics.temptics.com/assets/img/blog-wide-2.jpg",
    },
    {
      title: "Exploring the Himalayas",
      format: "Image Post Format",
      text: "A journey through the Himalayas and surrounding natural wonders.",
      img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/rental-income-1240x720.jpg",
    },
    {
      title: "Meditics Featured Villa",
      format: "Image Post Format",
      text: "Discover a modern villa in Dubai with all amenities.",
      img: "https://meditics.temptics.com/assets/img/blog-wide-3.jpg",
    },
    {
      title: "Luxury Homes Around the World",
      format: "Image Post Format",
      text: "Explore luxury properties globally with stunning visuals.",
      img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/blog-image-1-2.jpg",
    },
  ];

  const properties1 = [
    {
      title: "Modern Villa Dubai",
      price: 950000,
      beds: 4,
      baths: 2,
      sqft: 3600,
      sale: "Hot",
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      title: "Luxury Home in Clifton",
      price: 1250000,
      beds: 4,
      baths: 2,
      sqft: 3600,
      sale: "Hot",
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },
    {
      title: "Elegant Bungalow in DHA",
      price: 780000,
      beds: 4,
      baths: 2,
      sqft: 3600,
      sale: "Hot",
      image: "https://i.pinimg.com/originals/60/f6/e7/60f6e7b8d5a74d59b16f29ad5764d952.jpg",
    },
  ];

  // Pagination
  const postsPerPage = 4;
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="bg-[#F2F2F2]">
      <Header />

      {/* Hero */}
      <div
        className="relative overflow-hidden lg:py-40 py-10 md:py-30 lg:px-0 md:px-10 px-5  
        bg-[url('https://i.pinimg.com/originals/ff/ca/a4/ffcaa4e0cc377cd2f5b81de2f950cf53.jpg')] 
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
          Our Blogs
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 lg:mt-16 md:mt-10 mt-5 lg:mb-15 md:mb-10 mb-5 lg:p-3">

        {/* Blog Posts */}
        <div className="lg:col-span-2 space-y-8 px-2">
          {paginatedPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-lg border border-[#1CB2FF] hover:shadow-md overflow-hidden"
            >
              <img src={post.img} alt={post.title} className="w-full object-cover" />
              <div className="p-6">
                <div>
                  {post.format === "Image Post Format" && (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1CB2FF] mb-3">
                      <VscTriangleRight className="w-5 h-5" />
                      {post.format}
                    </span>
                  )}
                  {post.format === "Video Post Format" && (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1CB2FF] mb-3">
                      <FaVideo className="w-5 h-5" />
                      {post.format}
                    </span>
                  )}
                </div>
                <h2 className="lg:text-3xl md:text-2xl sm:text-xl font-bold text-[#041C33] hover:text-[#1CB2FF] transition">
                  {post.title}
                </h2>
                <p className="text-gray-500 mt-2 mb-4 lg:text-sm md:text-sm sm:text-sm text-[13px]">
                  {post.text}
                </p>
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group lg:w-[150px] md:w-[150px] sm:w-[150px] w-full flex items-center gap-3 text-sm border border-[#1CB2FF] bg-[#1CB2FF] text-white hover:bg-white hover:text-[#1CB2FF] px-5 py-3 rounded font-semibold transition-colors duration-300"
                >
                  <Link to={`/detailblog/${i}`} className="flex w-full justify-center items-center gap-2">
                    <small>READ MORE</small>
                  </Link>
                </motion.button>
              </div>
            </motion.div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              disabled={currentPage === 1}
              className="p-3 border border-gray-400 bg-white rounded-full transition disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            >
              <FaChevronLeft />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded ${currentPage === i + 1
                  ? "bg-[#1CB2FF] text-white border border-gray-400 rounded-full"
                  : "border border-gray-400 bg-white rounded-full text-[#041C33] hover:bg-[#1CB2FF] hover:text-white"
                  } transition`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              className="p-3 border border-gray-400 bg-white rounded-full transition disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8 px-2">
          {/* Search */}
          <div className="bg-[#F2F2F2] rounded p-4">
            <input
              type="text"
              placeholder="Search blog..."
              className="w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#1CB2FF]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Featured Properties */}
          {properties1.map((prop, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-60 bg-cover bg-center" style={{ backgroundImage: `url(${prop.image})` }}>
                <div className="absolute top-2 left-0 bg-[#0054A5] text-white text-xs font-semibold px-3 py-1 rounded-br-md">
                  Featured
                </div>
                <div className="absolute bottom-2 right-2 flex items-center gap-2">
                  <FaHeart
                    onClick={() => toggleFavorite(index)}
                    className={`w-6 h-6 cursor-pointer ${favorites.includes(index) ? "text-red-500" : "text-white"}`}
                  />
                  <MdCompareArrows className="w-6 h-6 text-white cursor-pointer" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{prop.title}</h3>
                <p className="text-gray-500">${prop.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
