import { Link } from "react-router-dom";
import logo from "../../assets/tourpress-retina-logo.png";
import { FaPhone } from "react-icons/fa";
import TopNavbar from "./TopNavbar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const selector = useSelector((state) => state.tour.TourCart);
  return (
    <div className="w-full sticky bg-white z-50 top-0">
      <TopNavbar />
      <div className="navbar shadow-lg  bg-white">
        <div className="flex-1">
          <Link to="/">
          <img className="w-40 h-8" src={logo} alt="TourPress Logo" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex space-x-4">
            <li className="lg:flex hidden">
              <Link
                className="hover:text-blue-600 transition-transform duration-300 transform hover:scale-105"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <details className="group">
                <summary className="cursor-pointer hover:text-blue-600 transition-transform duration-300 transform hover:scale-105">
                  Tour
                </summary>
                <ul className="absolute left-0 mt-2 w-52 bg-[#00AEEF] rounded shadow-lg opacity-0 group-open:opacity-100 transition-opacity duration-300 transform scale-95 group-open:scale-100">
                  <li className="border-b border-white hover:bg-blue-100 transition-colors duration-300">
                    <a
                      className="block px-4 py-2 text-white hover:text-black"
                      href="/tour"
                    >
                      Tours List
                    </a>
                  </li>

                  <li className="border-b border-white hover:bg-blue-100 transition-colors duration-300">
                    <a
                      className="block px-4 py-2 text-white hover:text-black"
                      href="/galary"
                    >
                      Tour Gallery
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li className="relative group">
              
                <summary className="cursor-pointer hover:text-blue-600 transition-transform duration-300 transform hover:scale-105">
                  <Link className="" to="/booking">
                    Booking ({selector.length > 0 ? selector.length : "0"})
                  </Link>
                </summary>
              
            </li>

            <li className="lg:flex hidden">
              <Link
                className=" hover:text-blue-600 transition-transform duration-300 transform hover:scale-105"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="lg:flex hidden">
              <Link
                className="flex items-center hover:text-blue-600 transition-transform duration-300 transform hover:scale-105"
                to="/contact"
              >
                <FaPhone className="mr-1" /> 0161.......22
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
