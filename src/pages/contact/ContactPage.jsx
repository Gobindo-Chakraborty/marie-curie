import { Link } from "react-router-dom";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <h1>Contact Page</h1>
      <p>Welcome to Marie Curie contact page.</p>
      <Link to="/">Home</Link>
    </>
  );
}
