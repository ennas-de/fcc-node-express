const express = require("express");

const app = express();

const dotenv = require("dotenv");

dotenv.config();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    return res.json({
      message: "HELLO JSON",
    });
  } else {
    return res.json({
      message: "Hello json",
    });
  }
});

app.get("/json", (req, res) => {
  res.json({
    message: "Hello json",
  });
});

const PORT = "3001";

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
