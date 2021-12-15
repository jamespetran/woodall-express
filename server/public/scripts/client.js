/**
 * this code is running on a users computer
 */

$(onReady);


function onReady() {
      console.log('im ready dude');
      console.log('jq');

      // TO DO
      // write some code to get data from the 
      // GET /comments endpoint
      // and then render that data to the DOM

      // make a network request
      // make a http request
      // make an ajax request
      // $.ajax();
      // asynchronus javascript and xml
      // arguments: method, path (aka url)
      // e.g. GET /comments
      // gets arguments as an object
      $('#refresh').on('click', refresh);
      $('#commentForm').on('submit', onAddComment);

}

console.log('js');

function refresh() {
      let ajaxOptions = {
            method: 'GET',
            url: '/comments'
      }

      $.ajax(ajaxOptions)
            .then((response) => {
                  console.log('ajax request complete', response);
                  render(response);
            });

      console.log(`made a network request but
      noone has time to wait for that`);
      $('#messageInput').val('');
      $('#authorInput').val('');

}

function render(state) {
      console.log('in render', state);
      $('#comments').empty();
      // d(o some jquery to render comments (state) to the DOM
      for (comment of state) {
            $('#comments').append(`<div class="commentBox"> <p class="author">AUTHOR: ${comment.author}</p>
                  <p class="message">MESSAGE: ${comment.message}</p> </div>`);
      }

}

function onAddComment(event) {
      //dont reload the page
      event.preventDefault();

      console.log('in add comment');

      //prepare message object to post to the server
      let comment = {
            author: $('#authorInput').val(),
            message: $('#messageInput').val()
      };
      console.log(comment);

      $.ajax({
            method: 'POST',
            url: '/comments',
            //send the comment to the server in the request "body"
            //this will become req.body on server.js
            data: comment

      })
            .then((response) => {
                  console.log('POST Response', response);

                  //refresh 
                  //as in, get comments from server and render to DOM
                  refresh();
                  
            })

}