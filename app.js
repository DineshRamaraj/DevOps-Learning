const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const name = "Dineshkumar Ramaraj";

app.get("/", (req, res) => {
  const message = `Hello World From ${name}!`;
  res.send(message);
});

const server = app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server, name };
