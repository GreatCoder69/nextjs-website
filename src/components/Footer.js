import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12"> {/* Increased padding */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-10 md:space-y-0 md:space-x-32">
        {/* Left Container - Logo & Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold">GreatCoder69</h2> {/* Bigger font */}
          <p className="text-gray-400 text-lg mt-3">Arshabrata Bhaumik</p> {/* Increased font size and spacing */}
          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-5"> {/* Increased spacing */}
            <FaFacebookF className="text-white hover:text-blue-500 cursor-pointer" size={24} />
            <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" size={24} />
            <FaInstagram className="text-white hover:text-pink-500 cursor-pointer" size={24} />
            <FaYoutube className="text-white hover:text-red-500 cursor-pointer" size={24} />
          </div>
        </div>

        {/* Middle Container - Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold">Quick Links</h3> {/* Bigger font */}
          <ul className="mt-4 space-y-2 text-gray-400 text-lg"> {/* Increased spacing and font size */}
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-gray-500 text-lg">
        &copy; {new Date().getFullYear()} GreatCoder69. All rights reserved.
      </div>
    </footer>
  );
}
