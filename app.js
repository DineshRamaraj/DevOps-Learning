const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World From Dineshkumar!");
});

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
