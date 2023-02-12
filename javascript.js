

var button = document.getElementById("button"),
 buttonText = document.getElementById("buttontext"),
 c = document.querySelector('#button'),
 root = document.documentElement;



button.onclick = (function(){
  
var phrases = ["Click Me 😇", "Happy 2😆th Birthday 🥳", "You are Awesome 😍", "I Love You 😘", "Papa ki pari aur Bhaiya & Mummy ki jaan 😃", "School Friends💕","College Friends💕","Every Problem 2 Solution 🙂", "Our Gang 🤠","Bador Dance With Beautiful Dance Teacher 👻","Madam Ki Jan😏","Stay Happy like this for the rest of your life 😉",]
   
 
  bImages = ["img/img1.jpeg","img/last.gif","img/img1.1.jpeg","img/img2.jpeg","img/img7.1.png","img/img11.png","img/img15.jpeg","img/img14.png","img/img5.jpeg","img/img12.jpeg","img/img10.jpeg","img/img3.jpeg"]

  
 var count = 0;
 var imageCount = 0;
  return function(){
  root.style.setProperty('--image', "url(" + bImages[++count % phrases.length] + ")");
  buttonText.textContent = phrases[++imageCount % phrases.length];
  };
}());








