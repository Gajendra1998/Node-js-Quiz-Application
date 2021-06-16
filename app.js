const express  =  require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');
const mongoose=require('mongoose');
// Model
const quiz= require('./models/quiz');
const user= require('./models/quiz');
const bodyParser = require('body-parser')
app.use(express.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({extended:true}));
app.use('/quiz', require('./routes/quiz'));
app.use('/', require('./routes/index'));
app.use(express.static("public"));
const db = require('./config/keys').MongoURI; 

// connect to mongo db

mongoose.connect(db, { useNewUrlParser:true,useUnifiedTopology: true })
 .then(()=>console.log('MongoDb connected...'))
.catch(err=>console.log(err));
//ejs setup
app.set('view engine', 'ejs');
app.use(expressLayouts);
//port setup
const port=5000;
app.listen(port, () => {
console.log(`app listening at port:${port}`)    
 
});