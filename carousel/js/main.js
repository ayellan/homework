// create an array of image paths
var images = ['image_1.jpg', 'image_2.jpg', 'image_3.jpg', 'image_4.jpg', 'image_5.jpg', 'image_6.jpg'];

//  set a variable for our currentPosition
var currentPosition = 0;

//  when the user clicks on the next button
$('#next').on('click', function() {
	// add one to the currentPosition
	currentPosition += 1;
  $('#prev').prop('disabled', false);
    //  if current position is the last index
    	if (currentPosition === 5) {
    //  disable the next button
        $('#next').prop('disabled', true);
      }
    //  change the src of #image-to-vote-on to current image
      $('#image-to-vote-on').attr('src', 'images/' + images[currentPosition]);
      //  show likes
      $('#votes').html('Likes: ' + likeCount[currentPosition]);
});
//  when the user click on the previous button
$('#prev').on('click', function() {
  //  subtract one from the currentPosition
  currentPosition -= 1;
  //  enable next button
  $('#next').prop('disabled',false);
  //  if currentPosition is 0
  if(currentPosition === 0) {
    //  disable previous button
    $('#prev').prop('disabled', true);
  }
  //  change the src of image
  $('#image-to-vote-on').attr('src', 'images/' + images[currentPosition]);
  //  show likes
  $('#votes').html('Likes: ' + likeCount[currentPosition]);
});

  //  when the user click  the upvote button
var likeCount = [0,0,0,0,0,0];

$('#upvote').on('click', function() {
  likeCount[currentPosition] = likeCount[currentPosition] + 1;
  $('#votes').html('Likes: ' + likeCount[currentPosition]);
});


  // when the user clicks the downvote button
  $('#downvote').on('click', function() {
  likeCount[currentPosition] = likeCount[currentPosition] - 1;
  $('#votes').html('Likes: ' + likeCount[currentPosition]);
});