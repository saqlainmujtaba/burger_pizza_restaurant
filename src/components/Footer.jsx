import {
  FaFacebook,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
import "../styles/components/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="brand">
          <div className="logo">Logo</div>
          <div className="socials">
            <FaYoutube color="white" size={28} />
            <FaInstagram color="white" size={28} />
            <FaFacebook color="white" size={28} />
          </div>
        </div>
        <div className="links">
          <div className="about">
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Careers</p>
          </div>
          <div className="contact">
            <p>Contact Us</p>
            <p>Track Order</p>
          </div>
          <div className="terms">
            <p>Terms & Conditions</p>
          </div>
          <div className="apk">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.tribune.com.pk/logo/apple.webp"
                alt="Get it on Apple Store"
                className="play-badge"
                height="auto"
              />
            </a>

            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="play-badge"
              />
            </a>
          </div>
        </div>
        <div className="rights">
          <div className="copyRight">
            &copy; 2025 Logo. All rights reserved
          </div>
          <div className="developer">
            <p>Developed by</p>
            <h3>Saqlain Mujtaba</h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
