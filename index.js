const express = require('express');
const methodOverride = require('method-override');

require("dotenv").config();

const systemConfig=require("./config/system");

const database=require("./config/database.js");
// const route= require("./routes/client/index_router");
const routeAdmin=require("./routes/admin/index.route");

const bodyParser = require('body-parser');
database.connect();


const app = express();
const port = process.env.PORT;

app.use(methodOverride('_method'));

//parse application -npm i body-parser
app.use(bodyParser.urlencoded({extended:false}));




app.set("views", "./views");
app.set("view engine", "pug");
// App Locals Variables
app.locals.prefixAdmin= systemConfig.prefixAdmin;

app.use(express.static("public"));

// route(app);
routeAdmin(app);

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})
