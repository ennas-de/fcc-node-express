const express = require("express");

const app = express();

const dotenv = require("dotenv");

dotenv.config();

// console.log(process.env.MESSAGE_STYLE);

// app.use(express.json());
app.use(express.static(__dirname + "/public"));

// root level middleware // it applies to all routes
const middleware = (req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  console.log(req.ip);
  next();
};

// console.log(req.path);

app.get("/", (req, res) => {
  res.send("Hello Abdulhakeem");
});

app.get("/json", middleware, (req, res) => {
  req.MESSAGE_STYLE = process.env.MESSAGE_STYLE;

  if (req.MESSAGE_STYLE == "uppercase") {
    return res.json({
      message: "HELLO JSON",
    });
  } else {
    return res.json({
      message: "Hello json",
    });
  }
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    console.log(req.params);
    next();
  },
  (req, res) => {
    return res.json({
      time: req.time,
    });
  }
);

app.get("/:word/echo", (req, res) => {
  //   console.log(req.params);
  const word = req.params.word;
  res.json({
    echo: word,
    // echo: req.params.word,
  });
});

app.get("/name", (req, res) => {
  console.log(req.query);

  const { firstname, lastname } = req.query;
  // const firstname = req.query.firstname;
  // const lastname = req.query.lastname;

  res.json({
    name: `${firstname} ${lastname}`,
  });
});

const PORT = "3001";

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
