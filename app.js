var express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
app.use(cors())
    //var PORT = process.env.port;
    //var PORT = 5555;
var PORT = process.env.PORT || 3000;
//creating instance
app.get("/", (req, res) => {
    console.log(req);
    res.send("welcome to coding competion #2 smitha jacob ,i belongs to Norka Mern batch1");
});
app.get("/:name", (req, res) => {
    var data = req.params.name;
    //console.log(req);
    res.send("you enteerd" + data);
});


app.post("/home", (req, res) => {
    //in get value in params var Fname=req.params.name;
    var Fname = req.body.Fname;
    var Lname = req.body.Lname;
    // var Email = req.body.Email1;
    //console.log(req);
    res.send("you enteerd" + Fname + " " + Lname);
});
app.listen(PORT, () => {

    console.log("server ready at 3000");
})

//app.get(path,handler function)
//