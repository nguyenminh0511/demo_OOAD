require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3000; 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use('/public', express.static(path.join(__dirname, './public')));

const SVRouter = require("./routers/SVRouter");
    
app.get('/', (req, res) => {
    res.redirect('/admin/ServiceProvider');
})

app.use('/', SVRouter);

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})