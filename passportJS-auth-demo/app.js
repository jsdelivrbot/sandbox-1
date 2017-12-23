var express     = require("express"),
    mongoose    = require("mongoose"),
    app         = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/authDemoDB", {useMongoClient: true})
app.set('view engine', 'ejs')
app.get("/", function(req, res){
    res.render("home")
})

app.get("/secret", function(req, res){
    res.render("secret")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server is running.")
})