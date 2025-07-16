import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { FaStore } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import "../styles/components/header.css";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const bucketItems = useSelector((state) => state.cart.bucketItems);

  // Count total quantity
  const cartCount = bucketItems.reduce((total, item) => total + item.qty, 0);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10; // Change threshold if needed
      setIsSticky(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className={`header ${isSticky && "sticky-active"}`}>
        <div className="brandArea">
          <Link to="/" className="logo">
            Fast Food
          </Link>
          {/* <div className="logo">Umer Burger and resturant</div> */}
          <div className="orderType">
            <button>
              <FaTruckFast size={20} />
              <span className="ottag">Delivery</span>
            </button>
            <button>
              <FaStore size={20} />
              <span className="ottag">Pick-up </span>
            </button>
          </div>
        </div>
        <div className="userArea">
          <Link to="/bucket" className="cart">
            <CiShoppingCart className={`profileIcon ${cartCount > 0 ? "redIcon" : ""}`}  />
            {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
          </Link>
          <div className="profile">
            <CgProfile className="profileIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
``;
