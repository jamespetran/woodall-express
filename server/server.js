/**
 * this code is running on a server somewhere
 */

const express = require('express');

//express is a function!!

const app = express();

// magic incantation to make the public folder the thing that people can see! 

// a shortcut to set up endpoints for:
// GET index.html
// GET another-one.html
// and any other files inside of public folder
app.use(express.static('server/public')) //this is how the public directory is linked up and served up to the web browser

//handle requests for GET /space-jams
//setup a GET /space-jams endpoint
// http://localhost:5000/space-jams 
app.get('/space-jams', (req,res) => {
      console.log(`bout to get some SPACE JAMS`);
      res.send(`
      <h1>
      its space jam time dood
      </h1>
      `);


});


app.get('/comments', (req,res) => {
      console.log('in GET /comments');
      res.send([
            {
                  author:'edan',
                  message:'new space jams sux 1996 ftw'
            },
            {
                  author: 'james',
                  message: 'im hungry'
            },
            {     
                  author: 'person',
                  message: 'same'
            }
      ])
});
const port = 5000;
app.listen(port, () => {
      console.log(`IM LISTENING!!!!`); //this is usually a console log!!!!!!
}); 

