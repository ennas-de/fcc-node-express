const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.send("Hello Abdulhakeem"));

const PORT = "3001";

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
