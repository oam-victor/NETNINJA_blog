import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./components/navbarFolder/Navbar";
import Home from "./components/homeFolder/Home";
import GlobalStyle from "./styles/globalStyle";
import { myData } from "./context/myDataContext";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePost from "./components/createPostFolder/CreatePost";
import BlogDetails from "./components/blogDetailsFolder/BlogDetails";
import NotFound from "./components/notFoundFolder/notFound";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIspending] = useState(true);

  useEffect(() => {
    axios.get("api/posts").then((res) => {
      setBlogs(res.data);
      setIspending(false);
    });
  }, []);

  return (
    <myData.Provider value={{ blogs, setBlogs, isPending}}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  path="/create" element={<CreatePost/>}/>
            <Route  path="/blogs/:id" element={<BlogDetails/>}/>
            <Route  path="*" element={<NotFound/>}/>
              
          </Routes>
        </Fragment>
      </Router>
    </myData.Provider>
  );
}

export default App;
