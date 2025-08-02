const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


// GET - Show the form
app.get('/', (req, res) => { 
     res.render('form');
});


app.post('/submit', (req, res) => {
  console.log("Form Data:", req.body);
  res.render('success');
});

// POST - Handle form submit
/* app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Form Data:", req.body);
  res.render('success', { name });
}); */

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});