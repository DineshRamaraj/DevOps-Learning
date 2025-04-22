const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World From DineshkumarRamaraj!");
});

const server = app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };
