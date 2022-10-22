import { Link } from "react-router-dom";
import Container from "./styles";

const NotFound = () => {
    return ( 
        <Container>
            <h2>Sorry!</h2>
            <p>Page not found.</p>
            <Link to='/'>Back to home...</Link>
        </Container>
     );
}
 
export default NotFound;