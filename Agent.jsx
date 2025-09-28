import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";

export default function Agent() {
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
        { 
            name: "Alice Brian",
            phone: "+1-234-456-7891",
            email: "robot@inspirythemes.com",
            listed: 3,
            image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-6.jpg",
        },
        { 
            name: "John David",
            phone: "+1-234-456-7890",
            email: "robot@inspirythemes.com",
            listed: 5,
            image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2.jpg",
        },
    ];

    return (
        <div className="px-6 py-16 bg-[#fefcf8]">
            <div className="text-center mb-14">
                <h1 className="uppercase text-[13px] font-semibold text-[#c97a40] tracking-wide">Our Team</h1>
                <h2 className="text-3xl font-extrabold text-[#222222]">Trusted Agents</h2>
                <p className="text-gray-600 mt-3 text-sm">Dedicated experts helping you find your perfect home</p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
                {agents.map((agent, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="w-[270px] bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 text-center border border-[#f2e9e1]"
                    >
                        <div className="flex justify-center mb-5">
                            <img src={agent.image} alt="agent" className="w-[110px] h-[110px] rounded-full object-cover border-4 border-[#f8f1ea]" />
                        </div>

                        <div>
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <h3 className="text-lg font-bold text-[#2d2d2d] hover:text-[#c97a40] transition-colors">{agent.name}</h3>
                                <span className="bg-[#c97a40] text-white rounded-full p-1 text-xs flex items-center justify-center">
                                    <TiTick />
                                </span>
                            </div>
                            <p className="text-sm text-[#c97a40]">{agent.phone}</p>
                            <p className="text-sm text-gray-700 mt-1">{agent.email}</p>

                            <div className="mt-5 flex flex-col items-center font-semibold text-[#4a2f1e]">
                                <span className="text-xl text-[#c97a40]">{agent.listed}</span>
                                <span className="text-sm">Properties Listed</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
