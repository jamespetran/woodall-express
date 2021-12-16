# woodall-express-NOTES
woodall week 8 tuesday / day 02

express things

not a lot of logic... but there is a lot of "setup"

this set up stuff is the same every single time => so that is good
its like 20 lines and if you forget something it just won't work...

kind of like $('onReady');

don't git push for now...

1. run in terminal:
      $ npm init --yes
            #####npm is a tool that helps us download other libraries
            this creates this file: package.json 👈up on the left side
            "javascript object notation"

2. run in terminal:
      $ npm install express --save
            this adds approximately 1 million files to the folder browser
            also changes package.json
            and adds package-lock.json

3. add a ".git-ignore" file
      add the line "node_modules/" to stop all those node modules from getting uploaded to github


now i can git push

4. create server folder and server.js inside of it


5.  1st line of server.js:    
            `const express = require('express');`
            `const app = express();`
            
            const port = 5000;
            app.listen(port, () => {
                  console.log(`IM LISTENING!!!!`); //this is usually a console log!!!!!!
            });

6. access localhost:5000 to access the server

7. to kill the server: ^C or killall -9 node









things a webserver has: 
Path : / (file tree or the stuff after .com)

Method: GET



inside server.js there is code that makes the website interactive

databases

client.js talks to server.js and back and forth

data lives on the server

is $.ajax a jquery function? <= with the dollar sign, yes this is using jQuery

npm install moment - time stuff - confusing and idk how to make it work
npm install nodemon - auto restarts node server when i change anything - super useful for testing and stuff

the other method that a webserver has is POST

request document:
( =
      url = /comments
      method = post
      body = {
            author: 'andre',
            message: 'not enough jams'
      }
= )

this is submitted to server.js
and push()-ed to the array

$.ajax({
      url: "/comments",
      method: "POST",
      data: { message }
})

npm install body-parser

body parser takes an ugly body text like 
      ?author=andre&message=more%20jams%20plz
and turns it into 
      {author: `andre`, message: `more jams plz`}


GET AND POST:
GET
POST

These are from the users POV
post: 
      user:       i want to post comments to the server
      server:     ok ty for your comment (status code 201) (201 means "created")
get: 
      user:       i want to retrieve the list of comments
      server:     ok heres your comments

