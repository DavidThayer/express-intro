console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/albums',
     success: handleSuccess,
     error: handleError
   });

   function handleSuccess(json) {
     console.log(json);
     json.forEach(function(v, i) {
       var album = json[i];
       $('.container').append(`<p>${ album.title } - ${ album.artist }</p>`);
     })
   }

   function handleError(xhr, status, errorThrown) {
     console.log('uh oh');
   }


  // code in here

});
