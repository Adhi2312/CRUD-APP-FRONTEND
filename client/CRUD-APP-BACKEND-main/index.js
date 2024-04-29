const  express = require("express");
require("./config.js");
var routes = require('./routes'); //importing route

const path = require("path");
var cors = require('cors')
// create express app
const  app = express();
// use middleware on express app
app.use(cors());
app.use(express.urlencoded())
app.use(express.json())
// define port to run express app
const  port = process.env.PORT || 4000;
// Add endpoint
app.get('/', (req, res) => {
res.send("Welcome to our Todo App");
});
// Listen to server
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});
routes(app);