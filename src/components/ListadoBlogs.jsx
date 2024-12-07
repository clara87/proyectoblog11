import { newsMock } from "../mocks/newsMock";
import { useState } from "react";
import Blog from "../pages/home/Blogs";
import BlogAdmin from "../pages/mis-blogs/BlogsAdmin";

const ListadoBlogs = ({ isLogged = false }) => {
  const [blogs, setBlogs] = useState(newsMock);
  //const [blogsFilter, setBlogsFilter] = useState([]);
  let blogsFilter = blogs


  const handleDelete = (id) => {
    blogsFilter=blogsFilter.filter((blog) => !(blog.source.id == id));
    //setBlogsFilter (blogsFilter.filter((blog) => !(blog.source.id == id)));

  }

  if (isLogged) {
    blogsFilter = (blogs.filter((blog) => blog.author === "Investing.com"));
    //setBlogsFilter(blogs.filter((blog) => blog.author === "Investing.com"));

    return (
      <>
        {blogsFilter.map((blog) => (
          <BlogAdmin blog={blog} key={blog.source.id} handleDelete={handleDelete} />
        ))}
      </>
    );
  }

  return (
    <>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.source.id} />
      ))}
    </>
  );
};

export default ListadoBlogs;