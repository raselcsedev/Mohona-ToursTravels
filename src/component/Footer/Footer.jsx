import visaImg from "../../assets/review/visa.png";
import amexImg from "../../assets/review/amex.png";
import mastercardImg from "../../assets/review/mastercard.png";
import paypalImg from "../../assets/review/paypal.png";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-between footer bg-[#2D363F] text-white p-10 mt-8">
        <nav>
          <h6 className="footer-title">Travel Services</h6>
          <a className="link link-hover">Booking</a>
          <a className="link link-hover">Destinations</a>
          <a className="link link-hover">Guides & Tours</a>
          {/* <a className="link link-hover">Tours</a> */}
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">About us</a>
          {/* <a className="link link-hover">Press</a> */}
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Cookie Policy</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
        </nav>
      </footer>

      <footer className="flex items-center justify-between footer bg-[#2D363F] text-white border-t border-base-300 px-10 py-4">
        <aside className="flex items-center space-x-4">
          <p>
            &copy; copyright 2024 Mohona Tours & Travels - All Right Reserved.
          </p>
        </aside>
        <nav className="flex justify-end space-x-2">
          {/* Visa */}
          <a href="#">
            <img src={visaImg} alt="Visa" className="w-20 h-8" />
          </a>
          {/* American Express */}
          <a href="#">
            <img src={amexImg} alt="American Express" className="w-20 h-8" />
          </a>
          {/* MasterCard */}
          <a href="#">
            <img src={mastercardImg} alt="MasterCard" className="w-20 h-8" />
          </a>
          {/* PayPal */}
          <a href="#">
            <img src={paypalImg} alt="PayPal" className="w-20 h-8" />
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
