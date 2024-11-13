import "../styles/SocialNavigation.css";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const SocialNavigation = () => {
  return (
    <div className="social-nav-container">
      <div className="social-nav-group">
        <MdEmail />
        Example@4googpaws.com
      </div>
      <div className="social-nav-group">
        <FaPhone />
        (402)555-5555
      </div>
      <div className="social-nav-group">
        <IoLogoFacebook />
        <FaInstagram />
        <FaXTwitter />
      </div>
      <div className="social-nav-group">Client Login</div>
    </div>
  );
};

export default SocialNavigation;
