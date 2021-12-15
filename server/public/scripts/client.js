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
      let ajaxOptions = {
            method: 'GET',
            url: '/comments'
      }

      $.ajax(ajaxOptions);

}

console.log('js');