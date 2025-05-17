import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Mike.</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +123456789</p>");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
