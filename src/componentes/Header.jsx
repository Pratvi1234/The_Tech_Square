import { IoPerson } from "react-icons/io5";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const bag = []; // temporary frontend bag

  return (
    <header className="header_container">
      {/* LOGO */}
      <div className="logo">
        <Link to="/" className="logo_link">
          <img
            className="myntra_home"
            src="../images/logo.png"
            alt="tech Home"
          />
          <h3 className="brand_text">
            THE <strong>TECH</strong>
            <sup>2</sup>
          </h3>
        </Link>
      </div>

      {/* NAVIGATION */}
      <nav className="nav_bar">
        <Link to="/">Home</Link>

        <div className="nav_item">
          <Link to="#">Categories</Link>
          <div className="dropdown">
            <Link to="#">iPhone</Link>
            <Link to="#">iPad</Link>
            <Link to="#">MacBook</Link>
            <Link to="#">Samsung</Link>
            <Link to="#">Watches</Link>
            <Link to="#">Earphones</Link>
            <Link to="#">Accessories</Link>
          </div>
        </div>

        <Link to="#">
          Trending <sup>New</sup>
        </Link>
        <Link to="#">Contact</Link>
      </nav>

      {/* SEARCH BAR */}
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>

      {/* ACTION ICONS */}
      <div className="action_bar">
        <Link to="/profile" className="action_container">
          <IoPerson />
          <span className="action_name">Profile</span>
        </Link>

        <div className="action_container">
          <FaRegHeart />
          <span className="action_name">Wishlist</span>
        </div>

        <Link to="/bag" className="action_container">
          <FaShoppingBag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
