const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const phoneRoutes = require('./Routes/phoneRoutes');
const path = require('path');
const methodOverride = require('method-override');



// initialize the app
const app = express();
app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
// method override
app.use(bodyParser.json());
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.use('/phones', phoneRoutes);


app.get('/', (req, res) => {
  res.render('index', {
    message:"welcome to my app"
  })
});

app.listen(PORT, () => {
  console.log("Listening on port 3000")
})
app.get('*',(req, res) => {
  res.status(404).send('not found!');
})
