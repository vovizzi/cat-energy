window.addEventListener("resize", (event) => {
  if (window.innerWidth <= 420) {
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
});
