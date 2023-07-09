


var intervalId;
var change = 0;
var factor = 5;

function startMoving() {
  document.getElementById("startButton").disabled = true;//buttons for start and stop//
  document.getElementById("stopButton").disabled = false;
  intervalId = setInterval(moveImage, 100);
}

function moveImage() {
  var image = document.getElementById("memeImage");//getting my image//
  var maxX = window.innerWidth - image.width;

  if (change <= maxX) {
    image.style.left = change + "px";
    change += factor;//factor var from above set at 5//
  } else {
    clearInterval(intervalId);//functions ensures that the image movement is repeated at a regular interval and can be stopped when needed//
    intervalId = setInterval(moveImage, 100);//image moving at 100 millaseconds //
    change = 0;
  }
}

function stopMoving() {
  document.getElementById("stopButton").disabled = true;// my stop function//
  document.getElementById("startButton").disabled = false;
  clearInterval(intervalId);
}
