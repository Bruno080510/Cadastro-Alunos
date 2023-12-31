const express = require("express");
const path = require("path");
const routes = require("./routers/routes");
const connectToDb = require("./models/db");
const expressLayouts = require("express-ejs-layouts");

connectToDb();
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
