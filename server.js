// Importing all
const express = require('express');
const path = require('path');
const api = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

//This Middleware is for parsijng JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Organizing routes under /api
app.use('/api', api);
app.use(express.static('public'));
//get route for notes
app.get('/notes' , (req, res)=> 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
//get home page
app.get('*',(req,res)=>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);