import Blog from "../models/Blog.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
};

export const addBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
      return res
        .status(401)
        .json({ message: "Title, content, author is required" });
    }
    //OLD WAY WITHOUT DATABASE

    // const newBlog = {
    //   id: crypto.randomUUID(),
    //   title: title,
    //   author: author,
    //   content: content,
    //   published: new Date(),
    //   updated: new Date(),
    // };
    // blogs.push(newBlog);

    //METHOD 1 - using DB

    // const newBlog = await Blog.create({
    //   title: title,
    //   content: content,
    //   author: author,
    // });

    // METHOD 2

    const newBlog = new Blog({
      title: title,
      content: content,
      author: author,
    });
    await newBlog.save();
    res.status(200).json({ message: "Successfully created Blog", newBlog });
  } catch (error) {
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    // const blog = blogs.find((item) => {
    //   return item.id.toString() === id;
    // });
    const blog = await Blog.findById(id);
    if (!blog) {
      res.status(404).json({ error: "Blog Not Found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, content } = req.body;

    // OLD METHOD WITHOUT DATABASE
    // const blog = blogs.find((item) => {
    //   return item.id.toString() === id;
    // });
    // if (!blog) res.status(404).json({ error: "Blog Not found" });

    // if (title) blog.title = title;
    // if (author) blog.author = author;
    // if (content) blog.content = content;
    // blog.updated = new Date();

    //METHOD - 1
    // const blog = await Blog.findById(id);
    // if (!blog) res.status(404).json({ error: "Blog Not found" });
    // blog.title = title;
    // blog.content = content;
    // blog.author = author;
    // await blog.save();

    //Method -2
    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        title: title,
        content: content,
        author: author,
      },
      { new: true },
    );
    if (!blog) res.status(404).json({ error: "Blog Not found" });
    res.status(200).json({ message: "Updated successfully", blog });
  } catch (error) {
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    // blogs = blogs.filter((item) => {
    //   return item.id.toString() !== id;
    // });
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) res.status(404).json({ error: "Blog Not found" });
    res.status(200).json({ message: "Deleted successfully", blog });
  } catch (error) {
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
};
