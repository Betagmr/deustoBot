const blogRouter = require("express").Router();
const Blog = require("../models/blog");

blogRouter.get("/ins", (request, response) => {
  // Blog.find({}).then((blogs) => {
  //   response.json(blogs);
  // });

  const ob = {
    nombre: "Asier",
    apellidos: "Villar",
    edad: 10
  }

  response.json(ob);
});

blogRouter.post("/blogs", (request, response) => {
  // const blog = new Blog(request.body);
  // blog.save().then((result) => {
  //   response.status(201).json(result);
  // });
  console.log(request.body);

  response.status(201).json(result);
});

module.exports = blogRouter;
