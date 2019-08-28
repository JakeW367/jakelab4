let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let showView = __dirname + "/folder/"

let db = [];
app.use(bodyParser.urlencoded({
    extended: false
}));
app.engine('html', require('ejs').renderFile);

app.listen(8000);
app.search("view engine", "html");

app.get('/', function (req, res){
    res.sendFile(showView + "index.html");
});

app.get('/addTask', function(req,res){
    res.sendFile(showView + "addNewTask.html")
});
app.post('/addNewTask', function (req,res){
    console.log(req.body);
    db.push(req.body);
    res.sendFile(showView + "index.html");
});

app.get('listTask', function(req,res){
    res.render("listTask.html",{task: db})
});