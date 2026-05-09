import logo from "../assets/logo.png";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";
import Navbar from "./Navbar";

export default function Header() {
  const socialIcon = "h-3.5 w-auto";

  return (
    <header className="bg-secondary-bg">
      <div className="flex justify-between w-11/12 mx-auto pt-5 pb-4">
        <a href="/" className="flex shrink-0">
          <img src={logo} className="h-4 w-auto" alt="Marie Curie logo " />
        </a>

        <Navbar />

        <div className="flex gap-2.5">
          <a href="#">
            <Facebook className={socialIcon} />
          </a>
          <a href="#">
            <Twitter className={socialIcon} />
          </a>
          <a href="#">
            <Linkedin className={socialIcon} />
          </a>
          <a href="#">
            <Instagram className={socialIcon} />
          </a>
        </div>
      </div>
    </header>
  );
}
