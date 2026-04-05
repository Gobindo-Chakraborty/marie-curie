import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome to Marie Curie home page.</p>
      <Link to="/contact">contact</Link>
    </>
  );
}
