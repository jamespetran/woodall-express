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

is $.ajax a jquery function?

