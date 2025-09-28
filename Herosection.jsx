import { motion } from 'framer-motion'
import { MdLocationOn } from 'react-icons/md'
import SubmitButton from '../components/SubmitButton'
import { useState } from "react";
import Header from './Header';

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

const Herosection = () => {
  const [current, setCurrent] = useState(0)
  const slide = slides[current]

  const nextSlide = () => setCurrent((current + 1) % slides.length)
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length)

  motion

  return (
    <div className="lg:hidden">
      <Header />

      <div
        className="h-[300px] bg-cover bg-center transition-all duration-700 rounded-md"
        style={{ backgroundImage: `url(${slide.image})` }}
      ></div>

      <div className="relative w-full flex items-center justify-center px-3">
        <div className="relative w-full flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">

          {/* Stats section */}
          <div className="w-full lg:w-1/4 flex lg:flex-col flex-row justify-between items-center text-gray-600 bg-gray-50">
            <div className="flex flex-col items-center p-6 border-b lg:border-b border-r lg:border-r-0 border-gray-200 group">
              <span className="text-teal-500 text-lg font-semibold">{slide.beds}</span>
              <span className="text-xs text-gray-500">Beds</span>
            </div>
            <div className="flex flex-col items-center p-6 border-b lg:border-b border-r lg:border-r-0 border-gray-200 group">
              <span className="text-teal-500 text-lg font-semibold">{slide.baths}</span>
              <span className="text-xs text-gray-500">Baths</span>
            </div>
            <div className="flex flex-col items-center p-6 group">
              <span className="text-teal-500 text-lg font-semibold">{slide.sqft}</span>
              <span className="text-xs text-gray-500">sq ft</span>
            </div>
          </div>

          {/* Info section */}
          <div className="w-full lg:w-3/4 p-6 border-t lg:border-t-0 lg:border-l border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-500 flex gap-2 items-center">
                <MdLocationOn className="w-5 h-5 text-teal-500" />
                {slide.location1} {slide.location2}
              </span>
            </div>

            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">{slide.title}</h3>
            <p className="text-sm mt-2 text-gray-600">{slide.description1}</p>
            <p className="text-sm mt-1 text-gray-600">{slide.description2}</p>
            <p className="text-sm mt-1 text-gray-600">{slide.description3}</p>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xl font-bold text-teal-600">{slide.price} Monthly</span>
              <SubmitButton
                label="Know More"
                onClick={() => console.log("Clicked!")}
                className="px-5 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
              />
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <SubmitButton onClick={prevSlide} label="<" className="bg-teal-600 text-white px-3 py-2 rounded-md hover:bg-teal-700" />
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
          <SubmitButton onClick={nextSlide} label=">" className="bg-teal-600 text-white px-3 py-2 rounded-md hover:bg-teal-700" />
        </div>
      </div>
    </div>
  )
}

export default Herosection
