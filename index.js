const express = require("express");
const bodyParser = require("body-parser");
const contacts = require("./Routes/contacts")
const comments = require("./Routes/comments")
const products = require("./Routes/products")
const vehicles = require("./Routes/vehicles")
const app = express();
app.use(express.static("public"))
app.use(bodyParser.json())

//all
app.use(contacts)
app.use(comments)
app.use(products)
app.use(vehicles)

//onething




//post stuff







const port = process.env.PORT || 4000;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
