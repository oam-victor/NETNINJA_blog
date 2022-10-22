import { Container } from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <nav className="navbar">
        <h1>Odam</h1>
        <div className="links">
          <Link to='/'> Home </Link>
          <Link to="/create"> Add Blog </Link>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
