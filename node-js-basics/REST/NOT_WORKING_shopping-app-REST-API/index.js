const express = require("express");
const cors = require('cors')

require("dotenv").config();

//Db connection
require("./config/db.js");

const productRoutes = require("./routes/products");

//userRoutes
const userRoutes = require("./routes/users");

const app = express();

const PORT = process.env.PORT || 2000;

// CORS MIDDLEWAR3  to make application accessibble to other applications
app.use(cors())

//bodyparser
app.use(express.urlencoded({ encoded: true }));
app.use(express.json());

//   ROUTES MIDDLEWARE
// to access products
app.use("/products", productRoutes);
//To acces the users
app.use("/users", userRoutes);

app.get("/test", (req, res) => {
  res.json({ test: "test the rest service" });
});

//Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    error: true,
    message: err.message,
    data: null,
  });
});

app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
