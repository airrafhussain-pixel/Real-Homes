import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenuFill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubmitButton from "./SubmitButton";
import { BsHeartFill } from 'react-icons/bs';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showFav, setShowFav] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSidebarDropdown, setOpenSidebarDropdown] = useState(null);

  useEffect(() => {
    if (!sidebarOpen) setOpenSidebarDropdown(null);
  }, [sidebarOpen]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });

  const navLinks = [
    { name: "Real Estate", path: "/ListLayout", subLinks: [
      { name: "List Layout", path: "/ListLayout" },
      { name: "List Layout Full Width", path: "/" },
      { name: "Grid Layout", path: "/" },
      { name: "Grid Layout Full Width", path: "/" },
      { name: "Half Map Layout", path: "/" },
      { name: "Agents", path: "/Agent" },
      { name: "Agencies", path: "/Agent" },
    ]},
    { name: "Property", path: "/", subLinks: [
      { name: "Default Layout", path: "/" },
      { name: "Thumbs Gallery", path: "/" },
      { name: "Full Width Layout", path: "/" },
      { name: "Horizontal Tabs", path: "/" },
      { name: "Vertical Tabs", path: "/" },
      { name: "Accordion Layout", path: "/" },
      { name: "Toggle Layout", path: "/" },
      { name: "Isolated Layout", path: "/" },
    ]},
    { name: "Gallery", path: "/", subLinks: [
      { name: "Gallery 2 Columns", path: "/" },
      { name: "Gallery 3 Columns", path: "/" },
      { name: "Gallery 4 Columns", path: "/" },
    ]},
    { name: "Pages", path: "/", subLinks: [
      { name: "Properties Widgets", path: "/" },
      { name: "Agents Widgets", path: "/" },
      { name: "Other Widgets", path: "/" },
      { name: "For Sale", path: "/" },
    ]},
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const dropdownVariants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: -5 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="relative z-[10] w-full bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-md">
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-[80%] h-full bg-slate-100 text-slate-800 shadow-2xl z-50 p-6 overflow-y-auto"
          >
            <div className="flex justify-end">
              <button onClick={() => setSidebarOpen(false)}><IoClose className="w-8 h-8 text-slate-800" /></button>
            </div>
            <motion.ul variants={dropdownVariants} initial="hidden" animate="visible" className="mt-6 space-y-5">
              {navLinks.map((link) => {
                const hasDropdown = link.subLinks;
                const isOpen = openSidebarDropdown === link.name;
                return (
                  <motion.li key={link.name} variants={itemVariants}>
                    <div className="flex justify-between items-center">
                      <Link to={link.path} className="text-[16px] font-semibold hover:text-teal-600">{link.name}</Link>
                      {hasDropdown && (
                        <button onClick={() => setOpenSidebarDropdown(isOpen ? null : link.name)}>
                          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {hasDropdown && isOpen && (
                        <motion.ul variants={dropdownVariants} initial="hidden" animate="visible" exit="hidden" className="mt-2 pl-3 space-y-2">
                          {link.subLinks.map((sublink) => (
                            <motion.li key={sublink.name} variants={itemVariants}>
                              <Link to={sublink.path} className="text-[14px] text-slate-600 hover:text-teal-600">{sublink.name}</Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <div className="px-4 max-w-7xl mx-auto flex justify-between items-center py-4">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2">
          <img src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/10/rh-logo-retina.png" alt="Logo" className="w-[110px]" />
        </motion.div>

        <div className="hidden lg:flex items-center gap-1 text-[15px] font-medium">
          <Link to="/" className="bg-teal-600 hover:bg-teal-700 px-5 py-3 rounded-md transition">Home</Link>
          {navLinks.map((link, i) => {
            const hasDropdown = link.subLinks;
            const isOpen = openDropdown === link.name;
            return (
              <motion.div key={link.name} className="relative" onMouseEnter={() => hasDropdown && setOpenDropdown(link.name)} onMouseLeave={() => hasDropdown && setOpenDropdown(null)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }} viewport={{ once: true }}>
                <Link to={link.path || "#"} className={`px-5 py-3 rounded-md transition ${isOpen ? "bg-teal-700" : "hover:bg-slate-700"}`}>{link.name}</Link>
                {hasDropdown && (
                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul variants={dropdownVariants} initial="hidden" animate="visible" exit="hidden" className="absolute top-full left-0 mt-2 w-[240px] bg-white text-slate-700 shadow-lg rounded-md border-t-4 border-teal-600 z-10 p-2">
                        {link.subLinks.map((sublink) => (
                          <motion.li key={sublink.name} variants={itemVariants} className="px-5 py-2 text-[14px] hover:bg-slate-100 transition">
                            <Link to={sublink.path}>{sublink.name}</Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden lg:flex gap-2 text-sm items-center bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md">
            <span>📞</span> 1-800-555-1234
          </button>
          <div className="relative hidden lg:flex">
            <button onMouseEnter={() => setShowFav(true)} onMouseLeave={() => setShowFav(false)} className="px-3 py-2 rounded-md bg-slate-700 hover:bg-slate-600 transition">❤️</button>
            <AnimatePresence>
              {showFav && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="absolute top-[50px] right-0 bg-white text-slate-700 rounded-md shadow-md w-[220px] p-4 z-50">
                  <div className="flex gap-3 items-center"><BsHeartFill className="text-slate-400" /> <a href="#!" className="hover:text-teal-600">My Favorites</a></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <SubmitButton label="Submit" onClick={() => console.log("Clicked!")} className="hidden lg:flex bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-md transition" />
          <button onClick={() => setSidebarOpen(true)}><RiMenuFill className="lg:hidden text-2xl" /></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
