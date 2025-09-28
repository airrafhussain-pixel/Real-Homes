import { VscTriangleRight } from 'react-icons/vsc';
import { PhoneIcon } from 'lucide-react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="w-full bg-[#2d2d2d] flex justify-center py-16 px-6 text-[#fefcf8]">
      <footer className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 mb-10 text-sm text-[#fefcf8]/70">
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/11/rh-footer-logo.png"
            alt="logo"
            className="h-6"
          />
          <span>/</span>
          <span>Premium Real Estate Experience</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-5 text-[#c97a40]">Quick Links</h3>
            <ul className="flex flex-wrap gap-x-10 gap-y-3 justify-center lg:justify-start text-sm text-[#fefcf8]/80">
              <div className="space-y-3">
                <li className="flex items-center gap-2 hover:text-[#c97a40] transition"><VscTriangleRight /> Home</li>
                <li className="flex items-center gap-2 hover:text-[#c97a40] transition"><VscTriangleRight /> Half Map Layout</li>
                <li className="flex items-center gap-2 hover:text-[#c97a40] transition"><VscTriangleRight /> Blog</li>
              </div>
              <div className="space-y-3">
                <li className="flex items-center gap-2 hover:text-[#c97a40] transition"><VscTriangleRight /> List Layout</li>
                <li className="flex items-center gap-2 hover:text-[#c97a40] transition"><VscTriangleRight /> Grid Layout</li>
                <li className="flex items-center gap-2 hover:text-[#c97a40] transition"><VscTriangleRight /> Contact</li>
              </div>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-5 text-[#c97a40]">Contact</h3>
            <ul className="space-y-4 text-sm text-[#fefcf8]/80">
              <li className="flex items-center justify-center lg:justify-start gap-3 hover:text-[#c97a40] transition">
                <FaLocationDot className="w-5 h-5" /> 3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3 hover:text-[#c97a40] transition">
                <PhoneIcon className="w-5 h-5" /> Phone: 23-456-7890
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3 hover:text-[#c97a40] transition">
                <MdEmail className="w-5 h-5" /> Email: robot@inspirythemes.com
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-5 text-[#c97a40]">Tags</h3>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {[
                "awareness",
                "contemporary",
                "economy living",
                "image post",
                "interior",
                "living rooms",
                "studio",
                "trendy",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#c97a40] text-white text-sm px-3 py-1.5 rounded-md hover:bg-[#a05c2d] transition cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between text-sm text-[#fefcf8]/70 gap-3 border-t border-[#fefcf8]/20 pt-5">
          <span>© 2025. All rights reserved.</span>
          <span>
            Designed by <span className="hover:text-[#c97a40] transition">Bushra Jan</span>
          </span>
        </div>

        <span className="fixed bottom-6 right-6 border-2 border-[#fefcf8]/20 px-3 py-2 rounded-md bg-[#c97a40] hover:bg-[#a05c2d] transition cursor-pointer shadow-md">
          <img src="/top.png" className="w-8 h-4" alt="top" />
        </span>
      </footer>
    </div>
  );
};

export default Footer;
