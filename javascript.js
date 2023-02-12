

var button = document.getElementById("button"),
 buttonText = document.getElementById("buttontext"),
 c = document.querySelector('#button'),
 root = document.documentElement;

/* Phrase Changer Code */
/* You can edit the phrases and images here.*/

button.onclick = (function(){
  
var phrases = ["Click Me 😇", "Happy Birthday! 🥳", "You are Awesome 😍", "I Love You 😘", "Papa ki pari aur Bhaiya & Mummy ki jaan 😃", "School Friends💕","College Friends💕","Every Problem 2 Solution 🙂", "Our Gang 🤠","Bador Dance With Beautiful Dance Teacher 👻","Madam Ki Jan😏","Stay Happy like this for the rest of your life 😉",]
  
  // bImages = ["https://i.imgur.com/Q2ZST9f.jpeg", "https://i.imgur.com/saf2C0e.gif","https://i.imgur.com/Hdix4fN.jpg",
  //     "https://i.imgur.com/mYcAgr3.png", 
  //     "https://i.imgur.com/Hdix4fN.jpg", "https://i.imgur.com/4clqUdj.jpg","https://i.imgur.com/binfCky.jpg", "https://ak.picdn.net/shutterstock/videos/3153106/thumb/1.jpg", "https://birthdaycake24.com/uploads/worigin/2019/06/11/ happy-birthday-cake-with-name-birthdaycake245cff57627fae2_1239920b09a2d01c20f8265f4a0e3efd.gif"];
  bImages = ["./img/img1.jpeg","./img/last.gif","./img/img1.1.jpeg","./img/img2.jpeg","./img/img7.1.png","./img/img11.png","./img/img15.jpeg","./img/img14.png","./img/img5.jpeg","./img/img12.jpeg","./img/img10.jpeg","./img/img3.jpeg"]

  
 var count = 0;
 var imageCount = 0;
  return function(){
  root.style.setProperty('--image', "url(" + bImages[++count % phrases.length] + ")");
  buttonText.textContent = phrases[++imageCount % phrases.length];
  };
}());


//  if(count>7){
//   do: release balloons/confetti/or something cool;
// }


