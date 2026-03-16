import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">FoodZone</h2>
          <p className="text-sm text-gray-400">
            FoodZone is a modern food delivery platform where you can explore
            restaurants, order food, and enjoy fast delivery at your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Restaurants</li>
            <li className="hover:text-white cursor-pointer">Grocery</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>

          <div className="flex gap-4 text-xl">
            <a href="https://github.com/shubhamchauhan639" className="hover:text-white">
              <FaGithub />
            </a>

            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>

            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} FoodZone. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;