import { useParams } from "react-router-dom";
import { useContext } from "react";
import { myData } from "../../context/myDataContext";
import { Container } from "./styles";
import {useNavigate} from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useContext(myData);
  const navigate = useNavigate();

  const blog = blogs.filter((blog) => {
    return blog.id == id;
  });

  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    document.location.href = "/";
  } //reload to home and fetch data again

  const handleClick = (id) => {
    const index = blogs.map( blog => blog.id);
    const remove = index.indexOf(id);
    blogs.splice(remove,1);
    navigate('/');
  };

  return (
    <Container>
      <article>
        <h2>{blog[0].title}</h2>
        <p>Written by {blog[0].author}</p>
        <div>{blog[0].body}</div>
        <div className="buttonContainer">
          <button onClick={() => handleClick(blog[0].id)}>Delete Blog</button>
        </div>
      </article>
    </Container>
  );
};

export default BlogDetails;
