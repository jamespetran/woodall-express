const express = require('express');

//express is a function!!

const app = express();

// magic incantation to make the public folder the thing that people can see! 

// a shortcut to set up endpoints for:
// GET index.html
// GET another-one.html
// and any other files inside of public folder
app.use(express.static('server/public'))

//handle requests for GET /space-jams
//setup a GET /space-jams endpoint
// http://localhost:5000/space-jams 
app.get('/space-jams', (req,res) => {
      console.log(`bout to get some SPACE JAMS`);
      res.send();


});

const port = 5000;
app.listen(port, () => {
      console.log(`IM LISTENING!!!!`); //this is usually a console log!!!!!!
}); 

