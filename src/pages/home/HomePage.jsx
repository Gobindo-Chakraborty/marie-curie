import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <h1>Home Page</h1>
      <p>Welcome to Marie Curie home page.</p>
      <Link to="/contact">contact</Link>
    </>
  );
}
