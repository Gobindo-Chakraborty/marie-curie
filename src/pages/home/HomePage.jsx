import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome to Marie Curie home page.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        recusandae vero, sunt autem officia ea eveniet. Voluptatibus animi
        itaque atque, cumque iure fuga aut corporis? Ea, amet. Aliquid, aliquam
        animi.
      </p>
      <Link to="/contact">contact</Link>
    </>
  );
}
