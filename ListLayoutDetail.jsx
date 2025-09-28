import Header from '../components/Header';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState } from "react";
import { FaBed, FaChevronLeft, FaChevronRight, FaExchangeAlt, FaRegCalendarAlt, FaShareAlt } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa';
import { MdCompareArrows } from 'react-icons/md';
import { FaSearch, FaSearchPlus } from "react-icons/fa";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { TbBedFilled, TbCarGarage } from "react-icons/tb";
import { FaBath, FaShare, FaVectorSquare } from "react-icons/fa6";
import { HiArrowsExpand, HiCheck } from "react-icons/hi";
import { AnimatePresence, motion } from "motion/react";
import { Play, XIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { useParams } from "react-router-dom";
import { PiMapPinAreaFill } from 'react-icons/pi';
import SubmitButton from '../components/SubmitButton';
import { SlPrinter } from 'react-icons/sl';

const animationVariants = {
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
};
const ListLayoutDetail = ({ animationStyle = "from-center", className = "", }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

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
      title: "Modern Villa Dubai",
      price: 950000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "5",
      video: "3",
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      id: 2,
      title: "Luxury Home in Clifton",
      price: 1250000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "6",
      video: "4",
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },
    {
      id: 3,
      title: "Modern Villa Dubai",
      price: 950000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "5",
      video: "3",
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },

  ];


  const properties1 = [
    {
      title: "Modern Villa Dubai",
      price: 950000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "5",
      video: "3",
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      title: "Luxury Home in Clifton",
      price: 1250000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g><circle cx="2" cy="2" r="2" /></g>
            <g><circle cx="2" cy="22" r="2" /></g>
            <g><circle cx="22" cy="2" r="2" /></g>
            <rect x="1" y="1" width="2" height="22" />
            <rect x="1" y="1" width="22" height="2" />
            <path
              opacity="0.5"
              d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
            />
          </svg>
        ),
      },
      sale: "Trendy",
      camera: "6",
      video: "4",
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },

  ];

  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };


  const getMapSrc = (location) => {
    const query = encodeURIComponent(location === "All Locations" ? "Pakistan" : location);
    return `https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  };

  const agents = [
    {
      name: "Nathan James",
      phone: "+1-234-456-7893",
      email: "robot@inspirythemes.com",
      listed: 4,
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-1-1-300x300.jpg",
    },
    {
      name: "Melissa William",
      phone: "+1-234-456-7892",
      email: "robot@inspirythemes.com",
      listed: 4,
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1-300x300.jpg",
    },
  ]

  const properties = [
    {
      id: 1,
      title: "Home in Merrick Way",
      price: 540000,
      date: "2024-08-01",
      status: "For Sale",
      type: "Single Family",
      image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/11/Property-1-488x326.jpg",
      slidesImages: [
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-00-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-04-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/house-02-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-02-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
      ],
      beds: 3,
      baths: 3,
      area: 4300,
    },
    {
      id: 2,
      title: "Villa in Coral Gables",
      price: 825000,
      date: "2024-07-15",
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Villa-in-Coral-Gables-488x326.jpg",
      status: "For Sale",
      slidesImages: [
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/interior-00-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/interior-02-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-05-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/living-00-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-02-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
      ],
      type: "Villa",
      beds: 4,
      baths: 4,
      area: 3500,
    },
    {
      id: 3,
      title: "Villa on Hollywood Boulevard",
      price: 740000,
      date: "2024-06-28",
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/zac-gudakov-0qir5hBOj18-unsplash-488x326.jpg",
      status: "For Sale",
      type: "Single Family",
      slidesImages: [
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/dining-01-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/living-00-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-00-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/living-00-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-01-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
      ],
      beds: 3,
      baths: 4,
      area: 4530,
    },
    {
      id: 4,
      title: "Traditional Food Restaurant",
      price: 2600,
      date: "2024-09-10",
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Modern-House-488x326.jpg",
      status: "For Rent",
      type: "Condo",
      slidesImages: [
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Villa-in-Coral-Gables-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/dining-00-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-04-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/living-00-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/exterior-01-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
      ],
      beds: 2,
      baths: 1,
      area: 950,
    },
    {
      id: 5,
      title: "Villa on Grand Avenue",
      price: 4750,
      date: "2024-08-20",
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-488x326.jpg",
      status: "For Rent",
      slidesImages: [
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-00-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-04-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/house-02-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-02-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
      ],
      type: "Villa",
      beds: 4,
      baths: 4,
      area: 9350,
    },
    {
      id: 6,
      title: "Luxury Penthouse in Downtown",
      price: 1200000,
      date: "2024-05-05",
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2015/07/property-06-exterior-1-488x326.jpg",
      status: "For Sale",
      type: "Apartment",
      slidesImages: [
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-00-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-04-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/house-02-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bedroom-02-1240x720.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/bathroom-02-1240x720.jpg",
      ],
      beds: 5,
      baths: 5,
      area: 6000,
    },

  ];


  // read id from route and get property
  const params = useParams();
  const propid = params.id ? Number(params.id) : NaN;
  const property = properties.find((p) => p.id === propid);
  const slides = property?.slidesImages && property.slidesImages.length > 0
    ? property.slidesImages : property?.image ? [property.image] : [];

  motion
  return (
    <div className="bg-[#F7F7F7]">
      <Header />

      {/* Hero Section */}
      <div className="relative">
        <div className="relative overflow-hidden lg:py-20 py-10 md:py-30 lg:px-0 md:px-10 px-5
          bg-[url('https://images.contentful.com/pqmtoyw9z10u/29xXSzcjib7RRuX6CE3Und/74a871a7492153de3bb9826a62b0b666/real-estate-4955087_1920.jpg')] 
          bg-cover bg-center 
          before:absolute before:inset-0 before:bg-[#1cb3ff83] before:bg-opacity-30">
          <motion.h1
            initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className='max-w-6xl mx-auto heading-h1 lg:text-5xl relative z-5 lg:text-left text-center md:text-4xl text-4xl text-white'>
            {property.title}
          </motion.h1>
        </div>

        <div className="absolute top-1/1 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[100%] max-w-6xl"
          data-aos="fade-up" data-aos-duration="1050">
          <div className="relative p-5">
            <div className="max-w-5xl lg:pb-0 pb-5 mx-auto lg:bg-[linear-gradient(90deg,_rgba(255,255,255,1)_81%,_rgba(28,178,255,1)_73%)] w-full h-full lg:shadow-md lg:bg-[#ffffff00] lg:pt-0 pt-10 bg-white rounded-lg lg:p-0 flex lg:flex-row flex-col  gap-4 items-center lg:justify-between justify-center">
              <div className="flex flex-wrap justify-center items-center ">
                {dropdowns.map((item, i) => (
                  <div key={i} className="flex flex-col p-2 relative  border-gray-300">
                    <span className="text-sm mb-1 lg:ps-5">{item.label}</span>

                    {item.type === "custom" ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === item.name ? null : item.name)
                          }
                          className="flex items-center  gap-2 lg:w-[220px] px-3 py-4 text-sm  rounded   justify-start"
                        >
                          {item.icon}
                          <span className="flex-1  text-left">{filters[item.name]}</span>
                          <span className="transition-transform duration-300">
                            {openDropdown === item.name ? (
                              <VscTriangleUp className="text-[#1CB2FF]" />
                            ) : (
                              <VscTriangleDown className="text-gray-500" />
                            )}
                          </span>
                        </button>

                        {openDropdown === item.name && (
                          <ul className="absolute top-full mt-1 left-0 w-full lg:w-[250px] sm:w-[180px] bg-white border border-gray-300 rounded shadow-lg z-10 animate-fadeIn">
                            {item.options.map((opt, j) =>
                              typeof opt === "string" ? (
                                <li
                                  key={j}
                                  onClick={() => handleSelect(item.name, opt)}
                                  className="px-4 py-2 text-sm hover:bg-[#1cb3ff7d] hover:text-white cursor-pointer transition"
                                >
                                  {opt}
                                </li>
                              ) : (
                                <li key={j} className="px-4 py-2 text-sm font-semibold text-[#1CB2FF]">
                                  {opt.group}
                                  <ul>
                                    {opt.items.map((sub, k) => (
                                      <li
                                        key={k}
                                        onClick={() => handleSelect(item.name, sub)}
                                        className="px-4 py-2 text-sm hover:bg-[#1cb3ff7d] hover:text-white cursor-pointer transition"
                                      >
                                        {sub}
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              )
                            )}

                          </ul>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center gap-2 bg-white border border-gray-300 rounded px-3 py-4 lg:w-[250px] sm:w-[180px]">
                        {item.icon}
                        <select
                          name={item.name}
                          value={filters[item.name]}
                          onChange={(e) => handleSelect(item.name, e.target.value)}
                          className="text-left w-full bg-transparent outline-none text-sm"
                        >
                          {item.options.map((opt, j) =>
                            typeof opt === "string" ? (
                              <option key={j}>{opt} <VscTriangleDown className="text-[black]" /></option>
                            ) : (
                              <optgroup key={j} label={opt.group}>
                                {opt.items.map((sub, k) => (
                                  <option key={k}>{sub}</option>
                                ))}
                              </optgroup>
                            )
                          )}
                        </select>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Search Buttons */}
              <div className="relative flex  lg:flex-row flex-wrap justify-between gap-3 me-3 rounded">
                <button className="lg:py-8 p-3 flex gap-2 lg:bg-[#0000ff00] bg-[#0cacf0] hover:border-blue-300 hover:border text-[#1896D6] lg:px-5 text-[11px] hover:bg-[#0cacf0] transition w-full sm:w-auto">
                  <FaSearchPlus className="text-white ms-2 mr-2" />
                </button>
                <button className="lg:py-8 p-3 flex gap-2  lg:bg-[#0000ff00] bg-[#0cacf0] hover:border-blue-300 hover:border text-white lg:px-3 text-[11px] hover:bg-[#0cacf000] transition w-full sm:w-auto">
                  <FaSearch className="text-white mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>


      {/* slider Posts*/}
      <div className="lg:col-span-1 mt-15 space-y-8 px-2 overflow-hidden" data-aos="fade-up" data-aos-duration="1050">
        <div className="mx-auto  w-full max-w-7xl  p-2">
          {property && (
            <div className="w-full my-8 py-6 flex items-center justify-between">
              <div>
                {/* Breadcrumb */}
                <div className="flex lg:flex-row flex-wrap items-center text-sm text-[#0cacf0] space-x-2">
                  <a href="/property" className="underline-0">Property</a>
                  <span><FaChevronRight /></span>
                  <a href="#" className="underline-0">{property.title}</a>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  {property.title}
                </h2>

                {/* Address */}
                <p className="text-gray-600 mt-1">
                  {property.title} Miami, FL 33134, USA- {property.date}
                </p>
              </div>

              {/* Right Section */}
              <div className="text-right border-l border-gray-300 pl-6">
                <p className="text-sm text-gray-500">For Sale</p>
                <p className="text-2xl font-semibold text-[#0cacf0]">$540,000</p>
              </div>
            </div>
          )
          }

          {property ? (
            <Swiper
              modules={[Navigation, EffectFade, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              effect="fade"
              loop
              className="h-full w-full hero-swiper"
            >
              {slides.map((img, id) => (
                <SwiperSlide key={id}>
                  <div
                    className="w-full lg:h-[800px] h-screen bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10"></div>

                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              <div className="swiper-button-prev left-0! !bg-[#0cacf0] !text-white/80 text-md! !w-10 !h-10 !rounded-r !flex !items-center !justify-center shadow-md hover:!bg-blue-600"></div>
              <div className="swiper-button-next right-0! !bg-[#0cacf0] !text-white/80 !w-10 !h-10 !rounded-l !flex !items-center !justify-center shadow-md hover:!bg-blue-600"></div>
            </Swiper>
          ) : (
            <div className="p-6 text-center text-gray-600">Property not found.</div>
          )}

        </div>
      </div>

      {/* 2 cols */}
      <div className="max-w-7xl  mx-auto grid lg:grid-cols-3 gap-8 lg:mt-16 md:mt-10 mt-5 lg:mb-15 md:mb-10 mb-5  lg:p-3">

        {/* Blog Posts*/}
        <div className="lg:col-span-2 mt-10 space-y-8 px-2 overflow-hidden" data-aos="fade-up" data-aos-duration="2000">

          {/* Property Info Card */}
          <div className="flex-1 w-full space-y-6 bg-white shadow rounded-lg p-6">
            <div className="bg-white ">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600 text-sm font-[borik]">
                  Property ID:{" "}
                  <a href="#" className="text-blue-300 hover:underline">
                    RH-2015-06
                  </a>
                </p>

                <div className="flex flex-wrap lg:flex-row gap-4 justify-center items-center">
                  {/* Dumbbell */}
                  <div className="text-gray-400 hover:text-[#49C1F4] transition duration-300 cursor-pointer">
                    <FaShareAlt size={25} />
                  </div>

                  {/* Heart */}
                  <div className="text-gray-400 hover:text-[#49C1F4] transition duration-300 cursor-pointer">
                    <FaHeart size={25} />
                  </div>

                  <div className="text-[#0054A5] hover:text-[#49C1F4] transition duration-300 cursor-pointer">
                    <MdCompareArrows size={25} />
                  </div>


                  {/* Building + Phones */}
                  <div className="text-gray-400 hover:text-[#49C1F4] transition duration-300 cursor-pointer">
                    <SlPrinter size={25} />
                  </div>

                </div>


              </div>

              {/* Property Specs */}
              <div className="grid grid-cols-2 mt-15 md:grid-cols-6 gap-4 mb-6 text-center my-7">
                <div className="flex flex-col items-center">
                  <span className=" text-[#0cacf0] font-[borik]">3</span>
                  <span className="text-gray-500 text-sm">Bedrooms</span>
                  <svg
                    className="w-6 lg:h-6 md:h-6 h-15  fill-[#0cacf0] hover:fill-[#cbcbcc] transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
                  </svg>
                </div>

                <div className="flex flex-col items-center">
                  <span className=" text-[#0cacf0] font-[borik]">3</span>
                  <span className="text-gray-500 text-sm">Bathrooms</span>
                  <svg
                    className="w-6 lg:h-6 md:h-6 h-15 fill-[#0cacf0] hover:fill-[#cbcbcc] transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.69"
                    height="24"
                    viewBox="0 0 23.69 24"
                  >
                    <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
                  </svg>
                </div>

                <div className="flex flex-col items-center">
                  <span className=" text-[#0cacf0] font-[borik]">4300</span>
                  <span className="text-gray-500 text-sm">Area (sq ft)</span>
                  <svg
                    className="w-6 lg:h-6 md:h-6 h-15 fill-[#0cacf0] hover:fill-[#cbcbcc] transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g><circle cx="2" cy="2" r="2" /></g>
                    <g><circle cx="2" cy="22" r="2" /></g>
                    <g><circle cx="22" cy="2" r="2" /></g>
                    <rect x="1" y="1" width="2" height="22" />
                    <rect x="1" y="1" width="22" height="2" />
                    <path
                      opacity="0.5"
                      d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
            c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
                    />
                  </svg>
                </div>

                <div className="flex flex-col items-center">
                  <span className=" text-[#0cacf0] font-[borik]">5400</span>
                  <span className="text-gray-500 text-sm">Lot Size (sq ft)</span>
                  <svg width="30" className='fill-[#0cacf0] hover:fill-[#cbcbcc]' height="30" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <rect fill="none" height="40" width="40" y="-1" x="-1"></rect>
                    </g>
                    <g>
                      <rect x="2" y="2" id="svg_1" width="40" height="40" fill="none"></rect>
                      <path className="rh_svg" stroke="null" fill="#0cacf0" id="svg_2" d="m23.952237,12l-4.482089,-4.170255l0,2.78017l-1.49403,0l0,-4.170255l-4.482089,0l0,-1.390085l2.988059,0l-4.482089,-4.170255l-4.482089,4.170255l2.988059,0l0,1.390085l-4.482089,0l0,4.170255l-1.49403,0l0,-2.78017l-4.482089,4.170255l4.482089,4.170255l0,-2.78017l1.49403,0l0,4.170255l4.482089,0l0,1.390085l-2.988059,0l4.482089,4.170255l4.482089,-4.170255l-2.988059,0l0,-1.390085l4.482089,0l0,-4.170255l1.49403,0l0,2.78017l4.482089,-4.170255zm-7.470148,4.170255l-8.964178,0l0,-8.34051l8.964178,0l0,8.34051z"></path>
                    </g>
                  </svg>
                </div>

                <div className="flex flex-col items-center">
                  <span className=" text-[#0cacf0] font-[borik]">2</span>
                  <span className="text-gray-500 text-sm">Garage</span>
                  <svg className="fill-[#0cacf0] hover:fill-[#cbcbcc]" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve">
                    <g><path d="M16.277,11H7.722c-0.513,0-0.941,0.315-1.104,0.757L5,16.25v6C5,22.662,5.351,23,5.778,23h0.778
		c0.427,0,0.778-0.338,0.778-0.75V21.5h9.333v0.75c0,0.412,0.35,0.75,0.777,0.75h0.778C18.649,23,19,22.662,19,22.25v-6
		l-1.618-4.493C17.228,11.315,16.791,11,16.277,11z M7.875,19.25c-0.623,0-1.125-0.502-1.125-1.125S7.252,17,7.875,17
		S9,17.502,9,18.125S8.498,19.25,7.875,19.25z M16.125,19.25c-0.623,0-1.125-0.502-1.125-1.125S15.502,17,16.125,17
		s1.125,0.502,1.125,1.125S16.748,19.25,16.125,19.25z M6.556,15.5l1.167-3.375h8.555l1.167,3.375H6.556z"></path>
                      <path d="M23,0h-1h-2H4H2H1C0.448,0,0,0.448,0,1v1c0,0.552,0.448,1,1,1h1v21h2V3h16v21h2V3h1c0.553,0,1-0.448,1-1V1
		C24,0.448,23.553,0,23,0z"></path>
                      <path d="M18,4H6C5.448,4,5,4.448,5,5s0.448,1,1,1h12c0.553,0,1-0.448,1-1S18.553,4,18,4z"></path>
                      <path d="M18,7H6C5.448,7,5,7.448,5,8s0.448,1,1,1h12c0.553,0,1-0.448,1-1S18.553,7,18,7z"></path>
                    </g>
                  </svg>
                </div>

                <div className="flex flex-col items-center">
                  <span className=" text-[#0cacf0] font-[borik]">2018</span>
                  <span className="text-gray-500 text-sm">Year Built</span>
                  <svg version="1.1" className='fill-[#0cacf0] hover:fill-[#cbcbcc]' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve">
                    <g className="rh_svg">
                      <path d="M20,2h-1V1c0-0.552-0.447-1-1-1s-1,0.448-1,1v1H7V1c0-0.552-0.447-1-1-1S5,0.448,5,1v1H4C1.794,2,0,3.794,0,6v14
		c0,2.206,1.794,4,4,4h16c2.206,0,4-1.794,4-4V6C24,3.794,22.206,2,20,2z M22,20c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V6
		c0-1.104,0.896-2,2-2h1v1c0,0.552,0.447,1,1,1s1-0.448,1-1V4h10v1c0,0.552,0.447,1,1,1s1-0.448,1-1V4h1c1.104,0,2,0.896,2,2V20z"></path>
                      <circle cx="6" cy="12" r="2"></circle>
                      <circle cx="18" cy="12" r="2"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                      <circle cx="6" cy="18" r="2"></circle>
                      <circle cx="18" cy="18" r="2"></circle>
                      <circle cx="12" cy="18" r="2"></circle>
                    </g>
                  </svg>
                </div>

              </div>

              {/* Description */}
              <h3 className="text-[16px] mb-2 text-[#0cacf0] font-[borik] my-5">Description</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Enchanting three bedroom, three bath home with spacious one bedroom, one
                bath cabana, in-laws quarters. Charming living area features fireplace and
                fabulous art deco details. Formal dining room. Remodeled kitchen with
                granite countertops, white cabinetry and stainless appliances. Lovely
                master bedroom has updated bath, beautiful view of the pool. Guest bedrooms
                have walk-in, cedar closets. Delightful backyard; majestic oaks surround
                the free form pool and expansive patio, wet bar and grill.
              </p>

              {/* Additional Details */}
              <h3 className="text-[16px] mb-2 text-[#0cacf0]">
                Additional Details
              </h3>
              <div className="space-y-2 mb-6">
                <p>
                  <span className="uppercase text-sm text-gray-500">
                    Bedroom Features:
                  </span>{" "}
                  <span className="text-xs">Main Floor Master Bedroom, Walk-In Closet</span>
                </p>
                <p className="bg-gray-100 px-2 py-1 rounded">
                  <span className="uppercase text-sm text-gray-500">
                    Dining Area:
                  </span>{" "}
                  <span className="text-xs">Breakfast Counter/Bar, Living/Dining Combo</span>
                </p>
                <p>
                  <span className="uppercase text-sm text-gray-500">
                    Doors & Windows:
                  </span>{" "}
                  <span className="text-xs">Bay Window</span>
                </p>
                <p>
                  <span className="uppercase text-sm text-gray-500">
                    Entry Location:
                  </span>{" "}
                  <span className="text-xs">Mid Level</span>
                </p>
                <p>
                  <span className="uppercase text-sm text-gray-500">
                    Exterior Construction:
                  </span>{" "}
                  <span className="text-xs">Wood</span>
                </p>
                <p className="bg-gray-100 px-2 py-1 rounded">
                  <span className="uppercase text-sm text-gray-500">
                    Fireplace Fuel:
                  </span>{" "}
                  <span className="text-xs">Pellet Stove</span>
                </p>
                <p>
                  <span className="uppercase text-sm text-gray-500">
                    Fireplace Location:
                  </span>{" "}
                  <span className="text-xs">Living Room</span>
                </p>
                <p className="bg-gray-100 px-2 py-1 rounded">
                  <span className="uppercase text-sm text-gray-500">
                    Floors:
                  </span>{" "}
                  <span className="text-xs">Raised Foundation, Vinyl Tile, Wall-to-Wall Carpet, Wood</span>
                </p>
              </div>

              {/* Features */}
              <h3 className="text-[16px] mb-2 text-[#0cacf0]">
                Features
              </h3>

              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-[#0cacf0]"><HiCheck size={20} /></span> 2 Stories
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0cacf0]"><HiCheck size={20} /></span> Home Theater
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0cacf0]"><HiCheck size={20} /></span> Lawn
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0cacf0]"><HiCheck size={20} /></span> Marble Floors
                </li>
              </ul>
            </div>

            {/* Floor Plan */}
            <div className=" ">
              <h3 className="text-[16px] mb-2 text-[#0cacf0]">
                Floor Plan
              </h3>
              <img
                src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/floor-plan-00.jpg"
                alt="floorplan"
                className="rounded-lg w-full h-auto"
              />
            </div>

            {/* Property Video */}
            <div className=" ">
              <h3 className="text-[16px] mb-2 text-[#0cacf0]">
                Property Video
              </h3>
              <div className="aspect-video w-full">
                <div className={`relative aspect-video w-full ${className}`}>
                  {/* Thumbnail */}
                  <div
                    className="group relative w-full h-full cursor-pointer"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <img
                      src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/House-Design-1240x720.jpg"
                      alt="Property Video"
                      className="w-full h-full object-cover rounded-[16px] border-2 border-white shadow-lg transition group-hover:brightness-90"
                    />
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center justify-center size-28 rounded-full bg-white/30 backdrop-blur-md">
                        <div className="flex items-center justify-center size-20 rounded-full bg-black shadow-md transition group-hover:scale-110">
                          <Play className="size-8 fill-white text-white" />
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
              <div>
                <h3 className="text-[16px] mt-5 mb-2 text-[#0cacf0]">
                  Property On Map
                </h3>

                {/* Map Section */}
                <div className="w-full lg:h-[400px] h-[200px] lg:mt-0 mt-5">
                  <iframe
                    title="Location Map"
                    src={getMapSrc(filters.location)}
                    className="w-full h-full"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className='text-[#1CB2FF]'> Similar Properties</h1>
          <div className='flex lg:flex-row flex-wrap lg:justify-start text-[11px] justify-center gap-1 items-center'>
            <button className='group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-3 rounded-[6px] transition-colors duration-300'>
              Recommended </button>
            <button className='group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-3 rounded-[6px] transition-colors duration-300'>Property Features</button>
            <button className='group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-3 rounded-[6px] transition-colors duration-300'>Property Type</button>
            <button className='group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-3 rounded-[6px] transition-colors duration-300'> Property Location</button>
            <button className='group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-3 rounded-[6px] transition-colors duration-300'>Property Status</button>
            <button className='group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-3 rounded-[6px] transition-colors duration-300'>Property Agent</button>
          </div>

          {/* lower div */}
          <div className='flex lg:flex-row flex-wrap justify-center gap-5 mt-15 items-center'>
            {properties1.map((prop, index) => (
              <div key={index} className="bg-white lg:w-[380px] w-full  relative rounded-lg mb-10 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-full relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${prop.image})` }}>

                  <div className="absolute top-[-10px] left-0 bg-[#0054A5] text-white text-xs font-semibold px-5 py-1 rounded-br-md z-10" style={{ clipPath: "polygon(0% 0%, 87% 0, 100% 49%, 87% 100%, 0% 100%)" }}>
                    Featured
                  </div>


                  <div className="absolute bottom-0 flex flex-row justify-between items-center px-3 w-full p-1 ">
                    <div className=" ">
                      <span className="bg-[#ff7700] text-white rounded text-sm font-semibold py-2 px-4">{prop.sale}</span>
                    </div>

                    <div className='flex gap-1 justify-center lg:pt-1 items-center'>
                      <span className="relative group cursor-pointer" onClick={() => toggleFavorite(index)}>
                        <FaHeart
                          className={`w-7 h-7 p-1 transition-colors duration-300 ${favorites.includes(index) ? "fill-[#ff0000]" : "fill-white"
                            }`}
                        />
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          {favorites.includes(index) ? "Remove Favorite" : "Add to Favorites"}
                        </span>
                      </span>


                      <span className="relative group">
                        <MdCompareArrows className="  w-8 h-8 lg:p-0 p-1 lg:border-0 rounded-[6px] border border-gray-500 lg:fill-orange-500 fill-gray-500" />
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          Compare Property
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 relative w-full">

                  <div className='relative flex gap-2 justify-between  items-center'>
                    <div className='flex flex-col'>
                      <h3 className="lg:text-[23px] sm:text-lg text-[15px] font-semibold  mt-2 ">{prop.title}</h3>
                      <p className="text-[13px] w-full mt-2 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, earum recusandae qui iure.  </p>
                    </div>
                  </div>

                  <div className='flex  lg:mb-5 mt-3 flex-wrap lg:gap-12 gap-4 lg:justify-between justify-center mx-auto items-center'>

                    <div className=" flex flex-wrap lg:mx-0 mx-auto gap-10  items-center justify-between  text-gray-700">

                      <div className="flex flex-col items-center justify-center group">
                        <span className='text-[12px] font-bold'>
                          Bedrooms
                        </span>
                        <span className=' flex flex-row'>
                          {prop.beds.icon}
                          <span className='ms-2 text-[11px] font-bold'>{prop.beds.count}</span>

                        </span>
                      </div>

                      <div className="flex flex-col items-center justify-center group">
                        <span className='text-[12px] font-bold'>
                          Bathrooms
                        </span>
                        <span className=' flex flex-row'>
                          {prop.baths.icon}
                          <span className='ms-2 text-[11px] font-bold'>{prop.baths.count}</span>
                        </span>
                      </div>

                      <div className="flex flex-col items-center justify-center group">
                        <span className='text-[12px] font-bold'>
                          Area
                        </span>
                        <span className=' flex flex-row'>
                          {prop.sqft.icon}

                          <span className='ms-2 text-[11px] font-bold flex gap-2'>{prop.sqft.count}
                            <span className="text-gray-400">sq ft</span></span>
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className='text-[12px] font-semibold'>For sale</span>
                      <p className="text-[#1CB2FF] lg:text-[25px] text-sm font-bold">${prop.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 mt-10 space-y-8 px-2">
          <div className=" mx-auto lg:px-4 py-5 flex lg:flex-row  flex-wrap justify-center items-center  gap-5">
            <aside className="w-full xl:w-96 space-y-6">
              {/* Agent Cards */}
              {agents.slice(0, 3).map((agent, index) => (
                <div key={index} className="min-h-[500px] lg:mb-20 mb-15 relative flex flex-col justify-end">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="absolute -top-15 left-1/3 w-28 h-28 object-cover mx-auto mt-5 rounded shadow"
                  />
                  <div className="rounded overflow-hidden shadow-md hover:shadow-xl transition">
                    <div className="bg-white p-5 pt-20 text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mt-5">
                        <span className="text-lg flex gap-3 flex-row justify-center items-center font-bold text-[black]  group-hover:text-[#1CB2FF] transition-colors duration-300">
                          {agent.name}
                          <span className="text-xs bg-[#1CB2FF] text-white px-1 py-1 rounded-full"> <TiTick /></span>
                        </span> </h3>
                      <p className="text-sm text-gray-500 my-4"><span className="font-semibold">Office:</span> {agent.phone}</p>
                      <p className="text-sm text-gray-500 my-4"><span className="font-semibold">Fax:</span> 1-333-444-5555</p>
                      <p className="text-sm text-gray-500 my-4"><span className="font-semibold">Whatsapp:</span> 1-222-333-4422</p>
                      <p className="text-sm text-gray-500 my-4"><span className="font-semibold">Email:</span> {agent.email}</p>

                      <div className='my-5 text-center'>
                        <button className='w-full  mx-auto text-center  group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-4 rounded-[6px] transition-colors duration-300' >
                          View My Listings
                        </button>
                      </div>

                      <form className="space-y-4 text-left text-[15px]">
                        {/* Name */}
                        <label className="block font-bold text-gray-600 mb-1 text-[14px]">Name</label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full border-b border-gray-300 px-1 py-2 text-[14px] focus:outline-none"
                        />

                        {/* Email */}
                        <label className="block font-bold text-gray-600 mb-1 text-[14px]">Email</label>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full border-b border-gray-300 px-1 py-2 text-[14px] focus:outline-none"
                        />

                        {/* Phone */}
                        <label className="block font-bold text-gray-600 mb-1 text-[14px]">Phone #</label>
                        <input
                          type="tel"
                          placeholder="Your Phone"
                          className="w-full border-b border-gray-300 px-1 py-2 text-[14px] focus:outline-none"
                        />

                        {/* Message */}
                        <label className="block font-bold text-gray-600 mb-1 text-[14px]">Message</label>
                        <textarea
                          rows="4"
                          placeholder="Hello, I am interested in [Home in Merrick Way]"
                          className="w-full border-b border-gray-300 px-1 py-2 text-[14px] focus:outline-none resize-none"
                        ></textarea>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3 pt-2">
                          <button type="button" className="lg:w-[140px] w-full mx-auto text-center  group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-4 rounded-[6px] transition-colors duration-300" >
                            WhatsApp
                          </button>
                          <button type="button" className="lg:w-[140px] w-full mx-auto text-center  group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-4 rounded-[6px] transition-colors duration-300" >
                            Call Now
                          </button>
                          <button type="submit" className="w-full  mx-auto text-center  group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-4 rounded-[6px] transition-colors duration-300" >
                            Send Message
                          </button>

                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
            </aside>

            <div>
              {properties1.map((prop, index) => (
                <div key={index} className="bg-white relative rounded-lg mb-10 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="w-full relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${prop.image})` }}>

                    <div className="absolute top-[-10px] left-0 bg-[#0054A5] text-white text-xs font-semibold px-5 py-1 rounded-br-md z-10" style={{ clipPath: "polygon(0% 0%, 87% 0, 100% 49%, 87% 100%, 0% 100%)" }}>
                      Featured
                    </div>


                    <div className="absolute bottom-0 flex flex-row justify-between items-center px-3 w-full p-1 ">
                      <div className=" ">
                        <span className="bg-[#ff7700] text-white rounded text-sm font-semibold py-2 px-4">{prop.sale}</span>
                      </div>

                      <div className='flex gap-1 justify-center lg:pt-1 items-center'>
                        <span className="relative group cursor-pointer" onClick={() => toggleFavorite(index)}>
                          <FaHeart
                            className={`w-7 h-7 p-1 transition-colors duration-300 ${favorites.includes(index) ? "fill-[#ff0000]" : "fill-white"
                              }`}
                          />
                          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            {favorites.includes(index) ? "Remove Favorite" : "Add to Favorites"}
                          </span>
                        </span>


                        <span className="relative group">
                          <MdCompareArrows className="  w-8 h-8 lg:p-0 p-1 lg:border-0 rounded-[6px] border border-gray-500 lg:fill-orange-500 fill-gray-500" />
                          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            Compare Property
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 relative w-full">

                    <div className='relative flex gap-2 justify-between  items-center'>
                      <div className='flex flex-col'>
                        <h3 className="lg:text-[23px] sm:text-lg text-[15px] font-semibold  mt-2 ">{prop.title}</h3>
                        <p className="text-[13px] w-full mt-2 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, earum recusandae qui iure.  </p>
                      </div>
                    </div>

                    <div className='flex  lg:mb-5 mt-3 flex-wrap lg:gap-12 gap-4 lg:justify-between justify-center mx-auto items-center'>

                      <div className=" flex flex-wrap lg:mx-0 mx-auto gap-10  items-center justify-between  text-gray-700">

                        <div className="flex flex-col items-center justify-center group">
                          <span className='text-[12px] font-bold'>
                            Bedrooms
                          </span>
                          <span className=' flex flex-row'>
                            {prop.beds.icon}
                            <span className='ms-2 text-[11px] font-bold'>{prop.beds.count}</span>

                          </span>
                        </div>

                        <div className="flex flex-col items-center justify-center group">
                          <span className='text-[12px] font-bold'>
                            Bathrooms
                          </span>
                          <span className=' flex flex-row'>
                            {prop.baths.icon}
                            <span className='ms-2 text-[11px] font-bold'>{prop.baths.count}</span>
                          </span>
                        </div>

                        <div className="flex flex-col items-center justify-center group">
                          <span className='text-[12px] font-bold'>
                            Area
                          </span>
                          <span className=' flex flex-row'>
                            {prop.sqft.icon}

                            <span className='ms-2 text-[11px] font-bold flex gap-2'>{prop.sqft.count}
                              <span className="text-gray-400">sq ft</span></span>
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className='text-[12px] font-semibold'>For sale</span>
                        <p className="text-[#1CB2FF] lg:text-[25px] text-sm font-bold">${prop.price.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div >
        </div >
      </div >

      {/* Modal */}
      < AnimatePresence >
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed w-full inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video mx-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 bg-black p-2 rounded-full text-white shadow-md z-10"
              >
                <XIcon className="size-5" />
              </button>

              {/* Video */}
              <div className="relative w-full h-full overflow-hidden rounded-[16px] border-2 border-white shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/uTIcquf4Z-s?si=Ptrr_c7QijPE1tRc"
                  className="w-full h-full rounded-[16px]"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence >
      <Footer />
    </div >
  );
};

export default ListLayoutDetail;


