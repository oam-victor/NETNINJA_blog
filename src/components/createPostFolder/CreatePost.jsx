import { useState, useContext } from "react";
import { Container } from "./styles";
import { myData } from "../../context/myDataContext";
import {useNavigate} from 'react-router-dom';

const CreatePost = () => {
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    document.location.href = "/";
  } //rel

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Amanda");
  const {blogs} = useContext(myData);
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();

    const key ={
      id: 0
    }

    blogs.forEach((blog)=>{
      key.id += blog.id;
    })

    const id = key.id;

    const blog = { body, title, author, id };
    blogs.push(blog);
    navigate('/');
    
  };

  return (
    <Container className="create">
      <h2>ADD A NEW BLOG</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">BLOG TITLE:</label>
        <input
          type="text"
          required
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <label htmlFor="">BLOG BODY:</label>
        <textarea
          required
          value={body}
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={({ target }) => setBody(target.value)}
        ></textarea>
        <label htmlFor="">BLOG AUTHOR</label>
        <select
          name=""
          id=""
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        >
          <option value={"Amanda"} name="" id="">
            Amanda
          </option>
          <option value={"Mel"} name="" id="">
            Mel
          </option>
          <option value={"Sam"} name="" id="">
            Sam
          </option>
          <option value={"Victor"} name="" id="">
            Victor
          </option>
        </select>
        <button>ADD BLOG</button>
      </form>
    </Container>
  );
};

export default CreatePost;
