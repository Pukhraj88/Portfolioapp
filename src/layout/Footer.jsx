import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";


import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="container">
      <div id="footer-container-div">
        {/* contact info div */}
        <div className="contact-info-footer-div">
          <ul className="contact-info-footer">
            <li>
              <h1>Contact Info</h1>
            </li>
            <li>
              <p className="contact-info-footer-p">
                <span>
                  <LuPhoneCall />
                </span>
                +919784139574
              </p>
            </li>
            <li>
              <p className="contact-info-footer-p">
                <span>
                  <LuGithub />
                </span>
                Pukhraj88
              </p>
            </li>
            <li>
              <p className="contact-info-footer-p">
                <span>
                  <MdEmail />
                </span>
                pukhrajnemiwal9@gmail.com
              </p>
            </li>
            <li>
              <p className="contact-info-footer-p">
                <span>
                  <FaLocationDot />
                </span>
                Rajasthan,India-332001
              </p>
            </li>
          </ul>
        </div>

        {/* quick links */}
        <div className="contact-info-footer-div">
          <ul className="contact-info-footer">
            <li>
              <h1>Quick Links</h1>
            </li>
            <li>
              <p className="quick-links">
                <span>
                  <FaArrowUpRightFromSquare />
                </span>
                Home
              </p>
            </li>
            <li>
              <p className="quick-links">
                <span>
                  <FaArrowUpRightFromSquare />
                </span>
                Contact
              </p>
            </li>
            <li>
              <p className="quick-links">
                <span>
                  <FaArrowUpRightFromSquare />
                </span>
                Skills
              </p>
            </li>
            <li>
              <p className="quick-links">
                <span>
                  <FaArrowUpRightFromSquare />
                </span>
                Blogs
              </p>
            </li>
          </ul>
        </div>

        {/* media accounts */}
        <div className="contact-info-footer-div">
          <ul className="contact-info-footer">
            <li>
              <h1>Media Links</h1>
            </li>
            <li>
              <p className="quick-links">
                <span>
                  <FaFacebook />
                </span>
                Pukhraj88
              </p>
            </li>
            <li>
              <p className="quick-links">
                <span>
                  <FaInstagram />
                </span>
                @pukhrajKumar
              </p>
            </li>
            <li>
              <p className="quick-links">
                <span>
                  <FaTwitter />
                </span>
                pukhrajKumar
              </p>
            </li>
            <li>
              <p className="quick-links">
                <span>
                  <MdEmail />
                </span>
                pukhrajnemiwal9
              </p>
            </li>
          </ul>
        </div>

      </div>

      {/* title end div */}
      <div>
        <div className="text-footer-div">
          <span className="text-footer">
            © 2021-2025 BCA Final Year Project
          </span>
          <span className="text-footer">BUILT BY PUKHRAJ NEMIWAL</span>
        </div>

        <ul className="icons-footer">
          <li><a href="https://www.facebook.com/your-username" target="_blank" rel="noopener noreferrer"><span><FaFacebook/></span></a></li>
          <li><a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer"><span><FaInstagram/></span></a></li>
         <li><a href="https://github.com/Pukhraj88" target="_blank" rel="noopener noreferrer"><span><FaGithub/></span></a></li>
          <li><a href="https://t.me/@Pukhraj0012" target="_blank" rel="noopener noreferrer"><span><FaTelegram/></span></a></li>                  
          
        </ul>
      </div>
    </div>
  );
};
