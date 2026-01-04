import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="logo">
            <img
              className="myntra_home"
              src="../images/logo.png"
              alt="Myntra Home"
            />
            <div className="footer_column">
              <h1>
                THE
                <strong> TECH</strong>
                <sup>2</sup>
              </h1>
              <center>
                <h6>YOUR TECH STOP</h6>
              </center>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer_column">
            <h3>QUICK LINKS</h3>
            <a href="#">Contact</a>
            <a href="#">Track Your Order</a>
            <a href="#">Device Conditions</a>
            <a href="#">Why Us?</a>
            <a href="#">About Us</a>
          </div>

          {/* Policies */}
          <div className="footer_column">
            <h3>STORE POLICY</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping Policy</a>
          </div>

          {/* Newsletter */}
          <div className="footer_column">
            <h3>SubScribe to our emails</h3>
            <p>
              Subscribe to our Newsletter and the
              <br />
              first to know about exclusive deals,new <br /> arrivals, and ech
              tips!
            </p>

            <input type="email" placeholder="Enter your email" />

            <button>Subscribe</button>
          </div>
        </div>
        <div className="social">
          <center>
            <FaInstagram />
            <FaYoutube />
            <IoLogoTiktok />
          </center>
        </div>
        <hr />

        <div className="copyright">
          <center>© 2026 www.myntratech.com. All rights reserved.</center>
        </div>
      </footer>
    </>
  );
};

export default Footer;
