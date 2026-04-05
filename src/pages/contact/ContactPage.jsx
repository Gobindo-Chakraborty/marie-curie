import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <Header />
      <title>Marie Curie - Contact</title>
      <h1>Contact Page</h1>
      <p>Welcome to Marie Curie contact page.</p>
      <Link to="/">Home</Link>
    </>
  );
}
