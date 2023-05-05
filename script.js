
function windowSize() { 
  if (window.innerWidth <= 767) {
    let a = document.querySelector('img[src="./img/logo-tablet.svg"]');
    if (a) {
      a.setAttribute("src", "./img/logo-mobile.svg");
    }
  } else {
    let a = document.querySelector('img[src="./img/logo-mobile.svg"]');
    if (a) {
      a.setAttribute("src", "./img/logo-tablet.svg");
    }
  } 
;
}

window.addEventListener("resize", windowSize)
window.addEventListener("load", windowSize())


// document.querySelector('.burger').addEventListener('click',function() {
//   this.classList.toggle('active')
//   document.querySelector('.header-nav').classList.toggle('.open')
// })


document.querySelector('.burger').addEventListener('click',function() {
  this.classList.toggle('active')
  document.querySelector('.header-nav').remove()
})