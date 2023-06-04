document.designMode="on"
const spans1 = document.getElementsByClassName("animate1");
const spans2 = document.getElementsByClassName("animate2");
const spans3 = document.getElementsByClassName("animate3");
const spans4 = document.getElementsByClassName("animate4");

function animateSpans() {
  for (let i = 0; i < spans1.length; i++) {
    setTimeout(function () {
      spans1[i].classList.add("visible1");
    }, (i + 1) * 1000);
  }

  for (let i = 0; i < spans2.length; i++) {
    setTimeout(function () {
      spans2[i].classList.add("visible2");
    }, (i + 1) * 1000);
  }

  for (let i = 0; i < spans3.length; i++) {
    setTimeout(function () {
      spans3[i].classList.add("visible3");
    }, (i + 1) * 1000);
  }

  for (let i = 0; i < spans4.length; i++) {
    setTimeout(function () {
      spans4[i].classList.add("visible4");
    }, (i + 1) * 1000);
  }
}
/* Read more and show less button directing*/
const button = document.getElementsByTagName("button")[0];
const about = document.getElementById("about");
const htext = document.getElementsByClassName("hide")[0];
const text =document.getElementsByClassName('text')[0];
const visible = () =>{
 if (!(button.innerHTML == "Show less")) {
  about.style.height = "90vw";
  text.style.height = '65vw';
  button.innerHTML = "Show less";
  htext.style.display = "block";
 }
 else{
  about.style.height = "75vw";
  text.style.height = '50vw';
  button.innerHTML = "Read More";
  htext.style.display = "none";
 }
}
/* pre load animation*/
const loader = document.getElementById('preloader');
window.addEventListener("load", function() {
  loader.style.display= "none"
  document.body.style.overflow="visible"
})
animateSpans();
