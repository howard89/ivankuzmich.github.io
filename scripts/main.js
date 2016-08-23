var myImage = document.querySelector('img');

myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/mozila.jpeg') {
    myImage.setAttribute ('src', 'images/love.jpeg');
  } else {
    myImage.setAttribute ('src', 'images/mozila.jpeg');
  }
} 
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Wedding is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Wedding is cool, ' + steredName;
}

myButton.onclick = function() {
setUserName();
}
