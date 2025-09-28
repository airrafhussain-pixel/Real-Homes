import Header from '../components/Header'
import { motion } from 'framer-motion'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import SubmitButton from '../components/SubmitButton'
import { useState } from "react";
import Herosection from '../components/Herosection';
import { RealEstateHome } from '../components/RealEstateHome';
import Agent from '../components/Agent';
import SwiperSlider from '../components/SwiperSlider';
import { VscTriangleRight } from 'react-icons/vsc';
import { PhoneIcon } from 'lucide-react';
import { FaLocationDot } from 'react-icons/fa6';

const slides = [
  {
    title: 'Villa on Hollywood Boulevard',
    description1: 'Spacious and fabulous home in prime',
    description2: 'location. This executive style four bed,',
    description3: 'four bath home',
    beds: 3,
    baths: 4,
    sqft: 4520,
    price: '$4,750',
    location1: 'Hatteras Lane, Hollywood, FL 33019, USA',
    image: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/spacejoy-RqO6kwm4tZY-unsplash-1.jpg',
  },
  {
    title: 'Villa on Grand Avenue',
    description1: 'Skyline views and modern interiors',
    description2: 'Spacious and fabulous home in prime',
    description3: 'four bath home',
    beds: 2,
    baths: 2,
    sqft: 4800,
    price: '$740,000',
    location1: 'CocoWalk, 3015 Grand Avenue, Miami, FL',
    location2: '33133, USA',
    image: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Bedroom-e1642947949616.jpg',
  },
]

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0)
  const slide = slides[current]

  const nextSlide = () => setCurrent((current + 1) % slides.length)
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length)

  const cardData1 = [
    {
      title: "Single Family",
      count: 4,
      image: "https://static.designboom.com/wp-content/dbsub/448274/2023-01-17/note-architects-builds-a-villa-to-enjoy-the-scenery-of-the-forest-1-63c5fec9a34e1.jpg",
    },
    {
      title: "Shop",
      count: 1,
      image: "https://thumbs.dreamstime.com/b/luxury-interior-design-living-room-pool-villas-airy-bright-space-high-raised-ceiling-wooden-dining-table-luxury-143401452.jpg",
    },
  ]
  
  const cardData2 = [
    {
      title: "Apartment",
      count: 2,
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      title: "Villa",
      count: 4,
      image: "https://ik.imagekit.io/agrpv/111977_02.jpg?t=20250918",
    },
  ]

  const logos = [
    { img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/one.png" },
    { img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/two.png" },
    { img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/three.png" },
    { img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/four.png" },
    { img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/five.png" },
  ];

  return (
    <>
      {/* Slider */}
      <div className="hidden lg:block lg:h-screen bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${slide.image})` }} >
        <Header />
        <div className="relative max-w-7xl mx-auto lg:px-3">
          <div className="relative w-full inset-0 flex items-center justify-center">
            <div className="lg:absolute lg:mt-2 md:mt-2 mt-50 relative lg:top-[140px] lg:right-[0px] flex lg:flex-row flex-col bg-white rounded-xl overflow-hidden lg:shadow-2xl transition-shadow duration-300">
              {/* Property Info */}
              <div className="lg:w-25 w-full flex lg:flex-col flex-wrap mx-auto items-center justify-between text-gray-700">
                {/* Beds */}
                <div className="flex flex-col lg:border-b border-0 w-[80px] p-8 border-[#bab6b665] items-center justify-center group">
                  <svg className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
                  </svg>
                  <span>{slide.beds}</span>
                </div>

                {/* Baths */}
                <div className="flex flex-col lg:border-b border-0 w-[80px] p-8 border-[#bab6b665] items-center justify-center group">
                  <svg className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" width="23.69" height="24" viewBox="0 0 23.69 24">
                    <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.014,1.014,0,0,1-1.88.685l-0.35-.94A1,1,0,0,1,1212,613.295Zm-9.995-.635a1,1,0,0,1,1.28.6l0.69,0.879a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1202.005,612.66Zm-1.925-5.3a1,1,0,0,1,1.28.6l0.35,0.94a1,1,0,0,1-1.88.685l-0.35-.94A1,1,0,0,1,1200.08,607.36Z" transform="translate(-1200 -601)" />
                  </svg>
                  <span>{slide.baths}</span>
                </div>

                {/* Sqft */}
                <div className="flex flex-col lg:border-b border-0 w-[80px] p-8 border-[#bab6b665] items-center justify-center group">
                  <span>{slide.sqft} sqft</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex lg:flex-col flex-col-reverse lg:items-start items-center lg:p-8 p-2 justify-center">
                <h1 className="text-lg font-semibold">{slide.price}</h1>
                <span className="text-sm text-gray-500 mt-1">For Sale</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <Herosection />

      {/* Real Estate Cards */}
      <RealEstateHome cardData1={cardData1} cardData2={cardData2} />

      {/* Agents Section */}
      <Agent />

      {/* Swiper Section */}
      <SwiperSlider />

      {/* Partners Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-6">
          {logos.map((logo, index) => (
            <img key={index} src={logo.img} alt={`Partner ${index}`} className="h-12 object-contain" />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="flex items-center gap-2"><MdEmail /> info@realestate.com</p>
            <p className="flex items-center gap-2"><FaLocationDot /> 123 Main Street, Miami, FL</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Properties</li>
              <li>Agents</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <input type="email" placeholder="Your email" className="p-2 rounded text-gray-900 w-full mb-2"/>
            <SubmitButton text="Subscribe" />
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">&copy; 2025 Real Estate. All rights reserved.</div>
      </footer>
    </>
  );
}

export default Home;
