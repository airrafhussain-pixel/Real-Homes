
import { motion } from 'framer-motion'
import { useState, useEffect } from "react";
import { FaCamera, FaFire, FaHeart, FaSearch, FaStar, FaVideo } from 'react-icons/fa';
import { MdCompareArrows } from 'react-icons/md';

export function RealEstateHome() {
    const [isOpen, setIsOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);
    const [bedsOpen, setBedsOpen] = useState(false);
    const [bathsOpen, setBathsOpen] = useState(false);
    const [garagesOpen, setGaragesOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);



    const [price, setPrice] = useState(2500);
    // const [price, setPrice] = useState(0);
    useEffect(() => {
        const min = 2500;
        const max = 3502200;
        const randomStart = Math.floor(Math.random() * (max - min + 1)) + min;
        setPrice(randomStart);
    }, []);

    const properties1 = [
        {
            title: "Home in Merrick Way",
            price: 540000,
            beds: 3,
            baths: 2,
            sqft: 4300,
            garages: 2,
            sale: "For Sale",
            camera: "6",
            video: "1",
            image: "https://amazingarchitecture.com/storage/711/Deep-Villa-Atrey-and-Associates-New-Delhi-ndia-Amazing-Architecture-House.jpg",
        },
        {
            title: "Villa in Coral Gables",
            price: 825000,
            beds: 4,
            baths: 2,
            sqft: 3500,
            garages: 2,
            sale: "For Sale",
            camera: "4",
            video: "2",
            image: "https://i.pinimg.com/originals/b1/38/a7/b138a779aa3ad65801d60fa3295aa3d1.jpg",
        },
    ]

    const properties = [

        {
            title: "Modern Villa Dubai",
            price: 950000,
            beds: 5,
            baths: 3,
            sqft: 4200,
            garages: 2,
            sale: "For Sale",
            camera: "5",
            video: "3",
            image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
        },
        {
            title: "Luxury Home in Clifton",
            price: 1250000,
            beds: 6,
            baths: 4,
            sqft: 5000,
            garages: 3,
            sale: "For Rent",
            camera: "6",
            video: "4",
            image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
        },
        {
            title: "Elegant Bungalow in DHA",
            price: 780000,
            beds: 4,
            baths: 2,
            sqft: 3600,
            garages: 2,
            sale: "For Rent",
            camera: "3",
            video: "2",
            image: "https://i.pinimg.com/originals/60/f6/e7/60f6e7b8d5a74d59b16f29ad5764d952.jpg",
        },

    ];


    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 1;

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [currentPage]);

    const totalPages = Math.ceil(properties.length / cardsPerPage);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = properties.slice(indexOfFirstCard, indexOfLastCard);
    console.log(currentCards);


    const getPageWindow = () => {
        const windowSize = 2;
        const start = Math.floor((currentPage - 1) / windowSize) * windowSize + 1;
        return Array.from({ length: windowSize }, (_, i) => start + i).filter(p => p <= totalPages);
    };


    const [favorites, setFavorites] = useState([]);
    const toggleFavorite = (index) => {
        setFavorites((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const [favorites2, setFavorites2] = useState([]);
    const toggleFavorite2 = (index) => {
        setFavorites2((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    motion
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Search Filters */}
            <div className="bg-white lg:shadow-md  rounded-lg p-6">
                <div className=" ">
                    <div className='flex lg:flex-row flex-col jusyify-between items-center lg:gap-3 gap-5'>

                        <div className="relative w-full">
                            <select
                                className="w-full border p-2 py-4 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none"
                                onFocus={() => setIsOpen(true)}
                                onBlur={() => setIsOpen(false)}
                            >
                                <option>All Locations</option>
                                <option>Mami</option>
                                <option>Doral</option>
                                <option>Little Havana</option>
                                <option>Perinne</option>
                            </select>

                            {/* SVG Icon */}
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg
                                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        <div className="relative w-full">
                            <select
                                className="w-full border p-2 py-4 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none"
                                onFocus={() => setStatusOpen(true)}
                                onBlur={() => setStatusOpen(false)}
                            >
                                <option>All Status</option>
                                <option>For Rent</option>
                                <option>For Sale</option>
                            </select>
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg
                                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${statusOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>


                        <div className="relative w-full">
                            <select
                                className="w-full border p-2 py-4 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none"
                                onFocus={() => setTypeOpen(true)}
                                onBlur={() => setTypeOpen(false)}
                            >
                                <option>All Types</option>
                                <option>Commertial</option>
                                <option>Office</option>
                                <option>Guest House</option>
                                <option>Residence</option>
                                <option>Paking Lot</option>
                            </select>
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg
                                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${typeOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>


                        <button className="flex gap-3 justify-center items-center w-full lg:w-[600px]  bg-[#1CB2FF] hover:bg-[#0054A6] text-white p-2 py-4 rounded border-gray-400 transition-colors duration-300">
                            <FaSearch /> Search
                        </button>

                    </div>

                    <div className="flex  lg:flex-row  flex-col  items-center mt-6">
                        {/* 🔷 Price Range Section */}
                        <div className="w-full px-4 ">
                            <p className="mt-2 text-gray-500 text-center font-semibold">
                                From <span className="text-[#0054A5]">$2,500</span> To{" "}
                                <span className="text-[#0054A5]">${price.toLocaleString()}</span>
                            </p>
                            <input
                                type="range"
                                min={2500}
                                max={6950000}
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                className="w-full mt-2"
                            />
                        </div>

                        {/* 🔷 Dropdowns Section */}
                        <div className="w-full flex lg:flex-row flex-col gap-3 justify-between  items-center ">
                            {/* Beds Dropdown */}
                            <div className="relative w-full">
                                <select
                                    className="w-full border p-2 py-4 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none"
                                    onFocus={() => setBedsOpen(true)}
                                    onBlur={() => setBedsOpen(false)}
                                >
                                    <option>All Beds</option>
                                    <option>1 Bed</option>
                                    <option>2 Beds</option>
                                    <option>3+ Beds</option>
                                </select>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg
                                        className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${bedsOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Baths Dropdown */}
                            <div className="relative w-full">
                                <select
                                    className="w-full border p-2 py-4 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none"
                                    onFocus={() => setBathsOpen(true)}
                                    onBlur={() => setBathsOpen(false)}
                                >
                                    <option>All Baths</option>
                                    <option>1 Bath</option>
                                    <option>2 Baths</option>
                                    <option>3+ Baths</option>
                                </select>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg
                                        className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${bathsOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Garages Dropdown */}
                            <div className="relative w-full">
                                <select
                                    className="w-full border p-2 py-4 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none"
                                    onFocus={() => setGaragesOpen(true)}
                                    onBlur={() => setGaragesOpen(false)}
                                >
                                    <option>All Garages</option>
                                    <option>1 Garage</option>
                                    <option>2 Garages</option>
                                    <option>3+ Garages</option>
                                </select>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg
                                        className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${garagesOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Property Grid */}
            <div className="mt-20 text-center ">

                <h1 className="text-[13px] font-bold text-[#1CB2FF]">  Recent</h1>
                <h2 className="text-3xl font-bold text-gray-800">Properties</h2>
                <p className="text-gray-500 mb-6">Check out some of our latest properties.</p>


                <div className="max-w-7xl mx-auto lg:px-4 py-10">

                    {loading ? (
                        <div className="flex justify-center items-center h-48">
                            <span className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></span>
                        </div>
                    ) : (

                        <>
                        {/* cards properties */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mx-auto justify-center items-center">
                                {properties1.slice(0, 2).map((prop, index) => (
                                    <div key={index} className="bg-white relative rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                        {/* Full card content here */}
                                        <div className="w-full h-80 bg-cover bg-center" style={{ backgroundImage: `url(${prop.image})` }}>
                                            <div className="w-full h-80 bg-cover bg-center" style={{ backgroundImage: `url(${prop.image})` }} >
                                                <div className=' flex gap-10 justify-between items-center'>
                                                    <div className='flex relative'>
                                                        <span className='flex gap-1 items-center text-white bg-black/20 lg:absolute relative lg:left-[15px] lg:top-[10px] ms-2 me-3  text-[12px] px-1 border border-white  rounded-[6px]'>
                                                            <FaCamera className='m-1 w-5 h-5 fill-white' />{prop.camera}</span>
                                                        <span className='flex gap-1 items-center text-white bg-black/20 lg:absolute relative lg:left-[80px] lg:top-[10px]   text-[12px]  px-1 border border-white rounded-[6px]'>
                                                            <FaVideo className='m-1 w-5 h-5 fill-white' />{prop.video}</span>
                                                    </div>

                                                    <div className="flex gap-3 justify-center items-center">
                                                        {/* Feature Icon (FaStar) */}
                                                        <span className="relative group h-8 bg-[#0054A5]" style={{
                                                            clipPath: "polygon(20% 0%, 0 0, 0 49%, 0 100%, 50% 70%, 100% 100%, 100% 48%, 100% 0, 80% 0%, 56% 0)"
                                                        }}>
                                                            <FaStar className="pt-1 m-1 w-3 h-3 fill-white" />
                                                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                                                Feature
                                                            </span>
                                                        </span>

                                                        {/* Trendy Icon (FaFire) */}
                                                        <span className="relative group h-8 bg-red-500 me-2" style={{
                                                            clipPath: "polygon(20% 0%, 0 0, 0 49%, 0 100%, 50% 70%, 100% 100%, 100% 48%, 100% 0, 80% 0%, 56% 0)"
                                                        }}>
                                                            <FaFire className="pt-1 m-1 w-3 h-3 fill-white" />
                                                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                                                Trendy
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="p-1 relative w-full">
                                            <div className="p-1 relative w-full">

                                                <div className=' lg:absolute relative lg:top-[-85px] flex lg:gap-65 gap-2 justify-between  items-center'>
                                                    <div className='flex flex-col'>
                                                        <span
                                                            className={`lg:w-25 w-full p-1 text-[12px] px-3  text-white rounded-[6px] ${prop.sale === "For Sale" ? "bg-[#0054A5]" : "bg-[#1CB2FF]"
                                                                }`}
                                                        >
                                                            {prop.sale}
                                                        </span>
                                                        <h3 className="lg:text-[23px] sm:text-lg text-[15px] font-semibold  mt-2 lg:text-white">{prop.title}</h3>
                                                    </div>

                                                    <div className='flex gap-1 justify-center lg:pt-5 items-center'>
                                                        {/* Heart Icon with Tooltip */}
                                                        <span className="relative group cursor-pointer" onClick={() => toggleFavorite(index)}>
                                                            <FaHeart
                                                                className={`w-9 h-9 p-1 transition-colors duration-300 ${favorites.includes(index) ? "fill-[#0054A5]" : "fill-white"
                                                                    }`}
                                                            />
                                                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#0054A5] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                                                {favorites.includes(index) ? "Remove Favorite" : "Add to Favorites"}
                                                            </span>
                                                        </span>


                                                        {/* Compare Icon with Tooltip */}
                                                        <span className="relative group">
                                                            <MdCompareArrows className="lg:w-10 lg:h-10 w-8 h-8 lg:p-0 p-1 lg:border-0 rounded-[6px] border border-gray-500 lg:fill-white fill-gray-500" />
                                                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#0054A5] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                                                Compare Property
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='flex  lg:mb-5 mt-3 flex-wrap lg:gap-12 gap-4 lg:justify-between justify-center mx-auto items-center'>
                                                    <div>
                                                        <span className='text-[12px] font-semibold'>For sale</span>
                                                        <p className="text-[#0054A5] font-bold">${prop.price.toLocaleString()}</p>
                                                    </div>

                                                    <div className=" flex flex-wrap lg:mx-0 mx-auto gap-8  items-center justify-between  text-gray-700">

                                                        <div className="flex flex-col items-center justify-center group">
                                                            <span className='text-[12px] font-bold'>
                                                                Bedrooms
                                                            </span>
                                                            <span className=' flex flex-row'>
                                                                <svg
                                                                    className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
                                                                </svg>
                                                                <span className='ms-2 text-[11px] font-bold'>{prop.beds}</span>

                                                            </span>
                                                        </div>

                                                        <div className="flex flex-col items-center justify-center group">
                                                            <span className='text-[12px] font-bold'>
                                                                Bathrooms
                                                            </span>
                                                            <span className=' flex flex-row'>
                                                                <svg
                                                                    className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="23.69"
                                                                    height="24"
                                                                    viewBox="0 0 23.69 24"
                                                                >
                                                                    <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
                                                                </svg>
                                                                <span className='ms-2 text-[11px] font-bold'>{prop.baths}</span>
                                                            </span>
                                                        </div>

                                                        <div className="flex flex-col items-center justify-center group">
                                                            <span className='text-[12px] font-bold'>
                                                                Area
                                                            </span>
                                                            <span className=' flex flex-row'>
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

                                                                <span className='ms-2 text-[11px] font-bold flex flex-col'>{prop.sqft} <span className="text-gray-400">sq ft</span></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto justify-center items-center">
                                {properties.map((prop, index) => (
                                    <div key={index} className="bg-white relative rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                        {/* Full card content here */}
                                        <div className="w-full h-80 bg-cover bg-center" style={{ backgroundImage: `url(${prop.image})` }}>
                                            <div className="w-full h-80 bg-cover bg-center" style={{ backgroundImage: `url(${prop.image})` }} >
                                                <div className=' flex gap-10 justify-between items-center'>
                                                    <div className='flex relative'>
                                                        <span className='flex gap-1 items-center text-white bg-black/20 lg:absolute relative lg:left-[15px] lg:top-[10px] ms-2 me-3  text-[12px] px-1 border border-white  rounded-[6px]'>
                                                            <FaCamera className='m-1 w-5 h-5 fill-white' />{prop.camera}</span>
                                                        <span className='flex gap-1 items-center text-white bg-black/20 lg:absolute relative lg:left-[80px] lg:top-[10px]   text-[12px]  px-1 border border-white rounded-[6px]'>
                                                            <FaVideo className='m-1 w-5 h-5 fill-white' />{prop.video}</span>
                                                    </div>

                                                    <div className="flex gap-3 justify-center items-center">
                                                        {/* Feature Icon (FaStar) */}
                                                        <span className="relative group h-8 bg-[#0054A5]" style={{
                                                            clipPath: "polygon(20% 0%, 0 0, 0 49%, 0 100%, 50% 70%, 100% 100%, 100% 48%, 100% 0, 80% 0%, 56% 0)"
                                                        }}>
                                                            <FaStar className="pt-1 m-1 w-3 h-3 fill-white" />
                                                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                                                Feature
                                                            </span>
                                                        </span>

                                                        {/* Trendy Icon (FaFire) */}
                                                        <span className="relative group h-8 bg-red-500 me-2" style={{
                                                            clipPath: "polygon(20% 0%, 0 0, 0 49%, 0 100%, 50% 70%, 100% 100%, 100% 48%, 100% 0, 80% 0%, 56% 0)"
                                                        }}>
                                                            <FaFire className="pt-1 m-1 w-3 h-3 fill-white" />
                                                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                                                Trendy
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="p-1 relative w-full">
                                            <div className="p-1 relative w-full">

                                                <div className='relative  lg:mt-[-85px] flex   justify-between  items-center'>
                                                    <div className='flex flex-col '>
                                                        <span
                                                            className={`lg:w-25 w-full p-1 text-[12px] px-3  text-white rounded-[6px] ${prop.sale === "For Sale" ? "bg-[#0054A5]" : "bg-[#1CB2FF]"
                                                                }`}
                                                        >
                                                            {prop.sale}
                                                        </span>
                                                        <h3 className="lg:text-[19px] w-full font-semibold  mt-2 lg:text-white">{prop.title}</h3>
                                                    </div>

                                                    <div className='flex gap-1 justify-center lg:pt-10 items-center'>

                                                        {/* Heart Icon with Tooltip */}
                                                        <span className="relative group cursor-pointer" onClick={() => toggleFavorite2(index)}>
                                                            <FaHeart
                                                                className={`w-9 h-9 p-1 transition-colors duration-300 ${favorites2.includes(index) ? "fill-[#0054A5]" : "fill-white"
                                                                    }`}
                                                            />
                                                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#0054A5] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                                                {favorites2.includes(index) ? "Remove Favorite" : "Add to Favorites"}
                                                            </span>
                                                        </span>

                                                        {/* Compare Icon with Tooltip */}
                                                        <span className="relative group">
                                                            <MdCompareArrows className="w-8 h-8 lg:p-0 p-1 lg:border-0 rounded-[6px] border border-gray-500 lg:fill-white fill-gray-500" />
                                                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#0054A5] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                                                Compare Property
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className='flex lg:mb-5 mt-3 flex-wrap lg:gap-12 gap-4 lg:justify-between justify-center items-center'>
                                                    <div>
                                                        <span className='text-[12px] font-semibold'>For sale</span>
                                                        <p className="text-[#0054A5] font-bold">${prop.price.toLocaleString()}</p>
                                                    </div>

                                                    <div className=" flex flex-wrap lg:mx-0 mx-auto gap-8  items-center justify-between  text-gray-700">

                                                        <div className="flex flex-col items-center justify-center group">
                                                            <span className='text-[12px] font-bold'>
                                                                Bedrooms
                                                            </span>
                                                            <span className=' flex flex-row'>
                                                                <svg
                                                                    className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
                                                                </svg>
                                                                <span className='ms-2 text-[11px] font-bold'>{prop.beds}</span>

                                                            </span>
                                                        </div>

                                                        <div className="flex flex-col items-center justify-center group">
                                                            <span className='text-[12px] font-bold'>
                                                                Bathrooms
                                                            </span>
                                                            <span className=' flex flex-row'>
                                                                <svg
                                                                    className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="23.69"
                                                                    height="24"
                                                                    viewBox="0 0 23.69 24"
                                                                >
                                                                    <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
                                                                </svg>
                                                                <span className='ms-2 text-[11px] font-bold'>{prop.baths}</span>
                                                            </span>
                                                        </div>

                                                        <div className="flex flex-col items-center justify-center group">
                                                            <span className='text-[12px] font-bold'>
                                                                Area
                                                            </span>
                                                            <span className=' flex flex-row'>
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

                                                                <span className='ms-2 text-[11px] font-bold flex flex-col'>{prop.sqft} <span className="text-gray-400">sq ft</span></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}


                    {/* pagination */}

                    <div className="flex justify-center items-center gap-2 mt-8">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            className="px-4 py-2 border border-gray-200 bg-white rounded shadow-lg"
                        >
                            &lt;
                        </button>

                        {getPageWindow().map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 rounded shadow-lg ${currentPage === page
                                    ? "bg-[#1CB2FF] shadow-lg text-white border border-gray-200"
                                    : "shadow-lg text-black border border-gray-200 bg-white"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            className="px-4 py-2 border border-gray-200 bg-white rounded shadow-lg"
                        >
                            &gt;
                        </button>
                    </div>

                </div>

            </div>
        </div >
    );
}