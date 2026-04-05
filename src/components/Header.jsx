import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>

        <nav className="nav">Menu</nav>

        <div className="social-links">
          <a href="#" className="social-link">
            <svg className="icon facebook">
              <use href="/icons.svg#facebook-icon"></use>
            </svg>
          </a>

          <a href="#" className="social-link">
            <svg className="icon twitter">
              <use href="/icons.svg#twitter-icon"></use>
            </svg>
          </a>

          <a href="#" className="social-link">
            <svg className="icon linkedin">
              <use href="/icons.svg#linkedin-icon"></use>
            </svg>
          </a>

          <a href="#" className="social-link">
            <svg className="icon instagram">
              <use href="/icons.svg#instagram-icon"></use>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
