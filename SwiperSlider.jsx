import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

export default function SwiperSlider() {
    const testimonials = [
        {
            quote: "RealHomes made property management so simple...",
            author: "Melissa William",
            image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1-300x300.jpg",
        },
        {
            quote: "The interface is clean and intuitive...",
            author: "Nathan James",
            image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2.jpg",
        },
    ];

    return (
        <div className="relative lg:max-w-4xl max-w-6xl mx-auto">
            <div className="text-center px-4">
                <h1 className="text-xs sm:text-sm md:text-base font-bold text-[#1CB2FF] uppercase tracking-wide">Words</h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">From Our Customers</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop
                spaceBetween={30}
                slidesPerView={1}
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative flex lg:flex-row flex-col lg:h-[300px] lg:pt-1 pt-13 justify-center items-center lg:gap-40 gap-3 rounded-lg lg:text-left text-center overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="relative w-full flex justify-end items-center lg:mb-0 mb-4"
                            >
                                <div className="bg-[#0054A5] hidden lg:block text-white lg:text-[260px] text-[100px] lg:w-[120px] w-[50px] lg:h-[120px] h-[50px] text-center leading-none select-none pointer-events-none z-0">“</div>
                                <div className="lg:absolute lg:top-[90px] lg:left-[193px] relative flex flex-col items-center lg:w-[120px] lg:h-[120px] w-full justify-center z-10">
                                    <img src={item.image} alt={item.author} className="lg:w-[120px] w-[120px] lg:h-[120px] h-[120px] lg:rounded-none rounded" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative z-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto text-center lg:text-left"
                            >
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 leading-relaxed">{item.quote}</p>
                                <h4 className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#0cacf0]">{item.author}</h4>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className="custom-prev absolute top-[300px] left-0 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className="custom-next absolute top-[300px] right-0 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
