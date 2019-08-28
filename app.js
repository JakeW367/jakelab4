let express = require("express");
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let ejs = require('ejs');

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', 'lab4');

app.use(express.static('lab4'));
app.use(express.static('img'))
app.use(morgan('common'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/', function (req, res) {
    console.log('Hello from app.get');
    res.sendFile('index.html');
    res.render('/index.html')
    res.send("Thank you for your request");
});

app.post('/data', function (req, res) {
    console.log("I got post request");
    console.log(req.body.carName);
    res.sendFile('thankyou.html');
    res.render()

});

app.listen(8080);