import { FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full  min-h-[90px]">
      <div className="w-full mx-auto px-8 flex flex-col md:flex-row items-center justify-between h-full">
        
        {/* Heading on Left */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-center md:text-left mb-8 md:mb-0">
            Fit Rahoo !!
          </h2>
        </div>

        {/* Icons on Right */}
        <div className="flex gap-8 text-4xl flex-shrink-0">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-orange-500 transition" />
          </a>
          <a href="tel:+1234567890">
            <FaPhoneAlt className="hover:text-orange-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-orange-500 transition" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-orange-500 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;