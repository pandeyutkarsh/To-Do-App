const express  = require('express');
const bodyParser  = require('body-parser');
const { urlencoded } = require('body-parser');

const app = express();

var items = [];  //Global value


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(rer,res){

var today = new Date();
var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}

var day = today.toLocaleDateString("en-US",options);

res.render("list", {
    kindofday : day,
    newListItems: items
});

});

app.post("/", function(req,res){
     item = req.body.newItem;

     items.push(item) 

    // console.log(item);
    res.redirect("/");
})

app.listen(3000,function () {
    console.log("server is started at localhost: 3000");
});