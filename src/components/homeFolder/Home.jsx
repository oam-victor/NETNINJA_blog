import { Container } from "./styles";
import { BlogList } from "../blogListFolder/BlogList";
import { useContext } from "react";
import { myData } from "../../context/myDataContext";

const Home = () => {
  const {blogs, setBlogs, isPending} = useContext(myData);

  return (
    <Container className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} setBlogs={setBlogs} title="All Blogs!" isPending={isPending}/>}
    </Container>
  );
};

export default Home;
