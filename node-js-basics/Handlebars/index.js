const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const port = 2000;

// to tell express about the template engine we are using write
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const person = {
    uname: "Arjun",
    role: "Admin",
  };
  res.render("./home.handlebars", { person }); // to access it use {{person}} in home.handlebars
});

app.get("/about", (req, res) => {
  /* array of objects */
  const persons = [
    { uname: "priyesh", role: "employee" },
    { uname: "manjunath", role: "employee" },
  ];

  res.render("./about.handlebars", { persons });
});

app.get("/contacts", (req, res) => {
  /* array of string */

  res.render("./contacts.handlebars", {
    usersData: ["ajay", "vijay"],
    isAdmin: true,
  });
});




app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
