import { Link } from "react-router-dom";

export const BlogList = ({ blogs, setBlogs, title, isPending }) => {
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="blog-list">
      {!isPending && <h2>{title}</h2>}{" "}
      {/*onlly renders when the state of Pending changes*/}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{`Written by: ${blog.author}`}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
