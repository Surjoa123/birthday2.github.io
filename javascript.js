

var button = document.getElementById("button"),
 buttonText = document.getElementById("buttontext"),
 c = document.querySelector('#button'),
 root = document.documentElement;



button.onclick = (function(){
  
var phrases = ["Click Me π", "Happy 2πth Birthday π₯³", "You are Awesome π", "I Love You π", "Papa ki pari aur Bhaiya & Mummy ki jaan π", "School Friendsπ","College Friendsπ","Every Problem 2 Solution π", "Our Gang π€ ","Bador Dance With Beautiful Dance Teacher π»","Madam Ki Janπ","Stay Happy like this for the rest of your life π",]
   
 
  bImages = ["img/img1.jpeg","img/last.gif","img/img1.1.jpeg","img/img2.jpeg","img/img7.1.png","img/img11.png","img/img15.jpeg","img/img14.png","img/img5.jpeg","img/img12.jpeg","img/img10.jpeg","img/img3.jpeg"]

  
 var count = 0;
 var imageCount = 0;
  return function(){
  root.style.setProperty('--image', "url(" + bImages[++count % phrases.length] + ")");
  buttonText.textContent = phrases[++imageCount % phrases.length];
  };
}());








