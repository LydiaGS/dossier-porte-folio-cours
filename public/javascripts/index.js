/*$(document).ready(function(){
    var mouseX, mouseY;
    var ww = $( window ).width();
    var wh = $( window ).height();
    var traX, traY;
    $(document).mousemove(function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
      traX = ((4 * mouseX) / 570) + 40;
      traY = ((4 * mouseY) / 570) + 50;
      console.log(traX);
      $(".title").css({"background-position": traX + "%" + traY + "%"});
    });
  });*/
  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";
    
    var i = 0;
    var timer = setInterval(function() {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }
  
  
  // application
  var speed = 75;
  var h1 = document.querySelector('h1');
  var p = document.querySelector('p');
  var delay = h1.innerHTML.length * speed + speed;
  
  // type affect to header
  typeEffect(h1, speed);
  
  
  // type affect to body
  setTimeout(function(){
    p.style.display = "inline-block";
    typeEffect(p, speed);
  }, delay);
  let laptop = document.querySelector('.laptop');
let range = document.querySelector('.range');
let screen = document.querySelector('.screen');


range.addEventListener("change",()=>{
  
  var rangeValue = range.value;
  
  screen.style.transform = `rotateX(${rangeValue}deg)`;
  
})



let body = document.querySelector('body');


body.addEventListener("mousemove",(e)=>{
  
      var x = e.pageX;
      var y = e.pageY;
  
  laptop.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  
})


var a = 1;

body.addEventListener("mousedown",(e)=>{
  
   if(a == 1){
          screen.classList.add('screenLaptop');
     a = 0;
   }else{
     screen.classList.remove('screenLaptop');
     a = 1;
   }
 
  
})




body.addEventListener("touchmove",(e)=>{
  
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
  
  laptop.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  
})
/*------modale---*/
const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const dialog = document.querySelector("dialog");

openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

dialog.addEventListener("click", (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});
